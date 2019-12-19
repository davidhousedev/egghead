import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const EventList = ({ events }) => (
  <>
    <Styled.h1>Upcoming Events</Styled.h1>
    <Styled.ul>
      {events.map(evt => (
        <Styled.li key={evt.id}>
          <strong>
            <Link to={evt.slug}>{evt.name}</Link>
          </strong>
          <br />
          {new Date(evt.startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </Styled.li>
      ))}
    </Styled.ul>
  </>
);

export default EventList;
