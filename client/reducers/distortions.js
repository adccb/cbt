const list = [
  'all-or-nothing thinking', 'overgeneralization', 'mental filter', 'should statements',
  'disqualifying the positive', 'jumping to conclusions', 'emotional reasoning',
  'magnification or minimization', 'labeling and mislabeling', 'personalization',
].sort()

export default (state = { list }, action) => {
  const lookup = {
    
  }

  return lookup[action.type] ? lookup[action.type]() : state
}
