function Delete() {
    const PINATA_JWT = `Bearer ${process.env.REACT_APP_JWT}`
    const PIN_QUERY = `https://api.pinata.cloud/data/pinList?status=pinned&pageLimit=1000&includeCount=false`
    const fetch = require("node-fetch")
  
    const wait = milliseconds => {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
      })
    }
  
    const fetchPins = async () => {
      try {
        console.log("Fetching pins...")
        let pinHashes = []
        let pageOffset = 0
        let hasMore = true
  
        while (hasMore === true) {
          try {
            const response = await fetch(
              `${PIN_QUERY}&pageOffset=${pageOffset}`,
              {
                method: "GET",
                headers: {
                  accept: "application/json",
                  Authorization: PINATA_JWT
                }
              }
            )
            const responseData = await response.json()
            const rows = responseData.rows
  
            if (rows.length === 0) {
              hasMore = false
            }
            const itemsReturned = rows.length
            pinHashes.push(...rows.map(row => row.ipfs_pin_hash))
            pageOffset += itemsReturned
            await wait(300)
          } catch (error) {
            console.log(error)
            break
          }
        }
        console.log("Total pins fetched: ", pinHashes.length)
        return pinHashes
      } catch (error) {
        console.log(error)
      }
    }
  
    const deletePins = async () => {
      const pinHashes = await fetchPins()
      const totalPins = pinHashes.length
      let deletedPins = 0
      try {
        for (const hash of pinHashes) {
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
            process.stdout.write(`Deleted ${deletedPins} of ${totalPins} pins\r`)
          } catch (error) {
            console.log(error)
          }
        }
        console.log("Pins deleted")
      } catch (error) {
        console.log(error)
      }
    }
  
    deletePins()
  }
  
  export default Delete
  