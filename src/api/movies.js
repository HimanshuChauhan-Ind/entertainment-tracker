const BASE_URL = "http://localhost:3001";

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    throw new Error("Failed to get movies");
  }
  const data = response.json();
  return data;
};
