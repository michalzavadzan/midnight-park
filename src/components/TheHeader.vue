<template>
  <header class="pb-4">
    <div class="flex justify-center items-center p-4 md:hidden">
      <the-logo heading="Midnight Park" />
    </div>
    <div class="flex py-4 px-6 justify-between items-center">
      <div class="hidden md:flex">
        <the-logo heading="Midnight Park" />
      </div>
      <the-search />
      <small-navigation />
    </div>
    <large-navigation />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LargeNavigation from '@/components/Header/LargeNavigation.vue'
import SmallNavigation from '@/components/Header/SmallNavigation.vue'
import TheLogo from '@/components/Header/TheLogo.vue'
import TheSearch from '@/components/Header/TheSearch.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    LargeNavigation,
    SmallNavigation,
    TheLogo,
    TheSearch
  }
})
</script>
