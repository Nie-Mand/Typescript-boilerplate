export const constants = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
}

export const actions = {
  increment: () => ({ type: constants.increment }),
  decrement: () => ({ type: constants.decrement }),
}
