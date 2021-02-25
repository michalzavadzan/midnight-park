<template>
  <div
    class="max-w-2xl flex flex-col mx-auto my-5 px-4"
    v-if="rating.length !== 0"
  >
    <div class="flex">
      <span
        class="bg-green-500 h-16 flex justify-center items-center font-medium text-sm rounded-l-lg"
        :style="`width: ${rating.find(x => x.id === 4).percent}%`"
      >
      </span>
      <span
        class="bg-blue-500 h-16 flex justify-center items-center font-medium text-sm"
        :style="`width: ${rating.find(x => x.id === 5).percent}%`"
      >
      </span>
      <span
        class="bg-yellow-500 h-16 flex justify-center items-center font-medium text-sm"
        :style="`width: ${rating.find(x => x.id === 3).percent}%`"
      ></span>
      <span
        class="bg-gray-500 h-16 flex justify-center items-center font-medium text-sm rounded-r-lg"
        :style="`width: ${rating.find(x => x.id === 1).percent}%`"
      ></span>
    </div>
    <div class="flex my-4 mx-auto md:mx-0 justify-around flex-col md:flex-row">
      <div class="flex items-center">
        <span class="bg-green-500 w-3 h-3 rounded-full mx-2"></span>
        <p>{{ rating.find(x => x.id === 4).title }}</p>
      </div>
      <div class="flex items-center">
        <span class="bg-blue-500 w-3 h-3 rounded-full mx-2"></span>
        <p>{{ rating.find(x => x.id === 5).title }}</p>
      </div>
      <div class="flex items-center">
        <span class="bg-yellow-500 w-3 h-3 rounded-full mx-2"></span>
        <p>{{ rating.find(x => x.id === 3).title }}</p>
      </div>
      <div class="flex items-center">
        <span class="bg-gray-500 w-3 h-3 rounded-full mx-2"></span>
        <p>{{ rating.find(x => x.id === 1).title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    rating: {
      type: Array
    }
  }
})
</script>
