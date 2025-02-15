import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Nav() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 border rounded-lg">
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
          sx={{ height: 550, width: '100%', objectFit: "cover" }}
        image="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mrs.Kim Sean Ho
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p> Specialization: Psychology, Community Mental Health</p>
        <p> Teaching: School psychology consultancy</p>
        <p>Working unit: Faculty of Psychology, University of Social Sciences and Humanities, VNU-HCM
        h</p>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>
  );
}
