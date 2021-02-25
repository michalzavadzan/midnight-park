<template>
  <section class="mx-auto px-4 w-11/12">
    <div class="my-10">
      <h1 class="text-4xl md:text-6xl font-bold my-3">All games</h1>
      <h4 class="text-lg font-normal">500.000+ games</h4>
    </div>
    <div class="flex flex-col md:flex-row justify-start items-center">
      <p
        class="pr-2 flex text-md text-gray-500 hover:text-gray-200 transition-all duration-200 cursor-pointer"
        @click="toggleOrder = !toggleOrder"
      >
        Change order: <svg-icon name="arrow-right" />
      </p>
      <div v-if="toggleOrder" class="relative z120">
        <div class="absolute bg-gray-100 p-2 rounded-lg">
          <button
            class="mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500"
            @click="changeOrder('-added'), (toggleOrder = !toggleOrder)"
          >
            Popular
          </button>
          <button
            class="mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500"
            @click="changeOrder('-released'), (toggleOrder = !toggleOrder)"
          >
            Released
          </button>
          <button
            class="mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500"
            @click="changeOrder('name'), (toggleOrder = !toggleOrder)"
          >
            Name
          </button>
          <button
            class="mx-1 px-1 py-0 rounded-md text-gray-800 transition-all duration-300 hover:text-gray-500 hover:border-gray-500"
            @click="changeOrder('-metacritic'), (toggleOrder = !toggleOrder)"
          >
            Rating
          </button>
        </div>
      </div>
    </div>
  </section>
  <main class="flex justify-center mx-auto my-10 w-11/12">
    <div v-if="isLoading" class="h-screen z-30">
      <div class="lds-dual-ring"></div>
    </div>
    <div class="flex flex-wrap justify-around">
      <game-card
        v-for="result in results[0]"
        :key="result.id"
        :result="result"
      />
    </div>
  </main>
  <div class="flex justify-end items-center mx-auto w-11/12 my-10">
    <button
      @click="getFirstPage"
      v-if="currentPage >= 3"
      class="mx-2 py-2 px-4 border-b"
    >
      First
    </button>
    <button
      @click="getPrevPage"
      v-if="currentPage > 1"
      class="mx-2 py-2 px-4 rounded-md border"
    >
      Prev
    </button>
    <p class="px-4 font-semibold text-lg">{{ currentPage }}</p>
    <button @click="getNextPage" class="mx-2 py-2 px-4 rounded-md border">
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, reactive, toRefs } from 'vue'
import axios from 'axios'

import GameCard from '@/components/GridCards/GameCard.vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      isLoading: false,
      results: [] as any,
      currentPage: 1,
      ordering: '-added',
      dates: '1960-01-01,2022-01-01',
      toggleOrder: false
    })

    watchEffect(() => {
      state.isLoading = true
      state.results = []
      const fetchItems = async () => {
        const response = await axios(
          `https://api.rawg.io/api/games?key=c0233312e0954f0ca72e3d1e9d64ef32&dates=${state.dates}&ordering=${state.ordering}&page=${state.currentPage}&page_size=20`
        )
        state.results.push(response.data.results)
        state.isLoading = false
      }
      fetchItems()
    })

    function changeOrder(order) {
      state.currentPage = 1
      state.ordering = order
    }

    const getNextPage = () => {
      state.currentPage++
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    const getPrevPage = () => {
      if (state.currentPage == 1) return
      state.currentPage--
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    const getFirstPage = () => {
      state.currentPage = 1
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }

    return {
      ...toRefs(state),
      getNextPage,
      getPrevPage,
      getFirstPage,
      changeOrder
    }
  },
  components: {
    GameCard,
    SvgIcon
  }
})
</script>
