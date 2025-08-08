<template>
  <section class="friends-section">
    <h3 class="subsection-title">{{ title }}</h3>
    <div class="info-card">
      <div class="info-item">
        <strong>{{ labels.name }}:</strong> {{ info.name }}
      </div>
      <div class="info-item">
        <strong>{{ labels.website }}:</strong> {{ info.website }}
      </div>
      <div class="info-item">
        <strong>{{ labels.description }}:</strong> {{ info.description }}
      </div>
      <div class="info-item">
        <strong>{{ labels.avatar }}:</strong> {{ info.avatar }}
      </div>
      <div class="info-item">
        <strong>{{ labels.siteShot }}:</strong> {{ info.siteShot }}
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'My Info'
  },
  labels: {
    type: Object,
    default: () => ({
      name: 'Name',
      website: 'Website',
      description: 'Description',
      avatar: 'Avatar',
      siteShot: 'Site Shot'
    })
  },
  info: {
    type: Object,
    default: () => ({
      name: 'WARREN',
      website: 'https://yunfenglong.github.io/wan-s-blog/',
      description: 'A professional nerd who enjoys creating bugs and, occasionally, features.',
      avatar: 'https://yunfenglong.github.io/wan-s-blog/avatar.jpeg',
      siteShot: '"Will be available this fall"'
    })
  }
})
</script>

<style>
/* Styles are in friends.css */
</style>