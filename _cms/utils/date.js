const snakeDate = (date = new Date()) => {
   return new Date(date).toISOString().split('T')[0]
}

export { snakeDate }