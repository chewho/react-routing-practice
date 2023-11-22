import React from "react";
import { useParams } from "react-router-dom";

export const EventsDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventsDetailPage</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
};
