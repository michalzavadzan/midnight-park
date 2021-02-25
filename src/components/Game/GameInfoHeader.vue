<template>
  <div class="flex my-2 text-sm md:text-base px-2">
    <p
      class="text-gray-800 bg-gray-300 px-1 md:px-1.5 rounded font-mono mr-2 md:mr-4"
    >
      {{ release !== null ? release : 'released?' }}
    </p>
    <p class="flex items-center">
      Average playtime: <svg-icon name="time" />
      {{ playtime !== 0 ? playtime : '?' }} hours.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  props: {
    release: {
      type: String
    },
    playtime: {
      type: Number
    }
  },
  components: {
    SvgIcon
  }
})
</script>
