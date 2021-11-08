import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// import EventCardMetaSection from "components/EventCardMetaSection";

const CardWithFullHeight = styled(Card)`
  height: 100%;
`;

const CardActionAreaWithFullHeight = styled(CardActionArea)`
  height: 100%;
`;

const DateBox = styled(Box)`
  min-width: 70px;
  width: 70px;
`;

const CardTitle = styled(Typography)`
  && {
    font-weight: 500;
  }
`;

const CardContentWithoutOverflow = styled(CardContent)`
  && {
    display: flex;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

const MONTHS = [
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
];

const EventCard = ({ event }) => (
  <CardWithFullHeight elevation={2}>
    <CardActionAreaWithFullHeight href={event.url} target="_blank" focusRipple>
      <CardContentWithoutOverflow>
        <DateBox align="center" padding={2.5}>
          <Typography variant="body1" color="primary" fontWeight={500}>
            {MONTHS[new Date(event.starts_at).getMonth()]}
          </Typography>
          <Typography variant="h5" color="primary" fontWeight={500}>
            {new Date(event.starts_at).getDate()}
          </Typography>
        </DateBox>
        <Box padding={2.5} paddingLeft={0} style={{ overflow: "hidden" }}>
          <CardTitle variant="body1">{event.title}</CardTitle>
          {/* <EventCardMetaSection event={event} /> */}
          <Typography variant="body2">{event.summary}</Typography>
        </Box>
      </CardContentWithoutOverflow>
    </CardActionAreaWithFullHeight>
  </CardWithFullHeight>
);

export default EventCard;
