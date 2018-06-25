import { SELECT_KEY } from "../actions";

export function selectedKey(state = 'home', action) {
  switch (action.type) {
    case SELECT_KEY:
      return action.key;
    default:
      return state;
  }
}

export const keys = (state = ['home','hello','counter'], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
