function Delete(props) {
    const PINATA_JWT = `Bearer ${process.env.REACT_APP_JWT}`
    const PIN_QUERY = `https://api.pinata.cloud/data/pinList?status=pinned&pageLimit=1000&includeCount=false`
    const fetch = require("node-fetch")
  
    const wait = milliseconds => {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
      })
    }
    const deletePins = async () => {
      const hash = props.value;
      
      let deletedPins = 0
      try {
        
          try {
            const response = await fetch(
              `https://api.pinata.cloud/pinning/unpin/${hash}`,
              {
                method: "DELETE",
                headers: {
                  accept: "application/json",
                  Authorization: PINATA_JWT
                }
              }
            )
            await wait(300)
            deletedPins++
            process.stdout.write(`Deleted ${deletedPins}\r`)
          } catch (error) {
            console.log(error)
          }
        
        console.log("Pins deleted")
      } catch (error) {
        console.log(error)
      }
      setTimeout(()=>{
        props.fetchPins();
      },1000)
      
    }
    return(
      <button onClick={deletePins}>
        Delete
      </button>
    )
    
  }
  
  export default Delete
  