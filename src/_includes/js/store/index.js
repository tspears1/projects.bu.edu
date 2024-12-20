import { proxy, subscribe } from 'npm:valtio/vanilla'

const store = proxy(
   JSON.parse(localStorage.getItem('id-projects')) ||{
      theme: 'light',
      list: 'grid',
      sort: 'newest',
      sidebar: 'closed'
   }
)

subscribe(store, () => {
   localStorage.setItem('id-projects', JSON.stringify(store))
})

export default store

