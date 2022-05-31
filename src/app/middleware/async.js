const async = (dispatch) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("This action is a function, not an object");
  }
  next(action);
};

export default async;

// I am deprecating this because thunk middleware is already part of the
// configureStore function. 