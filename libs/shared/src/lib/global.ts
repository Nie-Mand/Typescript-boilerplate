export const getHeader = (defaults: any) => ({
  headers: {
    ...defaults,
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})

export const objectToString = obj =>
  Object.keys(obj)
    .map(k => `${k}=${obj[k]}`)
    .reduce((acc, cur) => `${acc},${cur}`, '')

export const getRandom = array =>
  array[Math.floor(Math.random() * array.length)]
