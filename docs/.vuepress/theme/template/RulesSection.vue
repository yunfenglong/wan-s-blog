<template>
  <section class="friends-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="rules-content">
      <div 
        v-for="(rule, index) in rules" 
        :key="index" 
        class="rule-item"
      >
        <strong>{{ rule.title }}:</strong> {{ rule.description }}
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'A Few House Rules'
  },
  rules: {
    type: Array,
    default: () => [
      {
        title: 'Reciprocity is Appreciated',
        description: "Please add my link to your site before applying. Let's make it a two-way connection!"
      },
      {
        title: 'Personal & Original Blogs Only',
        description: "This space is for creators sharing their own stories and projects. I won't be adding forums, aggregators, or documentation sites."
      },
      {
        title: 'Keep it Active & Secure',
        description: 'Your blog should be regularly updated, load over HTTPS, and be free of intrusive ads.'
      },
      {
        title: 'Legal & Respectful Content',
        description: 'All content must comply with legal regulations.'
      },
      {
        title: 'Maintenance',
        description: 'Links that are down for an extended period or violate these guidelines will be removed without notice to keep the neighborhood tidy.'
      },
      {
        title: 'Final Say',
        description: 'I reserve the right to decline any application to ensure the quality of this collection.'
      }
    ]
  }
})
</script>

<style>
/* Styles are in friends.css */
</style>