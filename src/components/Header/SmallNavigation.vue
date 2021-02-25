<template>
  <transition name="fade">
    <div
      v-if="isOpened === true"
      class="fixed bg-gray-900 z-20 w-full h-full left-0 bottom-0"
    >
      <div class="flex justify-center items-center h-full z-30">
        <div @click="handleClick" class="absolute right-5 top-5 cursor-pointer">
          <svg-icon name="close" />
        </div>
        <ul class="flex flex-col">
          <router-link
            to="/games"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li class="my-2 p-2 flex items-center text-lg" @click="handleClick">
              <svg-icon name="games" /> Games
            </li>
          </router-link>
          <router-link
            to="/creators"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="creators" /> Creators
            </li>
          </router-link>
          <router-link
            to="/developers"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="dev" /> Developers
            </li>
          </router-link>
          <router-link
            to="/genres"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="genres" /> Genres
            </li>
          </router-link>
          <router-link
            to="/platforms"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="platforms" /> Platforms
            </li>
          </router-link>
          <router-link
            to="/publishers"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="publishers" /> Publishers
            </li>
          </router-link>
          <router-link
            to="/tags"
            class="hover:bg-gray-800 transition-colors duration-400 rounded-md"
          >
            <li
              class="my-2 p-2  flex items-center text-lg"
              @click="handleClick"
            >
              <svg-icon name="tags" /> Tags
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </transition>

  <button
    class="md:hidden focus:outline-none z-0 cursor-pointer transition-all duration-200 transform hover:scale-125"
    @click="handleClick"
  >
    <svg-icon name="menu" />
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      isOpened: false,
      opacity: 'opacity-0'
    })

    const handleClick = () => {
      state.isOpened = !state.isOpened
    }

    return { ...toRefs(state), handleClick }
  },
  components: {
    SvgIcon
  }
})
</script>
