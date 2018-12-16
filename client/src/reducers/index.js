import {  RECIEVE_MEDIA, 
          MEDIA_IS_LOADING, 
          MEDIA_HAS_ERROR, } from '../ReduxActions/MediaActions'

import {  RECIEVE_DEVICES, 
          DEVICES_IS_LOADING, 
          DEVICES_HAS_ERROR, } from "../ReduxActions/DeviceActions"

import {  RECIEVE_EVENTS, 
          EVENT_IS_LOADING, 
          EVENT_HAS_ERROR, } from "../ReduxActions/EventActions"

import { USER_LOGOUT } from "../ReduxActions/UserActions"

import { combineReducers, bindActionCreators } from 'redux'

const mediaHasError = (state = { isError: false }, action) => {
  switch (action.type) {
    case MEDIA_HAS_ERROR:
        return Object.assign({}, state, {
          isError: action.isError
        });
    default:
        return state;
  }
}

const mediaIsLoading = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case MEDIA_IS_LOADING:
      return Object.assign({}, state, {
          isLoading: action.isLoading
      });
    default:
      return state;
  }
}

const sendMedia = (state = [], action) => {
  switch (action.type){
    case RECIEVE_MEDIA:
      return Object.assign({}, state, {
        media: action.objects,
        receivedAt: action.receivedAt
      })
    default: 
      return Object.assign({}, state, {
        media: [],
        event: null,
        receivedAt: new Date()
      })
  }
}

const deviceIsLoading = (state = { isLoading: false }, action) => {
  switch (action.type){
    case DEVICES_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })
    default:
      return state;
  }
}

const deviceHasError = (state = { hasError: false }, action) => {
  switch (action.type) {
    case DEVICES_HAS_ERROR:
      return Object.assign({}, state, {
        hasError: action.hasError,
      })
    default:
      return state;
  }
}

const sendDevices = (state = [], action) =>{
    switch (action.type) {
      case RECIEVE_DEVICES:
        return Object.assign({}, state, {
          devices: action.devices,
          recievedAt: bindActionCreators.recievedAt,
        })
      default:
        return state
    }
}

const eventIsLoading = (state = { isLoading: false }, action) => {
  switch (action.type){
    case EVENT_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })
    default:
      return state;
  }
}

const eventHasError = (state = { hasError: false }, action) => {
  switch (action.type) {
    case EVENT_HAS_ERROR:
      return Object.assign({}, state, {
        hasError: action.hasError,
      })
    default:
      return state;
  }
}

const sendEvents = (state = [], action) => {
  switch (action.type) {
    case RECIEVE_EVENTS:
      return Object.assign({}, state, {
        events: action.events,
        recievedAt: bindActionCreators.recievedAt,
      })
    default:
      return state
  }
}

const userLogout = (state = [], action) =>{
  switch (action.type) {
    case USER_LOGOUT:
      return Object.assign({}, state, {
        logout: true
      })
      default:
        return state
  }
}

const appReducer = combineReducers({
  sendMedia,
  mediaIsLoading,
  mediaHasError,
  
  sendDevices,
  deviceIsLoading,
  deviceHasError,

  sendEvents,
  eventHasError,
  eventIsLoading,

  userLogout,
})

const rootReducer = (state, action) => {
  console.log("action", action.type);
  if (action.type == USER_LOGOUT){
    console.log("logout selected")
    state = undefined
  }
  return appReducer(state, action);
}
export default rootReducer;
