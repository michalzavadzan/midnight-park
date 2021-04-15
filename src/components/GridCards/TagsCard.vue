<template>
  <div :class="{ z110: isHovering }" class="flex">
    <article
      class="w-64 md:w-80 my-3 bg-gray-800 rounded-lg transition-all duration-200 transform hover:scale-105"
    >
      <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
        <div class="relative">
          <div
            class="absolute z-20 rounded-lg w-full h-full bottom-0 right-0 bg-gradient-to-t from-gray-800"
          ></div>
          <img
            :src="requestCrop(result.image_background)"
            :alt="result.name"
            class="rounded-lg h-60 opacity-40 object-cover znegative"
          />
          <div class="absolute w-full h-full top-0 z-20">
            <div class="h-full flex flex-col justify-around">
              <div class="m-2 text-center">
                <router-link
                  :to="{
                    name: 'Tag',
                    params: { slug: result.slug }
                  }"
                >
                  <h2
                    class="font-semibold text-2xl"
                    :class="{ underline: isHovering }"
                  >
                    {{ isHovering ? result.name : shorterName(result.name) }}
                  </h2>
                </router-link>
              </div>
              <div class="mx-2 pb-2 flex justify-center items-center">
                <p class="text-sm pr-1">Games Count:</p>
                <p class="text-sm font-semibold">{{ result.games_count }}</p>
              </div>
              <ul class="px-2">
                <li
                  class="flex justify-between py-2 border-t border-gray-600"
                  v-if="result.games.length >= 1"
                >
                  <p
                    class="text-sm text-gray-100 px-1 transition-all duration-200 hover:text-gray-400"
                  >
                    <router-link
                      :to="{
                        name: 'Game',
                        params: { slug: result.games[0].slug }
                      }"
                    >
                      {{ shorterName(result.games[0].name) }}
                    </router-link>
                  </p>
                  <small class="flex items-center text-gray-400">
                    {{ result.games[0].added }} <svg-icon name="player" />
                  </small>
                </li>
                <li
                  class="flex justify-between py-2 border-t border-gray-600"
                  v-if="result.games.length >= 2"
                >
                  <p
                    class="text-sm text-gray-100 px-1 transition-all duration-200 hover:text-gray-400"
                  >
                    <router-link
                      :to="{
                        name: 'Game',
                        params: { slug: result.games[1].slug }
                      }"
                    >
                      {{ shorterName(result.games[1].name) }}
                    </router-link>
                  </p>
                  <small class="flex items-center text-gray-400">
                    {{ result.games[1].added }} <svg-icon name="player" />
                  </small>
                </li>
                <li
                  class="flex justify-between py-2 border-t border-gray-600"
                  v-if="result.games.length >= 3"
                >
                  <p
                    class="text-sm text-gray-100 px-1 transition-all duration-200 hover:text-gray-400"
                  >
                    <router-link
                      :to="{
                        name: 'Game',
                        params: { slug: result.games[2].slug }
                      }"
                    >
                      {{ shorterName(result.games[2].name) }}
                    </router-link>
                  </p>
                  <small class="flex items-center text-gray-400">
                    {{ result.games[2].added }} <svg-icon name="player" />
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import { truncate } from 'lodash'

import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      isHovering: false
    })

    function shorterName(name) {
      return truncate(name, { length: 32, omission: '..' })
    }

    function requestCrop(uri) {
      if (uri === null) return
      else {
        const crop = uri.replace("/media/", "/media/crop/600/400/")
        return crop
      }
    }

    return {
      ...toRefs(state),
      shorterName,
      requestCrop
    }
  },
  props: {
    result: {
      type: Object
    }
  },
  components: {
    SvgIcon
  }
})
</script>
