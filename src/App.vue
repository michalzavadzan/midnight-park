<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const state = reactive({
      route: useRoute()
    })

    watch(
      () => state.route.params,
      () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    )

    return {
      ...toRefs(state)
    }
  },

  components: {
    TheHeader,
    TheFooter
  }
}
</script>
