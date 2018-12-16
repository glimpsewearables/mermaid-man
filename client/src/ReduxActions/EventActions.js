import fetch from 'cross-fetch'
export const EVENT_IS_LOADING = "EVENT_IS_LOADING"
export const EVENT_HAS_ERROR = "EVENT_HAS_ERROR"
export const RECIEVE_EVENTS = "RECIEVE_EVENTS"


// helper function to form events dictionary
const makeNameDictionary = (events) => {
    let e = {}
    for(let i = 0; i < events.length; i++){
      e[events[i].name.split(" ").join('')] = events[i]
    }
    return e
}

const eventHasError = (hasError) => {
    return {
        type: EVENT_HAS_ERROR,
        hasError,
    }
}

const eventIsLoading = (isLoading) => {
    return {
        type: EVENT_IS_LOADING,
        isLoading,
    }
}

const recieveEvents = (events) => {
    return {
        type: RECIEVE_EVENTS,
        events: makeNameDictionary(events)
    }
}


export const getAllEvents = () => {
    return (dispatch) => {
        dispatch(eventIsLoading(true));
        dispatch(eventHasError(false));
        fetch('/api/event/', {
            method: 'GET',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
          })
          .then(res => {
              if( !res.ok) {
                dispatch(eventHasError(true))
                throw Error(res.statusText);  
              }
              dispatch(eventIsLoading(false));
              return res.json();
          })
          .then(
            (res) => {
              dispatch( recieveEvents( JSON.parse(res.data).objects ))
            },(error) => {
              dispatch(eventIsLoading(false));
              dispatch(eventHasError(true))
              console.log(error)
           });
    }
}
