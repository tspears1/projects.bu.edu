export default ({children}, helpers) => {
   const handleClick = () => {
      alert('hi')
      console.log('hi')
   }
   return (
      <button className="button" onClick={handleClick}>{children}</button>
   )
}