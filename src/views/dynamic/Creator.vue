<template>
  <div class="absolute top-0 w-full znegative opacity-10">
    <div
      class="absolute w-full h-screen bottom-0 right-0 bg-gradient-to-t from-gray-900"
    ></div>
    <img
      :src="result.image_background"
      class="object-cover w-screen h-screen"
    />
  </div>
  <main class="max-w-5xl mx-auto my-10">
    <div v-if="isLoading" class="flex justify-center h-screen z-30">
      <div class="lds-dual-ring"></div>
    </div>
    <div v-if="!isLoading">
      <div class="mb-10"></div>
      <h1 class="font-bold text-4xl text-center mt-4">{{ result.name }}</h1>
      <creator-rating :rating="result.ratings" />
      <section>
        <creator-desc
          :background="result.image"
          :description="result.description"
          :isLoading="isLoading"
          :name="result.name"
        />
        <creator-details :result="result" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

import CreatorDesc from '@/components/Creator/CreatorDesc.vue'
import CreatorDetails from '@/components/Creator/CreatorDetails.vue'
import CreatorRating from '@/components/Creator/CreatorRating.vue'

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
          `https://api.rawg.io/api/creators/${state.slug}?key=c0233312e0954f0ca72e3d1e9d64ef32`
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
    CreatorDesc,
    CreatorDetails,
    CreatorRating
  }
})
</script>
