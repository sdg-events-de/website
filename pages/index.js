import { Box, Container, Typography } from "@mui/material";
import AppLayout from "layouts/AppLayout";
// import Database from "models/Database";
// import Event from "models/Event";
// import EventGroup from "components/EventGroup";

const Index = () => (
  <AppLayout>
    <Container>
      <Box marginTop="5vh" textAlign="center" paddingTop={2} paddingBottom={2}>
        <Box
          component="img"
          src="/static/sdg-logo.png"
          alt="SDG color wheel"
          height={{ xs: 100, md: 150 }}
          marginBottom={2}
        />
        <Typography variant="h2" gutterBottom>
          Events zu SDGs & Agenda 2030
        </Typography>
        <Typography
          variant="h4"
          color="textSecondary"
          style={{ fontWeight: "300" }}
        >
          Veranstaltungen von Organisationen in Deutschland
          <br />
          &mdash; t&auml;glich aktualisiert
        </Typography>
      </Box>
      <Box marginBottom="5vh">
        {
          // Search
        }
      </Box>
      {/* {Object.keys(groupedEvents).map((group) => (
        <EventGroup key={group} title={group} events={groupedEvents[group]} />
      ))} */}
    </Container>
  </AppLayout>
);

// Index.getInitialProps = async function () {
//   const events = await Database.fetchUpcomingEvents();

//   const groupedEvents = Event.groupByMonth(events);

//   return {
//     groupedEvents: groupedEvents,
//   };
// };

export default Index;
