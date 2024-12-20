import { snapshot } from 'npm:valtio/vanilla'
import store from '@store'

localStorage.setItem('id-projects', JSON.stringify(store))