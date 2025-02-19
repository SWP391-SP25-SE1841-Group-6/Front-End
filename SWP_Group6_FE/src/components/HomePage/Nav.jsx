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
    image:
      "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Emily Carter",
    specialization: "School Counseling, Adolescent Psychology",
    teaching: "Emotional Regulation in Schools",
    unit: "Department of School Psychology, Stanford University",
    image:
      "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Prof. Lisa Nguyen",
    specialization: "Educational Psychology, Child Development",
    teaching: "Learning Disabilities and Interventions",
    unit: "Faculty of Psychology, University of Melbourne",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Hannah Lee",
    specialization: "Behavioral Psychology, Social Emotional Learning",
    teaching: "Positive Behavior Support in Schools",
    unit: "School of Psychology, University of Toronto",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Olivia Brown",
    specialization: "Cognitive Psychology, Learning Strategies",
    teaching: "Effective Teaching and Learning Strategies",
    unit: "Department of Psychology, University of Oxford",
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Prof. Ava Martinez",
    specialization: "Mental Health in Schools, Crisis Intervention",
    teaching: "Mental Health Support for Students",
    unit: "Faculty of Education, University of California, Berkeley",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
  },
];

<<<<<<<< HEAD:SWP_Group6_FE/.history/src/components/HomePage/InforLecture_20250215154349.jsx
export default function InforLecture() {
========
export default function Nav() {
>>>>>>>> 9a964a7c7b83e4185da565a5bad7f2c16d4f0c0a:SWP_Group6_FE/src/components/HomePage/Nav.jsx
  return (
    <div className="p-2 grid grid-cols-3 gap-8 border rounded-b-xl">
      {profiles.map((profile, index) => (
        <Card key={index} sx={{ maxWidth: "90%", borderRadius: 5, }}>
          <CardMedia
            sx={{ height: 600, width: "90%", objectFit: "cover", margin:'auto', mt:2,borderRadius:5 }}
            image={profile.image}
            title={profile.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Specialization:</strong> {profile.specialization}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Teaching:</strong> {profile.teaching}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Working unit:</strong> {profile.unit}
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
