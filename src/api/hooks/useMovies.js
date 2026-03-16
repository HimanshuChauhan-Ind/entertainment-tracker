import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../movies";

export const moviekeys = {
  all: ["movies"],
};

export const useGetMovies = () => {
  return useQuery({
    queryKey: moviekeys.all,
    queryFn: getMovies,
  });
};
