const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    // info: "First redux action",
  };
}

function addCake() {
  return {
    type: ADD_CAKE,
    // info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// (previousState, action) => newState

// const initialState = {
//   numberOfCakes: 10,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };

//     case ADD_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake + 1,
//       };

//     default:
//       return state;
//   }
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case ADD_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("Update state", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
// store.dispatch(addCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
