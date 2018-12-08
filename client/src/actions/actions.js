export const RECIEVE_MEDIA = 'RECEIVE_MEDIA'

function receivePosts(event, json) {
    return {
      type: RECIEVE_MEDIA,
      event,
      objects: json.data.objects,
      receivedAt: Date.now()
    }
  }
