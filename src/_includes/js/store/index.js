import { proxy, subscribe } from 'npm:valtio/vanilla'

const store = proxy(
   JSON.parse(localStorage.getItem('id-projects')) ||{
      theme: 'auto',
      list: 'grid',
      sort: 'newest',
      sidebar: 'closed',
      activeProject: '',
   }
)

subscribe(store, () => {
   localStorage.setItem('id-projects', JSON.stringify(store))
})

export default store

