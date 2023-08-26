import axios from 'axios';

const time_Ms = 8000;

// set a timer to keep time that when send a API request 
function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      let err = new Error('API request timed out')
      err.status = 404;
      reject(err);
    }, ms);

    promise.then(
      response => {
        clearTimeout(timer);
        resolve(response);
      },
      error => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

export function getToken(username, password) {
  const requestPromise = axios.post("/oauth2/token", {
    grant_type: "client_credentials",
    client_id: username, //BSOFT1
    client_secret: password, //Foobaz99
    scope: '*',
  }, {
    headers: {
      "x-api-key": "DwGxgC2Fyp2IFZTvz5Y9e69mZOcwnA0h6coCsb2L",
      "Content-Type": "application/json",
    },
  });

  return timeout(time_Ms, requestPromise)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
  //  Previouly, I use this method, but it will invoke when I haven't request the API.
  // So I discard this method.
  // return Promise.race([requestPromise, timeoutPromise])
  //   .then(response => {
  //     return response.data;
  //   })
  //   .catch(error => {
  //     throw error;
  //   })
}

export function getData(jwt) {
  const requestPromise = axios.get("/products/search?q.parser=structured&sort=date%20asc&q=venue_code%3A%20%27SSD%27", {
    headers: {
      "Authorization": `Bearer ${jwt}`,
      "x-api-key": "DwGxgC2Fyp2IFZTvz5Y9e69mZOcwnA0h6coCsb2L"
    }
  })

  return timeout(time_Ms, requestPromise)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    })
}
