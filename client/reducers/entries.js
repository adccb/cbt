export default (state = { entries: [] }, action) => {
  const lookup = {
    'ADD_ENTRY': () => {
      const { entries } = state
      entries.push({
        createdAt: Date.now(),
        thought: '',
        distortion: 0,
        response: ''
      })

      return { entries }
    },
    'EDIT_ENTRY': () => {
      const { entries } = state
      const { field, id, value } = action.item

      entries.forEach(i => {
        if(i.createdAt === id) i[field] = value
      })

      return { entries }
    }
  }

  return lookup[action.type] ? lookup[action.type]() : state
}
