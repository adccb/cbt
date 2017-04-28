export const addEntry = () => {
  return { type: 'ADD_ENTRY' }
}

export const editEntry = item => {
  return { type: 'EDIT_ENTRY', item }
}
