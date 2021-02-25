<template>
  <router-link to="/"
    ><h1 class="text-3xl font-bold">
      {{ heading }}
    </h1></router-link
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    heading: {
      type: String
    }
  }
})
</script>
