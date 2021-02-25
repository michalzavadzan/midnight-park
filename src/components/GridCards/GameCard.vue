<template>
  <div :class="{ z110: isHovering }" class="flex">
    <article
      class="w-64 md:w-80 my-3 bg-gray-800 rounded-t-lg transition-all duration-200 transform hover:scale-105"
      :class="{ roundedblg: !isHovering }"
    >
      <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
        <div class="relative">
          <div
            :class="{ hidden: isHovering }"
            class="absolute w-full h-full bottom-0 right-0 bg-gradient-to-t from-gray-800"
          ></div>
          <img
            :src="result.background_image"
            :alt="result.name"
            class="rounded-t-lg h-60 object-cover"
          />
        </div>
        <div>
          <div class="m-2 flex justify-between items-center">
            <router-link
              :to="{
                name: 'Game',
                params: { slug: result.slug }
              }"
            >
              <h2 class="font-semibold" :class="{ underline: isHovering }">
                {{ isHovering ? result.name : shorterName(result.name) }}
              </h2>
            </router-link>
            <strong
              v-if="isNegative"
              class="px-1 border border-red-500 text-red-500  rounded-md"
              :class="{ hidden: result.metacritic == null }"
              >{{ result.metacritic }}</strong
            >
            <strong
              v-if="isMixed"
              class="px-1 border border-yellow-500 text-yellow-500   rounded-md"
              >{{ result.metacritic }}</strong
            >
            <strong
              v-if="isPositive"
              class="px-1 border border-green-500 text-green-500   rounded-md"
              >{{ result.metacritic }}</strong
            >
          </div>
          <div class="mx-2 pb-2 flex justify-between items-center">
            <p class="text-md font-semibold">+{{ result.suggestions_count }}</p>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/21/thumbs-up-sign_1f44d.png"
              alt="Suggestions"
              class="w-6"
            />
          </div>
        </div>
      </div>
      <ul
        class="bg-gray-800 p-2 rounded-b-lg absolute w-full"
        v-if="isHovering"
      >
        <li class="py-2 border-t border-gray-600 flex justify-between">
          <small class="text-gray-500">Released:</small>
          <p class="text-sm">{{ result.released }}</p>
        </li>
        <li class="py-2 border-t border-gray-600 flex justify-between">
          <small class="text-gray-500">Reviews:</small>
          <p class="text-sm">{{ result.reviews_count }}</p>
        </li>
        <li class="py-2 border-t border-gray-600 flex justify-between">
          <small class="text-gray-500">Platforms:</small>
          <div class="flex">
            <small :class="{ 'pr-1': result.parent_platforms.length != 1 }">
              {{
                result.parent_platforms[0]
                  ? result.parent_platforms[0].platform.name
                  : ''
              }}
            </small>
            <small :class="{ 'pr-1': result.parent_platforms.length != 2 }">
              {{
                result.parent_platforms[1]
                  ? result.parent_platforms[1].platform.name
                  : ''
              }}
            </small>
            <small :class="{ 'pr-1': result.parent_platforms.length != 1 }">
              {{
                result.parent_platforms[2]
                  ? result.parent_platforms[2].platform.name
                  : ''
              }}
            </small>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue'

import { truncate } from 'lodash'

export default defineComponent({
  setup(context) {
    const state = reactive({
      isHovering: false,
      isNegative: false,
      isMixed: false,
      isPositive: false
    })

    onMounted(() => {
      if (context?.result?.metacritic <= 45) {
        state.isNegative = true
        state.isMixed = false
        state.isPositive = false
      } else if (context?.result?.metacritic < 80) {
        state.isNegative = false
        state.isMixed = true
        state.isPositive = false
      } else {
        state.isNegative = false
        state.isMixed = false
        state.isPositive = true
      }
    })

    function shorterName(name) {
      return truncate(name, { length: 32, omission: '..' })
    }

    return {
      ...toRefs(state),
      shorterName
    }
  },
  props: {
    result: {
      type: Object
    }
  }
})
</script>
