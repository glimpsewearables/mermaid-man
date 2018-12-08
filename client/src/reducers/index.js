import { RECIEVE_MEDIA } from '../actions/actions'

import { combineReducers } from 'redux'

const sendMedia = (state = ["test"], action) => {
  switch (action.type){
    case RECIEVE_MEDIA:
      return null;
    default: 
      return state;
  }
}
const removeTag = (state = ["test"], action) => {
  switch (action.type) {
    case "REMOVE_TAG":
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  removeTag,
  sendMedia
})

export default rootReducer;
