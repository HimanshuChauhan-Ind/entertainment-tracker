import { useQuery } from "@tanstack/react-query";
import { getMovie, getMovies } from "../movies";

export const moviekeys = {
  all: ["movies"],
  detail: (id) => ["movies", id],
};

export const useGetMovies = () => {
  return useQuery({
    queryKey: moviekeys.all,
    queryFn: getMovies,
  });
};

export const useGetMovie = (id) => {
  return useQuery({
    queryKey: (id) => moviekeys.detail(id),
  });
  queryFn: (id) => getMovie(id);
};
