export const RECIEVE_MEDIA = 'RECIEVE_MEDIA'
export const MEDIA_IS_LOADING = "MEDIA_IS_LOADING";
export const MEDIA_HAS_ERROR = "MEDIA_HAS_ERRORED";

function mediaIsLoading(isLoading){
  return{
    type: MEDIA_IS_LOADING,
    isLoading,
  }
}

function mediaHasError(isError){
  return{
    type: MEDIA_HAS_ERROR,
    isError,
  }
}

function recieveMedia(event, objects) {
  return {
    type: RECIEVE_MEDIA,
    event,
    objects,
    receivedAt: Date.now()
  }
}

export function fetchAllVideosUsermedia(deviceId, eventId) {
  const url = '/media/getAllVideosUserEvent/' + deviceId + '/' + eventId;
  return (dispatch) => { 
    dispatch(mediaIsLoading(true));
    fetch(url, {
        method: 'GET',
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
      })
      .then( res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch( dispatch(mediaIsLoading(false)) )
        console.log(res);
        return  res.json()
      })
      .then(
        (json) => {
          let jsonParse = JSON.parse(json.data).user_event_videos.media;
        dispatch(recieveMedia("media", jsonParse))
        },(error) => {
          dispatch(mediaHasError(true))
          console.log(error)
      })
    }; 
}

