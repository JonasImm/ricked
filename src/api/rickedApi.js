const number = () => {
  return Math.floor(Math.random() * (671 - 1)) + 1;
};
const num = number();
export async function fetchRandomCharacter() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${num}`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  return result;
}
export async function fetchCharacter() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const characters = result.results.map((character) => ({
    name: character.name,
    id: character.id,
    planet: character.origin.name,
    status: character.status,
    img: character.image,
    href: `#${character.name}`,
  }));

  return characters;
}
export async function fetchCharacterName(query) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  );
  if (!response.ok) {
    throw new Error("Character doesn´t exist");
  }
  const result = await response.json();

  const characters = result.results.map((character) => ({
    name: character.name,
    id: character.id,
    planet: character.origin.name,
    status: character.status,
    img: character.image,
    href: `#${character.name}`,
  }));

  return characters;
}
export async function fetchLocations() {
  const response = await fetch(`https://rickandmortyapi.com/api/location/`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const locations = result.results.map((location) => ({
    name: location.name,
    id: location.id,
    planet: location.type,
    dimension: location.dimension,
    img: location.image,
  }));

  return locations;
}

export async function fetchLocationName(query) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/?name=${query}`
  );
  if (!response.ok) {
    throw new Error("Location doesn´t exist");
  }
  const result = await response.json();

  const locations = result.results.map((location) => ({
    name: location.name,
    id: location.id,
    planet: location.type,
    dimension: location.dimension,
    img: location.image,
  }));

  return locations;
}

export async function fetchEpisodes() {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const episodes = result.results.map((episode) => ({
    name: episode.name,
    id: episode.id,
    air_date: episode.air_date,
    episode: episode.episode,
    characters: episode.characters,
  }));

  return episodes;
}

export async function fetchEpisodeName(query) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/?name=${query}`
  );
  if (!response.ok) {
    throw new Error("Location doesn´t exist");
  }
  const result = await response.json();

  const episodes = result.results.map((episode) => ({
    name: episode.name,
    id: episode.id,
    air_date: episode.air_date,
    episode: episode.episode,
    characters: episode.characters,
  }));

  return episodes;
}
