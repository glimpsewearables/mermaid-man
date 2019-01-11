export const RECIEVE_DEVICES = "RECIEVE_DEVICES"
export const DEVICES_HAS_ERROR = "DEVICES_HAS_ERROR"
export const DEVICES_IS_LOADING = "DEVICES_IS_LOADING"

export function deviceHasError(hasError){
    return {
        type: DEVICES_HAS_ERROR,
        hasError,
    }
}

export function deviceIsLoading(isLoading){
    return {
        type: DEVICES_IS_LOADING,
        isLoading,
    }
}

export function recieveDevices(device){
    return {
        type: RECIEVE_DEVICES,
        devices: [ device ],
        recievedAt: new Date(),
    }
}

export const getAllDevices = (deviceId) => {
    return (dispatch) => {
        dispatch(deviceIsLoading(true));
        dispatch(deviceHasError(false));
        fetch('/api/device/' + deviceId, {
            method: 'GET',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*',},
          }).then(res => {
            if( !res.ok) {
                dispatch(deviceHasError(true))
                throw Error(res.statusText);  
            }

            dispatch(deviceIsLoading(false));
            return res.json();
          })
          .then(
            (res) => {
                dispatch( recieveDevices( JSON.parse(res.data) ))
            },(error) => {
                dispatch(deviceIsLoading(false));
                dispatch(deviceHasError(true))
                console.log(error)
            }
          );
    }
}