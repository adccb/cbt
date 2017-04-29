export default (state = { controls: false, help: false }, action) => {
  const lookup = {
    'SHOW_DRAWER': () => {
      const { help } = state
      return { controls: true, help }
    },
    'HIDE_DRAWER': () => {
      const { help } = state
      return { controls: false, help }
    },

    'SHOW_HELP': () => {
      const { controls } = state
      return { help: true, controls }
    },
    'HIDE_HELP': () => {
      const { controls } = state
      return { help: false, controls }
    },
  }

  return lookup[action.type] ? lookup[action.type]() : state
}
