import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

export const zhCNNotes = defineNotesConfig({
    dir: 'zh-CN/notes',
    link: '/zh-CN/',
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