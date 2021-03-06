import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import ui from '@/components/ui'
import apis from '@/components/apis'
import note from '@/components/note.vue'
import editor from '@/components/editor.vue'
import videos from '@/components/videos.vue'
import aipt from '@/components/AIPT.vue'
import tasks from '@/components/tasks.vue'
import serious from '@/components/serious.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ui',
      name: 'ui',
      component: ui
    },
    {
      path: '/apis',
      name: 'apis',
      component: apis
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    },
    {
      path: '/aipt',
      name: 'aipt',
      component: aipt
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks
    },
    {
      path: '/serious',
      name: 'serious',
      component: serious
    }
  ]
})
