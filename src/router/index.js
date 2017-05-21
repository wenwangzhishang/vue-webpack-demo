import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import ui from '@/components/ui'
import apis from '@/components/apis'
import note from '@/components/note.vue'
import editor from '@/components/editor.vue'

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
    }
  ]
})
