import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const profiles = [
  {
    name: "Mrs.Kim Sean Ho",
    specialization: "Psychology, Community Mental Health",
    teaching: "School psychology consultancy",
    unit: "Faculty of Psychology, University of Social Sciences and Humanities, VNU-HCM",
    image: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "Dr. John Doe",
    specialization: "Clinical Psychology, Behavioral Therapy",
    teaching: "Cognitive Behavioral Therapy Techniques",
    unit: "Department of Clinical Psychology, Harvard Medical School",
    image: "https://plus.unsplash.com/premium_photo-1670879976633-efc5cf9857d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Nav() {
  return (
    <div className="p-3 grid grid-cols-3 grid-rows-2 gap-2 border rounded-lg">
      {profiles.map((profile, index) => (
        <Card key={index} sx={{ maxWidth: 600 }}>
          <CardMedia
            sx={{ height: 550, width: "100%", objectFit: "cover" }}
            image={profile.image}
            title={profile.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {profile.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Specialization: {profile.specialization}</p>
              <p>Teaching: {profile.teaching}</p>
              <p>Working unit: {profile.unit}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detail</Button>
            <Button size="small">Appointment</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
