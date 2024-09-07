import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function Reservas() {
  const theme = useTheme();
  return (
    <Container maxWidth={false} id="reservas" sx={{
      //minHeight: '100vh',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Grid container justifyContent="center" alignItems='center' spacing={2} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h3" textAlign="center" mb={2} mt={4}  >
            Reservas
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center" alignItems='center' mb={4} >
          <Typography variant="h4" component="h3" textAlign="center" mb={2} mt={4} >
            fgsdg
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} justifyContent="center" alignItems='center' mb={4}  >

        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FMontevideo&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTz=0&hl=es_419&showCalendars=0&src=ZjdiM2RmMjk4ZDFkMzE2M2JjZjBjYzAzZjIyNjAxYWQ2ZWZhMGI2ZGJkMmE1N2NmZTViZTZiYzk4NTY4YWM0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688"
          //style={{ border: 'solid 1px #777' }}
          width="100%"
          height="400"
          // frameBorder="0"
          // scrolling="no"
          ></iframe>
          </Grid>
      </Grid>
    </Container>
  );
}

export default Reservas;
