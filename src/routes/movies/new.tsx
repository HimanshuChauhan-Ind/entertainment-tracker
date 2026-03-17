import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { useAddMovie } from "../../api/hooks/useMovies";

export const Route = createFileRoute("/movies/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mutate } = useAddMovie();
  const navigate = useNavigate();

  const movieName = useRef("");
  const year = useRef("");
  const genre = useRef("");
  const rewatchability = useRef("");
  const rewatchabilityRating = useRef("");
  const plot = useRef("");
  const genreRating = useRef("");
  const engagement = useRef("");
  const perception = useRef("");
  const aggregate = useRef("");
  const note = useRef("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const movieData = {
      name: movieName.current.value,
      year: year.current.value,
      genre: genre.current.value,
      rewatchability: rewatchability.current.value,
      rewatchability_rating: rewatchabilityRating.current.value,
      plot: plot.current.value,
      rating_in_genre: genreRating.current.value,
      engagement: engagement.current.value,
      perception: perception.current.value,
      aggregate: aggregate.current.value,
      notes: note.current.value,
    };
    console.log(movieData);
    mutate(movieData, {
      onSuccess: (newMovie) => {
        console.log(newMovie);
        navigate({ to: "/movies/$id", params: { id: String(newMovie.id) } });
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <form onSubmit={handlesubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="movieName">Name</label>
          <input
            type="text"
            name="movieName"
            ref={movieName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            ref={year}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            ref={genre}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="rewatchability">Rewatchability</label>
          <input
            type="text"
            name="rewatchability"
            ref={rewatchability}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="rewatchabilityRating">Rewatchability Rating</label>
          <input
            type="text"
            name="rewatchabilityRating"
            ref={rewatchabilityRating}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="plot">Plot</label>
          <input
            type="text"
            name="plot"
            ref={plot}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="genreRating">Rating in genre</label>
          <input
            type="text"
            name="genreRating"
            ref={genreRating}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="engagement">Engagement</label>
          <input
            type="text"
            name="engagement"
            ref={engagement}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="perception">Perception</label>
          <input
            type="text"
            name="perception"
            ref={perception}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="aggregate">Aggregate</label>
          <input
            type="text"
            name="aggregate"
            ref={aggregate}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2">
          <label htmlFor="note">Notes</label>
          <input
            type="text"
            name="note"
            ref={note}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
          ></input>
        </div>
        <div className="mt-2 col-span-2">
          <button
            type="submit"
            className="border border-green-600 w-full rounded-md py-2 font-medium text-green-600 hover:bg-green-600 hover:text-white cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
