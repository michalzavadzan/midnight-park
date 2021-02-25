<template>
  <div class="text-gray-500 mb-4 px-2">
    <small class="pr-1"
      ><router-link
        to="/"
        class="transition-colors duration-200 hover:text-gray-200"
        >Home</router-link
      ></small
    >
    <small class="pr-1">/</small>
    <small class="pr-1"
      ><router-link
        to="/games"
        class="transition-colors duration-200 hover:text-gray-200"
        >Games</router-link
      ></small
    >
    <small class="pr-1">/</small>
    <small class="pr-1">{{ name }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String
    }
  }
})
</script>
