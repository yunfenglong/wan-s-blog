<template>
  <section class="friends-section">
    <h3 class="subsection-title">{{ title }}</h3>
    
    <p class="text-content">
      {{ introText }} 😄
    </p>
    
    <p class="text-content">{{ methodsText }}</p>
    
    <ol class="content-list">
      <li>
        <strong>{{ methods.simple.title }}:</strong> {{ methods.simple.description }} 
        <code class="inline-code">{{ email }}</code>.
      </li>
      <li>
        <strong>{{ methods.git.title }}:</strong> {{ methods.git.description }}
        <ul>
          <li><strong>{{ methods.git.fork }}:</strong> {{ methods.git.forkDesc }}</li>
          <li><strong>{{ methods.git.issue }}:</strong> {{ methods.git.issueDesc }}</li>
        </ul>
      </li>
    </ol>

    <p class="text-content">
      {{ requirementText }} <strong>{{ checkText }}</strong>
    </p>

    <div class="code-block">
      <div class="code-line">{{ template.name }}</div>
      <div class="code-line">{{ template.link }}</div>
      <div class="code-line">{{ template.desc }}</div>
      <div class="code-line">{{ template.avatar }}</div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Link Exchange'
  },
  introText: {
    type: String,
    default: "I'd be thrilled to connect with fellow creators! If you'd like to exchange links, just follow the simple steps below."
  },
  methodsText: {
    type: String,
    default: 'There are a few ways to get your blog added:'
  },
  methods: {
    type: Object,
    default: () => ({
      simple: {
        title: 'The Simple Way',
        description: 'Send your details to my email at'
      },
      git: {
        title: 'The Git Way',
        description: "If you're comfortable with GitHub, you can also:",
        fork: 'Fork the repo',
        forkDesc: 'for this site, add your info, and submit a pull request.',
        issue: 'raise an issue',
        issueDesc: 'with your link details.'
      }
    })
  },
  email: {
    type: String,
    default: 'yunfeng.long@yahoo.com'
  },
  requirementText: {
    type: String,
    default: 'No matter which method you choose, please include the following info.'
  },
  checkText: {
    type: String,
    default: 'Double-check that your website is up and running!'
  },
  template: {
    type: Object,
    default: () => ({
      name: 'name: Your Name',
      link: 'link: Your Website URL',
      desc: 'desc: A brief, catchy description.',
      avatar: 'avatar: A link to your avatar.'
    })
  }
})
</script>

<style>
/* Styles are in friends.css */
</style>