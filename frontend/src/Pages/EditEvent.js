import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import EditForm from "../components/EventForm";

export const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EditForm event={data.event} method="patch" />;
};
