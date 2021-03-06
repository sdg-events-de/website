import { Box, Container, Grid, Typography } from "@mui/material";
import AppLayout from "layouts/AppLayout";
import EventCard from "components/EventCard";

const Index = ({ events }) => (
  <AppLayout>
    <Container>
      <Box
        marginTop="5vh"
        marginBottom="5vh"
        textAlign="center"
        paddingTop={2}
        paddingBottom={2}
      >
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
      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid key={event.id} item lg={4} md={6} xs={12}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </AppLayout>
);

import { fetchUpcomingPublishedEvents } from "helpers/api";

Index.getInitialProps = async () => {
  const events = await fetchUpcomingPublishedEvents();

  return { events };
};

export default Index;
