
const SearchCard = json => 
   fetch(
    "https://awesome-profile-cards.herokuapp.com/card" , {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  }
  )
    .then((response) => response.json());
  


export default SearchCard
