const ENDPOINT = 'https://awesome-profile-cards.herokuapp.com/card';

const Api = (data) => {

  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default Api;
  // fetch('https://awesome-profile-cards.herokuapp.com/card', {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then(

  //   );





