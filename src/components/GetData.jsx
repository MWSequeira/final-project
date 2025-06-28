import React from 'react'

async function GetData() {

  // const playersBinUrl = "https://api.jsonbin.io/v3/b/685f3beb8960c979a5b2b795"
    
  // const response = await fetch(playersBinUrl, {
  //   method: "GET",
  //   headers: {
  //     "X-Master-Key": MY_API_KEY,
  //     "X-Bin-Meta": false,
  //   },
  // })

  // const data = await response.json()
  // console.log(data.players)

  return (
    <div>
      <p>This is the GetData component. It's hooked up. Now we just need to get the fetch working.</p>
      <p>The data is coming in as an object. I used the x-bin-meta header as false and it's working now. Now I just need to render the data without constantly fetching it.</p>
    </div>
  )
}

export default GetData