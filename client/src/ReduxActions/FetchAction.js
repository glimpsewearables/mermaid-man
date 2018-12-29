export function fetchWithStatus(isLoading, hasError, recievedRes) {
    const url = '/media/getAllVideosUserEvent/' + "4" + '/0';
    return (dispatch) => { 
        isLoading(true)
      fetch(url, {
          method: 'GET',
          headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
        })
        .then( res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
  
          isLoading(false)
          return  res.json()
        })
        .then(
          (json) => {
            recievedRes(json)
          },(error) => {
            hasError(true)
            console.log(error)
        })
      }; 
  }