export const addEntry = () => {
  return { type: 'ADD_ENTRY' }
}

export const editEntry = item => {
  return { type: 'EDIT_ENTRY', item }
}

export const save = item => {
  return { type: 'SAVE', item }
}

export const clear = item => {
  return { type: 'CLEAR', item }
}
