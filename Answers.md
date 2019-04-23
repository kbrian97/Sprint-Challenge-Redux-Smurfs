1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.create method is used to create a new object while having the properties of the object create a new instance of the object to stop side effects.

Array.map returns a new array without altering the original, mapping over the array perform an action like the forEach method.

Array.filter returns a new array without altering the original array and applies a condition that filters the array returning a new array.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a global state, that holds information that is used in the application globally.

Actions are fuctions that allow the user the perform an action that are passed to the reducer.

The reducer takes in the fired action and updates the state to change the UI in the way the user intended.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a state that is global and can be used by any of the components in the app. Useful when there are bits of informatino whitch are needed and used throughout the whole site.

Component state is local to only the component which has it, immutable, and can be passed down to the children of that component. 


4.  What is middleware?

Are third party services that in redux act between the action and the dispatcher to perform task like asychronous requests, logging, and routing

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

When an action returns a function instead of an object, redux thunk will execute the function

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect

import { connect } from 'react-redux';

export default connect(
    mapStateToProps,
    {}
    )()
