import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRootLayout = () => {
  return (
    <React.Fragment>
      <EventsNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default EventsRootLayout