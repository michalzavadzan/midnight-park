<template>
  <transition name="fade">
    <div
      v-if="isOpened === true"
      class="w-screen absolute right-0 bottom-0 top-0 z-30"
    >
      <div
        @click="isOpened = !isOpened"
        class="fixed bg-gray-900 w-full top-0 right-0 bottom-0 opacity-40"
      ></div>
      <div class="flex flex-col max-w-5xl mx-auto pl-8 pr-3 md:px-10">
        <div class="justify-center flex py-5 mt-16">
          <form class="w-full z-30 relative" @submit.prevent="">
            <input
              class="text-gray-900 bg-gray-100 rounded-full focus:outline-none p-2 pr-10 w-full"
              ref="searchBar"
              placeholder="Search for a game"
              v-model="searchInput"
              @input="onInput"
            />
            <button
              class="absolute text-gray-900 rounded-r-full right-0 w-10 bg-gray-100 h-10 focus:outline-none z-40"
              @click="isOpened = !isOpened"
            >
              <span class="w-full flex justify-center">
                <svg-icon name="close" />
              </span>
            </button>
          </form>
        </div>
        <div
          class="w-full h-full z-30 relative bg-gray-900 rounded-lg p-2 mb-6"
        >
          <div v-if="isLoading" class="flex justify-center h-screen z-30">
            <div class="lds-dual-ring"></div>
          </div>
          <div v-if="results.length > 0">
            <p class="py-2">
              Games: <span>{{ results[0].length }}</span>
            </p>
            <ul>
              <li
                v-for="result in results[0]"
                :key="result.id"
                class="border-t border-gray-500"
                @click="isOpened = !isOpened"
              >
                <router-link
                  :to="{
                    name: 'Game',
                    params: { slug: result.slug }
                  }"
                  @click="reloadPage"
                >
                  <div class="w-full h-full flex items-center py-2">
                    <img
                      :src="result.background_image"
                      class="w-12 h-16 object-cover rounded-lg"
                    />
                    <p class="text-md font-medium px-2">
                      {{ result.name }}
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <div
    @click="handleClick"
    class="bg-gray-100 text-gray-900 p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-gray-100 transition-colors duration-250"
  >
    <svg-icon name="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, nextTick } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash'

import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      isLoading: false,
      isOpened: false,
      searchBar: null,
      results: [] as any,
      searchInput: ''
    })

    const onInput = debounce(() => {
      if (state.searchInput.length < 3) {
        return
      } else {
        state.isLoading = true
        const fetchItems = async () => {
          const response = await axios(
            `https://api.rawg.io/api/games?key=c0233312e0954f0ca72e3d1e9d64ef32&search=${state.searchInput}`
          )
          state.results = []
          state.results.push(response.data.results)
          console.log(state.results)
          state.isLoading = false
        }
        fetchItems()
      }
    }, 500)

    const reloadPage = () => {
      window.location.reload()
    }

    const handleClick = () => {
      state.isOpened = !state.isOpened
      if (state.isOpened) {
        nextTick(() => {
          ;((state.searchBar as unknown) as HTMLElement).focus()
        })
      }
    }

    return {
      ...toRefs(state),
      handleClick,
      onInput,
      reloadPage
    }
  },
  components: {
    SvgIcon
  }
})
</script>
