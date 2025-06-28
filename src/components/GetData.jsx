import React from 'react'

function GetData() {

  const playersBinUrl = "https://api.jsonbin.io/v3/b/685f3beb8960c979a5b2b795"
  
  console.log(playersBinUrl)
  
  // const response = await fetch(playersBinUrl, {
  //   method: "GET",
  //   headers: {
  //     "X-Master-Key": MY_API_KEY,
  //   },
  // })

  // const data = await response.json()
  // console.log(data)

  return (
    <p>This is the GetData component. It's hooked up. Now we just need to get the fetch working.</p>
  )
}

export default GetData