import React, { useEffect } from "react";
const handleShareBtn = (setData) => {
  return fetch(
    "https://awesome-profile-cards.herokuapp.com/card" /*, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }**/
  )
    .then((response) => response.json())
    .then((response) => {
      setData(response);
    });
};

export default handleShareBtn;
