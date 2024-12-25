import { proxy, subscribe } from 'npm:valtio/vanilla'

const store = proxy(
   JSON.parse(localStorage.getItem('id-projects')) ||{
      theme: 'auto',
      list: 'grid',
      sort: 'newest',
      sidebar: 'closed',
      phase: 'strategy',
      sprints: {}
   }
)

subscribe(store, () => {
   console.log('store has been updated', {store})
   localStorage.setItem('id-projects', JSON.stringify(store))
})

export default store

