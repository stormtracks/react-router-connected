export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const SELECT_KEY = "SELECT_KEY";

export const selectKey = key => ({
    type: SELECT_KEY,
    key
});
