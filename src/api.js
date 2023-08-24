import axios from 'axios';

export async function getToken(username,password) {
  return(
    await axios.post("/oauth2/token", {
      grant_type: "client_credentials",
      client_id: username, //BSOFT1
      client_secret: password, //Foobaz99
      scope: '*',
    }, {
      headers: {
        "x-api-key": "DwGxgC2Fyp2IFZTvz5Y9e69mZOcwnA0h6coCsb2L",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  )
}

export async function getData(jwt) {
  return await axios.get("/products/search?q.parser=structured&sort=date%20asc&q=venue_code%3A%20%27SSD%27", {
    headers: {
      "Authorization": `Bearer ${jwt}`,
      "x-api-key": "DwGxgC2Fyp2IFZTvz5Y9e69mZOcwnA0h6coCsb2L"
    }
  })
  //   localStorage.setItem('data', JSON.stringify(response.data))
  //   return response.data
  // } catch (error) {
  //   console.log({ error })
  // }
}

// export