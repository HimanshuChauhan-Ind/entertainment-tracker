import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addMovie, getMovie, getMovies } from "../moviesApi";

export const moviekeys = {
  all: ["movies"],
  detail: (id) => ["movies", id],
};

export const useGetMovies = () => {
  return useQuery({
    queryKey: moviekeys.all,
    queryFn: getMovies,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetMovie = (id) => {
  return useQuery({
    queryKey: moviekeys.detail(id),
    queryFn: () => getMovie(id),
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newMovie) => addMovie(newMovie),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: moviekeys.all,
      });
    },
  });
};
