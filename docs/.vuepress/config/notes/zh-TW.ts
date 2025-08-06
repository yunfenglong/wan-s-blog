import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const zhTWNotes = defineNotesConfig({
    dir: 'zh-TW/notes',
    link: '/zh-TW/',
    notes: [
      defineNoteConfig({
        dir: 'FIT2014',
        link: '/fit2014/',
        sidebar: 'auto',
      }), 
      defineNoteConfig({
        dir: 'fit3143',
        link: '/fit3143/',
        sidebar: 'auto',
      }), 
      defineNoteConfig({
        dir: 'fit3080',
        link: '/fit3080/',
        sidebar: 'auto',
      }),
    ],
  })