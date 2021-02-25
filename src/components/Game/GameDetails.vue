<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 my-5">
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Platforms:</h4>
      <div class="flex flex-wrap">
        <p v-if="result.platforms.length == 0">Is not known</p>
        <p
          class="pr-1.5 mb-2"
          v-for="platform in result.platforms"
          :key="platform.id"
        >
          <router-link
            :to="{
              name: 'Platform',
              params: { id: platform.platform.id }
            }"
            class="underline"
          >
            {{ platform.platform.name }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Genre:</h4>
      <div class="flex flex-wrap">
        <p v-if="result.genres.length == 0">Is not known</p>
        <p class="pr-1.5 mb-2" v-for="genre in result.genres" :key="genre.id">
          <router-link
            :to="{
              name: 'Genre',
              params: { slug: genre.slug }
            }"
            class="underline"
          >
            {{ genre.name }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Release date:</h4>
      <div class="flex flex-wrap">
        <p class="pr-1.5 mb-2">
          {{ result.released !== null ? result.released : 'Is not known' }}
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Developers:</h4>
      <div class="flex flex-wrap">
        <p v-if="result.developers.length == 0">Is not known</p>
        <p
          class="pr-1.5 mb-2"
          v-for="developer in result.developers"
          :key="developer.id"
        >
          <router-link
            :to="{
              name: 'Developer',
              params: { slug: developer.slug }
            }"
            class="underline"
          >
            {{ developer.name }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Publishers:</h4>
      <div class="flex flex-wrap">
        <p v-if="result.publishers.length == 0">Is not known</p>
        <p
          class="pr-1.5 mb-2"
          v-for="publisher in result.publishers"
          :key="publisher.id"
        >
          <router-link
            :to="{
              name: 'Publisher',
              params: { slug: publisher.slug }
            }"
            class="underline"
          >
            {{ publisher.name }}
          </router-link>
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="text-sm text-gray-500 font-bold my-2">Age:</h4>
      <div class="flex flex-wrap">
        <p class="pr-1.5 mb-2">
          {{
            result.esrb_rating === null
              ? 'Is not known'
              : result.esrb_rating.name
          }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row px-2 my-5">
    <div class="flex-1">
      <div class="flex flex-col">
        <h4 class="text-sm text-gray-500 font-bold my-2">Tags:</h4>
        <div class="flex flex-wrap">
          <p v-if="result.tags.length == 0">Is not known</p>
          <p class="pr-1.5 mb-2" v-for="tag in result.tags" :key="tag.id">
            <router-link
              :to="{
                name: 'Tag',
                params: { slug: tag.slug }
              }"
              class="underline"
            >
              #{{ tag.name }}
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <h4 class="text-sm text-gray-500 font-bold my-2">Website:</h4>
      <div class="flex">
        <p class="pr-1.5 mb-2" v-if="result.website.length === 0">
          Is not known
        </p>
        <p class="pr-1.5 mb-2">
          <a class="underline" :href="result.website" target="_blank">
            {{ result.website }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    result: {
      type: Object
    }
  }
})
</script>
