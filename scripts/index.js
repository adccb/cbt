const args = require('yargs').argv

const createComponent = require('./create-component')

if(args.component) {
  createComponent(args.component, args.fn)
} else {
  console.log('sorry, nothing found!')
}
