import React from 'react'

import { Grid } from "semantic-ui-react";

import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
import { useSelector } from "react-redux";

const EventDashboard = () => {
 const {events} = useSelector(state => state.event)
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};
export default EventDashboard;
