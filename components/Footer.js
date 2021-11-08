import { Box, Container, Typography } from "@mui/material";
import ExternalLink from "components/ExternalLink";

const Footer = () => (
  <Box py={5} bgcolor="#2a2a4e" color="white">
    <Container>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        SDG Events ist eine Sammlung von Veranstaltungen zum Thema Agenda 2030
        in Deutschland. Daf&uuml;r werden t&auml;glich die Webseiten
        verschiedener Organisationen abgefragt und nach neuen Veranstaltungen
        durchsucht.
      </Typography>
      <Typography variant="body2">
        SDG Events ist ein{" "}
        <ExternalLink color="inherit" href="https://github.com/sdg-events-de">
          open source Projekt
        </ExternalLink>{" "}
        von{" "}
        <ExternalLink color="inherit" href="https://twitter.com/FinnWoelm">
          Finn W&ouml;lm
        </ExternalLink>
        . Feedback? Fehler gefunden?{" "}
        <ExternalLink color="inherit" href="https://twitter.com/FinnWoelm">
          Schreib mir auf Twitter.
        </ExternalLink>
      </Typography>
    </Container>
  </Box>
);

export default Footer;
