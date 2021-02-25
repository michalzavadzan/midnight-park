<template>
  <div
    class="max-w-2xl flex flex-col mx-auto my-5 px-4"
    v-if="rating.length !== 0"
  >
    <div class="flex">
      <span
        class="bg-green-500 h-16 flex justify-center items-center font-medium text-sm rounded-l-lg"
        :style="
          `width: ${
            rating.find(x => x.id === 4)
              ? rating.find(x => x.id === 4).percent
              : 0
          }%`
        "
      >
      </span>
      <span
        class="bg-blue-500 h-16 flex justify-center items-center font-medium text-sm"
        :style="
          `width: ${
            rating.find(x => x.id === 5)
              ? rating.find(x => x.id === 5).percent
              : 0
          }%`
        "
      >
      </span>
      <span
        class="bg-yellow-500 h-16 flex justify-center items-center font-medium text-sm"
        :style="
          `width: ${
            rating.find(x => x.id === 3)
              ? rating.find(x => x.id === 3).percent
              : 0
          }%`
        "
      ></span>
      <span
        class="bg-gray-500 h-16 flex justify-center items-center font-medium text-sm rounded-r-lg"
        :style="
          `width: ${
            rating.find(x => x.id === 1)
              ? rating.find(x => x.id === 1).percent
              : 0
          }%`
        "
      ></span>
    </div>
    <div class="flex my-4 mx-auto md:mx-0 justify-around flex-col md:flex-row">
      <div class="flex items-center">
        <span class="bg-green-500 w-3 h-3 rounded-full mx-2"></span>
        <p>
          {{
            rating.find(x => x.id === 4)
              ? rating.find(x => x.id === 4).title
              : 'recommended'
          }}
        </p>
      </div>
      <div class="flex items-center">
        <span class="bg-blue-500 w-3 h-3 rounded-full mx-2"></span>
        <p>
          {{
            rating.find(x => x.id === 5)
              ? rating.find(x => x.id === 5).title
              : 'exceptional'
          }}
        </p>
      </div>
      <div class="flex items-center">
        <span class="bg-yellow-500 w-3 h-3 rounded-full mx-2"></span>
        <p>
          {{
            rating.find(x => x.id === 3)
              ? rating.find(x => x.id === 3).title
              : 'meh'
          }}
        </p>
      </div>
      <div class="flex items-center">
        <span class="bg-gray-500 w-3 h-3 rounded-full mx-2"></span>
        <p>
          {{
            rating.find(x => x.id === 1)
              ? rating.find(x => x.id === 1).title
              : 'skip'
          }}
        </p>
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
