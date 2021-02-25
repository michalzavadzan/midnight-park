<template>
  <section class="mx-auto px-4 w-11/12">
    <div class="my-10">
      <h1 class="text-4xl md:text-6xl font-bold my-3" v-if="!isLoading">
        {{ platform }}
      </h1>
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
    <button
      @click="getNextPage"
      class="mx-2 py-2 px-4 rounded-md border text-center"
      v-if="nextPage !== null"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, reactive, toRefs } from 'vue'
import axios from 'axios'

import GameCard from '@/components/GridCards/GameCard.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const platformsId = useRoute()
    const state = reactive({
      isLoading: false,
      results: [] as any,
      resultsLen: false,
      currentPage: 1,
      platformsId: platformsId.params.id,
      platform: String,
      nextPage: String || null
    })

    watchEffect(() => {
      state.isLoading = true
      state.results = []
      const fetchItems = async () => {
        const response = await axios(
          `https://api.rawg.io/api/games?key=c0233312e0954f0ca72e3d1e9d64ef32&platforms=${state.platformsId}&page=${state.currentPage}&page_size=20`
        )
        state.results.push(response.data.results)
        state.nextPage = response.data.next
        const resp = await axios(
          `https://api.rawg.io/api/platforms/${state.platformsId}?key=c0233312e0954f0ca72e3d1e9d64ef32`
        )
        state.platform = resp.data.name
        state.isLoading = false
      }
      fetchItems()
    })

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
      getFirstPage
    }
  },
  components: {
    GameCard
  }
})
</script>
