import { createFileRoute } from "@tanstack/react-router";
import { useGetMovie } from "../../api/hooks/useMovies";

export const Route = createFileRoute("/movies/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  const { data, isLoading, error } = useGetMovie(id);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Opps... something went wrong</div>;

  return (
    <div>
      <div>
        <div>Name</div>
        <div>{data.name}</div>
      </div>
    </div>
  );
}
