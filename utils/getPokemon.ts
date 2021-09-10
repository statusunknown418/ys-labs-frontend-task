export const BASE_URL = "https://pokeapi.co/api/v2/";

export const getSpecificPoke = async (query: string) => {
  console.log(`You are searching for ${query}`);
  try {
    query.toLowerCase();
    const fetching = await fetch(`${BASE_URL}pokemon/${query}`);
    const data = fetching.json();
    return data;
  } catch (err) {
    alert("This pokemon does not exist");
  }
};
