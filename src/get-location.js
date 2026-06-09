
function Get_location(callback){
    navigator.geolocation.getCurrentPosition(
  (position) => {
     const lat = position.coords.latitude
      const lon = position.coords.longitude

      console.log(lat)
      console.log(lon)

      callback(lat, lon)
  },
  (error) => {
    console.log(error)
  }
)
}

export default Get_location