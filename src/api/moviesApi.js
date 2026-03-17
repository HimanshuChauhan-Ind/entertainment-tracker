const BASE_URL = "http://localhost:3001";

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    throw new Error("Failed to get movies");
  }
  const data = await response.json();
  return data;
};

export const getMovie = async (id) => {
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  if (!response.ok) {
    throw new Error("Failed to get the data for moveie!");
  }
  const data = await response.json();
  return data;
};

export const addMovie = async (movie) => {
  const response = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

  if (!response.ok) throw new Error("Failed to add movie");

  return response.json();
};
