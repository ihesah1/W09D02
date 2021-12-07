# Simple todo list with Redux and React
![Bildschirmfoto-2017-12-01-um-08 53 32](https://user-images.githubusercontent.com/92258765/144977405-d8e3d0fc-565c-499a-9930-2f91289273b6.png)

### Why Should I Use Redux?​
Redux helps you manage "global" state - state that is needed across many parts of your application.
## How Does Redux Work?
Helpful React-Redux data flow diagram

![68747470733a2f2f636f64696e67746865736d6172747761792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30352f30312e706e67](https://user-images.githubusercontent.com/92258765/144910913-71f32fc4-fc02-4ec1-bf9b-908d208cbc1a.png)

We can summarize the flow of data through a Redux app with this diagram. It represents how:

* actions are dispatched in response to a user interaction like a click
* the store runs the reducer function to calculate a new state
* the UI reads the new state to display the new values

![ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26](https://user-images.githubusercontent.com/92258765/144988823-44532fa0-a5a4-47bf-af0f-a3c503261645.gif)


## setting up all packages & Redux
``` npm i axios jwt react-redux react-router-dom redux ```


A brief description of each package and the function it will serve
* axios: promise based HTTP client for making requests to our backend
* jwt-decode: used to decode our jwt so we can get user data from it
* react-redux: allows us to use Redux with React
* react-router-dom: used for routing purposes
* redux: used to manage state between components (can be used with React or any other view library)

