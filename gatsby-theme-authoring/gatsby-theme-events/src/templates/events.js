import React from "react";
import Layout from "../components/layout";
import EventList from "../components/event-list";
import { graphql, useStaticQuery } from "gatsby";

const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate
          endDate
          location
          url
          slug
        }
      }
    }
  `);

  const events = data.allEvent.nodes;

  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
};

export default EventsTemplate;
