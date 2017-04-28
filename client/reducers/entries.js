const entries = window.localStorage['cbt-entries']
  ? JSON.parse(window.localStorage['cbt-entries'])
  : []

export default (state = { entries }, action) => {
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
    },
    'SAVE': () => {
      window.localStorage['cbt-entries'] = JSON.stringify(state.entries)
      return state
    },
    'CLEAR': () => {
      window.localStorage['cbt-entries'] = JSON.stringify([])
      return { entries: [] }
    }
  }

  return lookup[action.type] ? lookup[action.type]() : state
}
