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
    name: "Dr. Emily Carter",
    specialization: "School Counseling, Adolescent Psychology",
    teaching: "Emotional Regulation in Schools",
    unit: "Department of School Psychology, Stanford University",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Prof. Lisa Nguyen",
    specialization: "Educational Psychology, Child Development",
    teaching: "Learning Disabilities and Interventions",
    unit: "Faculty of Psychology, University of Melbourne",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Hannah Lee",
    specialization: "Behavioral Psychology, Social Emotional Learning",
    teaching: "Positive Behavior Support in Schools",
    unit: "School of Psychology, University of Toronto",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Olivia Brown",
    specialization: "Cognitive Psychology, Learning Strategies",
    teaching: "Effective Teaching and Learning Strategies",
    unit: "Department of Psychology, University of Oxford",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Prof. Ava Martinez",
    specialization: "Mental Health in Schools, Crisis Intervention",
    teaching: "Mental Health Support for Students",
    unit: "Faculty of Education, University of California, Berkeley",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },

];

export default function Nav() {
  return (
    <div className="p-3 grid grid-cols-3 grid-rows-2 gap-2 border rounded-4xl">
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
