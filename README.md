# sinatra-react-boilerplate

this is a boilerplate repo to create a new React app with a Sinatra backend.

## getting started

`git clone` the repo, then `cd` into the directory and run: `npm install && bundle install`

and you're set!

## starting the server

`ruby index.rb`

## starting client transpilation

`npm start client`

## command line tool

run `node ./scripts/index.js` to access the command line tool. you can pass flags to generate react components.

`node ./scripts/index.js --component=Home` will generate a stateful `class`-based react component, while passing a `--fn` will generate a stateless functional component.

it generates a folder in `./client/components/` which contains a `Component.js` and a `Component.scss`.
