import store from "@store";
import { snapshot } from 'npm:valtio/vanilla'

/**
 * Builds sprints object for each phase and adds to store.
 *
 * @returns {Object} sprints - Object of sprints for each phase
 */
const buildProjectSprintObject = () => {
   let output = {}
   const sprintGroups = document.querySelectorAll('[data-sprints]')
   if (!sprintGroups) { return }
   sprintGroups.forEach(group => {
      // remove groups from DOM
      group.remove()
      // get phase and store sprints
      const phase = group?.dataset?.sprints
      if (!phase) { return }
      output = {...output, [phase]: group }
   })
   return store.sprints = {...output}
}

/**
 * Renders sprints for a given phase.
 *
 * @param {string} phase - Phase to render sprints for
 * @returns
 */
const renderSprints = (phase) => {
   const parent = document.querySelector(`[data-project]`)
   if (!parent) { return }
   const sprints = snapshot(store.sprints[phase])
   if (!sprints) { return }
   parent.appendChild(sprints)
   return
}

/**
 * Sorts sprints by date.
 *
 * @param {'newest' | 'oldest'} [order='newest'] - Order to sort sprints by
 * @returns void
 */
const sortSprints = (order = 'newest') => {
   const sprints = document.querySelectorAll('[data-sprint-date]')
   if (!sprints) { return }
   sprints.sort((a, b) => {
      const aDate = new Date(a.dataset.sprintDate)
      const bDate = new Date(b.dataset.sprintDate)
      if (order == 'newest') {
         return bDate - aDate
      }
      return aDate - bDate
   })
   return
}

/**
 * Filters sprints for a given phase.
 *
 * @param {string} phase - Phase to filter sprints for
 * @returns
 */
const filterSprints = (phase) => {
   // remove all sprint groups
   const sprintGroups = document.querySelectorAll('[data-sprints]')
   if (sprintGroups.length) {
      for (const group in sprintGroups) {
         group.remove()
      }
   }
   renderSprints(phase)
   store.phase = phase
   return
}

export { buildProjectSprintObject, renderSprints, sortSprints, filterSprints }