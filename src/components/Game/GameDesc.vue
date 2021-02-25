<template>
  <h3 class="ml-2 font-medium text-2xl">
    About:
  </h3>
  <div class="flex flex-col md:flex-row">
    <div class="flex-1 px-2 py-4">
      <p
        :class="{
          'md:w-full': background === null
        }"
        v-html="isLoading ? '' : shorterDesc(description)"
      ></p>
      <p v-if="description.length < 10">
        We don't know much about this game.
      </p>
      <button
        v-if="description.length > 400"
        class="text-gray-800 bg-gray-200 px-1 rounded mt-2"
        @click="fullDesc = !fullDesc"
      >
        {{ fullDesc ? 'see less' : 'see more' }}
      </button>
    </div>
    <div class="flex-1 px-2 py-4" v-if="background !== null">
      <img
        class="min-h-full object-cover rounded"
        :src="background"
        :alt="`${name}'s Thumb`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { truncate } from 'lodash'

export default defineComponent({
  setup() {
    const state = reactive({
      fullDesc: false
    })

    function shorterDesc(desc: string) {
      if (!state.fullDesc) {
        return truncate(desc, { length: 400, omission: '..' })
      } else return desc
    }

    return {
      ...toRefs(state),
      shorterDesc
    }
  },
  props: {
    background: {
      type: String
    },
    description: {
      type: String
    },
    isLoading: {
      type: Boolean
    },
    name: {
      type: String
    }
  }
})
</script>
