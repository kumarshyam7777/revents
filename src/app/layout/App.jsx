import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
//import { Button } from "semantic-ui-react";
import NavBar from "./../../features/nav/NavBar";
import HomePage from "./../../home/HomePage";
import EventDetailedPage from "./../../features/events/eventDetail/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "./../../features/sandbox/SandBox";

export default function App() {
  const { key } = useLocation();

  // function handleSelectedEvent(event) {
  //   setSelectedEvent(event);
  //   setFormOpen(true);
  // }

  // function handleCreateFormOpen() {
  //   setSelectedEvent(null);
  //   setFormOpen(true);
  // }
  return (
    <>
      <Route path={"/"} component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path={"/events"} component={EventDashboard} />
              <Route exact path={"/sandbox"} component={Sandbox} />
              <Route path={"/events/:id"} component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />

      {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        /> */}
    </>
  );
}
