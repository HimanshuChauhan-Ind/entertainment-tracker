import { createFileRoute } from "@tanstack/react-router";
import { useGetMovies } from "../../api/hooks/useMovies";

export const Route = createFileRoute("/movies/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = useGetMovies();

  function aggregateColorCode(data) {
    if (data >= 9) {
      return "text-green-600 font-medium";
    } else if (data >= 7) {
      return "text-yellow-600 font-medium";
    } else {
      return "text-red-500 font-medium";
    }
  }

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Something Went wrong</div>;

  return (
    <div className="p-6">
      <div className="flex justify-around items-center border rounded-lg border-blue-200 p-10 bg-blue-100">
        <div className="text-xl font-medium text-gray-600">Movies Watched</div>
        <div className="text-gray-500 font-medium">{data.length}</div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden mt-2">
        <div className="grid grid-cols-4 px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="text-xs text-gray-400 uppercase">Name</div>
          <div className="text-xs text-gray-400 uppercase">Year</div>
          <div className="text-xs text-gray-400 uppercase">Aggregate</div>
          <div className="text-xs text-gray-400 uppercase">Rewatchability</div>
        </div>
        {data.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-4 px-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50"
          >
            <div className="text-sm text-gray-900">{data.name}</div>
            <div className="text-sm text-gray-500">{data.year}</div>
            <div className={aggregateColorCode(data.aggregate)}>
              {data.aggregate}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              {data.rewatchability}
              <button className="text-xs px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100 cursor-pointer">
                More info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
