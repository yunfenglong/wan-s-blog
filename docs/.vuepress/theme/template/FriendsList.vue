<script setup>
import FRIENDS from '../data/friends.json'

defineProps({
  title: {
    type: String,
    default: 'My Awesome Friends'
  }
})
</script>

<template>
  <section class="friends-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="friends-content">
    <a :href="item.link" target="_blank" class="vp-blog-post-item friend-item" v-for="(item, index) in FRIENDS"
       :key="index">
      <img :src="item.avatar" alt="avatar">
      <div>
        <p class="friend-item-name">{{ item.name }}</p>
        <p class="friend-item-desc">{{ item.desc }}</p>
      </div>
    </a>
    </div>
  </section>
</template>

<style scoped>
.friends-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding-bottom: 0.5rem;
}

.friends-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }

  > a {
    text-decoration: none;
  }
}

.friend-item {
  border-radius: 10px;
  padding: 0 10px;
  background-color: var(--main-card-background);
  border: 1px solid var(--main-card-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  > img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  > div {
    margin-left: 10px;
    flex: 1;
    display: block;
  }
}

.friend-item-name {
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}

.friend-item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-2);
  margin-top: 0;
  margin-bottom: 0.25rem;
}
</style>