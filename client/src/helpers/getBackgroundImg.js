const getBackgroundImg = (url, size = "cover") =>{
    return  ({ 
                backgroundImage: ['url(',url,  ')'].join(''),
                backgroundSize: size,
            })
  }

export default getBackgroundImg