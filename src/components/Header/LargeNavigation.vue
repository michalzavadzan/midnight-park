<template>
  <nav class="w-full hidden md:block">
    <ul class="flex justify-center">
      <router-link
        to="/games"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="games" /> Games
        </li>
      </router-link>
      <router-link
        to="/creators"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="creators" /> Creators
        </li>
      </router-link>
      <router-link
        to="/developers"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="dev" /> Developers
        </li>
      </router-link>
      <router-link
        to="/genres"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="genres" /> Genres
        </li>
      </router-link>
      <router-link
        to="/platforms"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="platforms" /> Platforms
        </li>
      </router-link>
      <router-link
        to="/publishers"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="publishers" /> Publishers
        </li>
      </router-link>
      <router-link
        to="/tags"
        class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
      >
        <li class="p-2 flex items-center text-lg">
          <svg-icon name="tags" /> Tags
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    SvgIcon
  }
})
</script>

<style scoped></style>
