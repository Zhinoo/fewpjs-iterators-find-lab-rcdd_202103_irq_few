const titleCased = () => {
  return tutorials
  return tutorials.map( str => str.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
}