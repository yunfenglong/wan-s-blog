<template>
  <FriendsPage :texts="englishTexts" />
</template>

<script setup>
import FriendsPage from '../template/FriendsPage.vue'

const englishTexts = {
  friendsTitle: 'My Awesome Friends',
  connectionTitle: "Let's Connect!",
  myInfoTitle: 'My Info',
  exchangeTitle: 'Link Exchange',
  rulesTitle: 'A Few House Rules',
  introText: "I'd be thrilled to connect with fellow creators! If you'd like to exchange links, just follow the simple steps below.",
  methodsText: 'There are a few ways to get your blog added:',
  requirementText: 'No matter which method you choose, please include the following info.',
  checkText: 'Double-check that your website is up and running!',
  labels: {
    name: 'Name',
    website: 'Website',
    description: 'Description',
    avatar: 'Avatar',
    siteShot: 'Site Shot'
  },
  methods: {
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
  },
  template: {
    name: 'name: Your Name',
    link: 'link: Your Website URL',
    desc: 'desc: A brief, catchy description.',
    avatar: 'avatar: A link to your avatar.'
  },
  rules: [
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
</script>

<style>
/* Styles are in friends.css */
</style>