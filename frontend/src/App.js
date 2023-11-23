import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "./Pages/Home";
import { EventsPage } from "./Pages/Events";
import { EventsDetailPage } from "./Pages/EventsDetail";
import { NewEventPage } from "./Pages/NewEvent";
import { EditEventPage } from "./Pages/EditEvent";
import { RootLayout } from "./Pages/Root";
import { EventsRootLayout } from "./Pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                //...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventsDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
