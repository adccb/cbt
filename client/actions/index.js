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

export const showDrawer = () => {
  return { type: 'SHOW_DRAWER' }
}

export const hideDrawer = () => {
  return { type: 'HIDE_DRAWER' }
}

export const showHelp = () => {
  return { type: 'SHOW_HELP' }
}

export const hideHelp = () => {
  return { type: 'HIDE_HELP' }
}
