const fetchApi = async () => {
  const requestPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const requestJason = await requestPlanets.json();
  return requestJason.results;
};

export default fetchApi;
