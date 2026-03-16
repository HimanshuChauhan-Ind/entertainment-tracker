import { createFileRoute } from "@tanstack/react-router";
import { useGetMovies } from "../../api/hooks/useMovies";

export const Route = createFileRoute("/movies/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = useGetMovies();

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Something Went wrong</div>;

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          {data.id}, {data.name}
        </div>
      ))}
    </div>
  );
}
