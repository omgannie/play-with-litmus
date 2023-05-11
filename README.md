# play-with-litmus

## demo!
*highly suggested* clone this & run locally!

1. in a terminal window, run `npm i` at the root of the project
2. `npm run serve` to start the server*
3. in a new terminal window, run `npm start` to start the client
4. type in `localhost:3000` and see it in action!

*note that for demo purposes we will only persist the fake models during the life of the server


## overview

a re-vamped project from years past when i participated a hackweek.
the idea is to outsource correspondence to natural language proceessing and AI

it takes an input of text, a passage of anything you want and returns an AI-generated image based on a prompt provided by IBM Watson's Natural Language Understanding API

## tools

this project is an express app built with watson, openai, and spotify on top of node.js, with react for user-facing components.

### history

see the [deprecated rails project](https://github.com/omgannie/litmus)