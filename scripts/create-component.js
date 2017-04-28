const fs = require('fs')
const touch = require('touch')

const { newComponentContent, newFnComponentContent } = require('./file-contents.js')

const newComponent = (name, isFunctional) => {
  name = name[0].toUpperCase() + name.slice(1)
  path = `${__dirname}/../client/components/${name}`

  fs.mkdir(path, (err, a) => {
    touch(`${path}/${name}.scss`)

    if(isFunctional) {
      fs.writeFile(`${path}/${name}.js`,
        newFnComponentContent.replace(/{{name}}/g, name))
    } else {
      fs.writeFile(`${path}/${name}.js`,
        newComponentContent.replace(/{{name}}/g, name))
    }
  })
}

module.exports = newComponent
