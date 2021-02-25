<template>
  <div class="absolute top-0 w-full znegative opacity-10">
    <div
      class="absolute w-full h-screen bottom-0 right-0 bg-gradient-to-t from-gray-900"
    ></div>
    <img
      :src="result.background_image"
      class="object-cover w-screen h-screen"
    />
  </div>
  <main class="max-w-5xl mx-auto my-10">
    <div v-if="isLoading" class="flex justify-center h-screen z-30">
      <div class="lds-dual-ring"></div>
    </div>
    <div v-if="!isLoading">
      <div class="mb-10">
        <game-path :name="result.name" />
        <game-info-header
          :release="result.released"
          :playtime="result.playtime"
        />
      </div>
      <h1 class="font-bold text-4xl text-center mt-4">{{ result.name }}</h1>
      <game-rating :rating="result.ratings" />
      <section>
        <game-desc
          :background="result.background_image_additional"
          :description="result.description"
          :isLoading="isLoading"
          :name="result.name"
        />
        <game-details :result="result" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

import GamePath from '@/components/Game/GamePath.vue'
import GameInfoHeader from '@/components/Game/GameInfoHeader.vue'
import GameDesc from '@/components/Game/GameDesc.vue'
import GameDetails from '@/components/Game/GameDetails.vue'
import GameRating from '@/components/Game/GameRating.vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    const state = reactive({
      isLoading: true,
      slug: route.params.slug,
      result: [] as any,
      fullDesc: false
    })

    watchEffect(() => {
      state.result = []
      const fetchItems = async () => {
        const response = await axios(
          `https://api.rawg.io/api/games/${state.slug}?key=c0233312e0954f0ca72e3d1e9d64ef32`
        )
        state.result.push(response.data)
        state.result = state.result[0]
        state.isLoading = false
      }
      fetchItems()
    })

    return {
      ...toRefs(state)
    }
  },
  components: {
    GamePath,
    GameInfoHeader,
    GameDesc,
    GameDetails,
    GameRating
  }
})
</script>
