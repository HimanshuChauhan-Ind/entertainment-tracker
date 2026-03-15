import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <div className="flex justify-between items-center px-6 h-14 border-b border-gray-200 bg-gray-50">
        <div className="text-sm font-medium">Entertainment App</div>
        <div className="flex items-center gap-2">
          <Link
            className="text-sm text-gray-500 px-3 py-2 rounded-md"
            to={"/"}
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                "text-blue-600 bg-blue-100 font-medium hover:bg-gray-100 hover:text-gray-900",
            }}
          >
            Dashboard
          </Link>
          <Link
            className="text-sm text-gray-500 px-3 py-2 rounded-md"
            to={"/movies"}
            activeProps={{
              className:
                "text-blue-600 bg-blue-100 font-medium hover:bg-gray-100 hover:text-gray-900",
            }}
          >
            Movies
          </Link>
          <Link
            className="text-sm text-gray-500 px-3 py-2 rounded-md"
            to={"/tvShows"}
            activeProps={{
              className:
                "text-blue-600 bg-blue-100 font-medium hover:bg-gray-100 hover:text-gray-900",
            }}
          >
            Tv Shows
          </Link>
          <Link
            className="text-sm text-gray-500 px-3 py-2 rounded-md"
            to={"/anime"}
            activeProps={{
              className:
                "text-blue-600 bg-blue-100 font-medium hover:bg-gray-100 hover:text-gray-900",
            }}
          >
            Anime
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}
