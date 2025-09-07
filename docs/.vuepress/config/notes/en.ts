import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

export const enNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
      defineNoteConfig({
        dir: 'fit2014',
        link: '/fit2014/',
        sidebar: [
          {
            'text': 'Overview',
            'link': 'README.md',
          },
          {
            'prefix': 'languages',
            'text': 'Languages',
            'items': 'auto',
          },
          {
            'prefix': 'proofs',
            'text': 'Proofs',
            'items': 'auto',
          },
          {
            'prefix': 'expressions',
            'text': 'Expressions',
            'items': 'auto',
          },
          {
            'prefix': 'exam-prep',
            'text': 'Exam Preperation',
            'items': 'auto',
          },
        ],
      }), 
  
      defineNoteConfig({
        dir: 'fit3143',
        link: '/fit3143/',
        sidebar: [
          {
            'text': 'Overview',
            'link': 'README.md',
          },
          {
            'prefix': 'introduction',
            'text': 'Introduction',
            'items': 'auto',
          },
          {
            'prefix': 'ipc',
            'text': 'Inter-Process Communication',
            'items': 'auto',
          }
        ],
      }), 
  
      defineNoteConfig({
        dir: 'fit3080',
        link: '/fit3080/',
        sidebar: [
          {
            'text': 'Overview',
            'link': 'README.md',
          },
          {
            'text': 'Intro to AI',
            'link': 'ai_basic.md'
          },
          {
            'prefix': 'agents',
            'text': 'Agents',
            'items': 'auto',
          },
          {
            'prefix': 'search',
            'text': 'Search',
            'items': 'auto',
          }
        ]
      }), 
  
      defineNoteConfig({
        dir: 'fit2004',
        link: '/fit2004/',
        sidebar: [
          {
            'text': 'Overview',
            'link': 'README.md',
          },
          {
            'prefix': 'introduction',
            'text': 'Introduction',
            'items': 'auto',
          },
          {
            'prefix': 'algorithms',
            'text': 'Algorithms',
            'items': 'auto',
          },
          {
            'prefix': 'data-structures',
            'text': 'Data Structures',
            'items': 'auto',
          },
          {
            'prefix': 'revision',
            'text': 'Revision',
            'items': 'auto',
          },
        ],
      }), 
  
      defineNoteConfig({
        dir: 'programming-paradigm',
        link: '/programming-paradigm/',
        sidebar: [
          {
            'text': 'Overview',
            'link': 'README.md',
          },
          {
            'prefix': 'func_program',
            'text': 'Functional Programming',
            'items': 'auto',
          },
          {
            'prefix': 'js',
            'text': 'JavaScript',
            'items': 'auto',
          },
          {
            'prefix': 'ts',
            'text': 'TypeScript',
            'items': 'auto',
          },
          {
            'prefix': 'html',
            'text': 'HTML',
            'items': 'auto',
          }
        ]
      })
    ],
  })