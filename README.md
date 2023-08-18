# Todo App

## Setup

Pull the repo, run `npm install` then `npm start`

## Production

to build for production run `npm run build`

## Trade Offs

- I have only tested the functionality on Chrome, Safari and Firefox on my own Macbook Pro
- I haven't written any tests, as a rule I like to have a intergration tests that cover the majority of the functionality. I would write them using gherkin feature files and run them using the cucumber test runner.
- Rather then mutating state inside useReducer I would prefer to use a library which grants immutability, in this particular case it seems too much to include a library for one action
- I haven't implemented any ID's on the todos. The only issue it causes in the current application is react doesn't have a meaningful key to use while rendering and consequently fires off an error in the console. It would become a bigger issue if we added removal, uncomplete and/or sorting.
- There is a very limited amount of error checking and there are no fallback states should something go wrong while the app is loading/in use
- The local storage implementation works fine in this use case but it would be a pain to scale, it would be better to use a state managment library or create a new hook that wraps useReducer abstracts out the local storage syncing
- These features were intentionally left out as they weren't included in the story:
  - Removal
  - Uncomplete
  - Sorting
  - Styling - I am just using a simple css framework
    To deliver a good user experiance I would recommend including them before going to production
