/**
 * Local Storage-based Database
 *
 * @param {string} storageKeySlug - slug for storage key
 * @returns {object} db
 */
class LocalDB {
   constructor(storageKeySlug) {
      /** @type {Map<string, object>} */
      this.data = new Map()

      /** @type {string} */
      this.storageKeyPrefix = 'lumeDB__'

      /** @type {string} */
      this.storageKeySlug = storageKeySlug
   }

   /**
    * Build storage key from prefix and slug.
    *
    * @returns {string} storageKey
    */
   get storageKey() {
      return `${this.storageKeyPrefix}${this.storageKeySlug}`
   }

   /**
    * Push data to localStorage.
    *
    * @returns {void}
    */
   push() {
      return localStorage.setItem(this.storageKey, JSON.stringify([...this.data]))
   }

   /**
    * Pull data from localStorage.
    *
    * @returns {Map<string, object>} data
    */
   pull() {
      if (localStorage.getItem(this.storageKey)) {
         return this.data = new Map(JSON.parse(localStorage.getItem(this.storageKey)))
      }
      return this.data = new Map()
   }

   /**
    * Get data item from Map.
    *
    * @param {number} id
    * @returns {object|null} data
    */
   get(id) {
      this.pull()
      return this.data.get(id)
   }

   /**
    * Set data item in Map and update localStorage.
    *
    * @param {number} id
    * @param {object} value
    * @returns {void}
    */
   set(id, value) {
      this.pull()
      this.data.set(id, value)
      this.push()
   }

   /**
    * Clear data in Map and update localStorage.
    *
    * @returns {void}
    */
   clear() {
      this.data.clear()
      this.push()
   }

   /**
    * Delete data item from Map and update localStorage.
    *
    * @param {number} id
    * @returns {void}
    */
   delete(id) {
      this.data.delete(id)
      this.push()
   }

   /**
    * Get size of data in Map.
    *
    * @returns {number} size
    */
   get size() {
      this.pull()
      return this.data.size
   }

   /**
    * Check if data item exists in Map.
    *
    * @param {number} id
    * @returns {boolean} has
    */
   has(id) {
      this.pull()
      return this.data.has(id)
   }

   /**
    * Get array of data Map.
    *
    * @returns {array} data
    */
   get dataArray() {
      return [...this.data]
   }

   /**
    * Get last entry in data Map.
    *
    * @returns {Map} last entry
    */
   get lastEntry() {
      this.pull()
      return this.dataArray.at(-1)
   }

   /**
    * Get last key in data Map.
    *
    * @returns {number} last key
    */
   get lastKey() {
      this.pull()
      return this.dataArray.at(-1)[0]
   }

   /**
    * Get last value in data Map.
    *
    * @returns {object} last value
    */
   get lastValue() {
      this.pull()
      return this.dataArray.at(-1)[1]
   }

   /**
    * Create new ID.
    *
    * @returns {number} id
    */
   createNewId() {
      return this.lastKey + 1
   }

   /**
    * Query Map for post data by property.
    *
    * @param {string} property
    * @param {string} value
    * @param {'key'|'value'|'entry'} output
    * @returns {object[]} posts
    */
   queryBy(property, value, output = 'value') {
      const results = this.dataArray.filter((entry) => {
         const post = entry[1]
         if (!Object.hasOwn(post, property)) { return }
         if (post[property] === value) {
            return entry
         }
      })
      if (!results.length) { return null }
      return results.map((entry) => {
         switch(output) {
            case 'key':
               return entry[0]
            case 'value':
               return entry[1]
            case 'entry':
               return entry
         }
      })
   }
}

export { LocalDB }