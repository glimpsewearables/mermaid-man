const getBackgroundImg = (url) =>{
    return  ({ 
                backgroundImage: ['url(',url,  ')'].join(''),
                backgroundSize: "cover",
            })
  }

export default getBackgroundImg