// import { useParams } from "react-router-dom";
// import { Card, CardActions, CardContent, CardMedia, Typography, } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Flex, Rate } from "antd";
// import { Star, StarHalf } from "@mui/icons-material";

// const Profiles = [
//   {
//     id: "1",
//     name: "Mrs.Kim Sean Ho",
//     specialization: "Psychology, Community Mental Health",
//     teaching: "School psychology consultancy",
//     unit: "Faculty of Psychology, University of Social Sciences and Humanities, VNU-HCM",
//     image: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60",
//     rating: 4,
//     experience: "10 năm trong tư vấn tâm lý học đường",
//     certificates: "Chứng chỉ CBT từ Đại học Harvard",
//     services: "Tư vấn cá nhân, nhóm, trị liệu hành vi",
//     bio: "Mrs. Kim Sean Ho là một chuyên gia tâm lý với phong cách tiếp cận tận tâm, tập trung vào việc hỗ trợ học sinh vượt qua căng thẳng học tập.",
//     achievements: "Hỗ trợ hơn 150 học sinh, nhận giải 'Chuyên gia tâm lý xuất sắc' 2022.",
//     feedback: "Học sinh B: 'Cô Ho đã giúp tôi tìm lại sự tự tin.'",
//   },
//   {
//     id: "2",
//     name: "Dr. Emily Carter",
//     specialization: "School Counseling, Adolescent Psychology",
//     teaching: "Emotional Regulation in Schools",
//     unit: "Department of School Psychology, Stanford University",
//     image: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60",
//     rating: 4.5,
//     experience: "8 năm trong hỗ trợ tâm lý học sinh",
//     certificates: "Chứng chỉ CBT từ Đại học Stanford",
//     services: "Tư vấn cá nhân, trị liệu nhận thức-hành vi",
//     bio: "Dr. Emily Carter chuyên về hỗ trợ học sinh vượt qua lo âu và căng thẳng, với phương pháp trị liệu cá nhân hóa.",
//     achievements: "Hỗ trợ hơn 200 học sinh, giải 'Giảng viên tâm lý xuất sắc' 2023.",
//     feedback: "Học sinh A: 'Cô Carter đã giúp tôi rất nhiều trong việc quản lý căng thẳng thi cử.'",
//   },
//   // Thêm dữ liệu tương tự cho các giảng viên khác...
//   {
//     id: "3",
//     name: "Prof. Lisa Nguyen",
//     specialization: "Educational Psychology, Child Development",
//     teaching: "Learning Disabilities and Interventions",
//     unit: "Faculty of Psychology, University of Melbourne",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
//     rating: 3,
//     experience: "12 năm trong nghiên cứu trẻ em",
//     certificates: "Chứng chỉ phát triển trẻ em từ Đại học Melbourne",
//     services: "Can thiệp học tập, tư vấn phụ huynh",
//     bio: "Prof. Lisa Nguyen tập trung vào hỗ trợ trẻ em có nhu cầu đặc biệt trong học tập.",
//     achievements: "Hỗ trợ 100+ trẻ em, xuất bản 5 nghiên cứu nổi bật.",
//     feedback: "Phụ huynh C: 'Giúp con tôi cải thiện đáng kể.'",
//   },
//   {
//     id: "4",
//     name: "Dr. Hannah Lee",
//     specialization: "Behavioral Psychology, Social Emotional Learning",
//     teaching: "Positive Behavior Support in Schools",
//     unit: "School of Psychology, University of Toronto",
//     image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60",
//     rating: 5,
//     experience: "7 năm trong hỗ trợ hành vi",
//     certificates: "Chứng chỉ SEL từ Đại học Toronto",
//     services: "Hỗ trợ hành vi tích cực, tư vấn nhóm",
//     bio: "Dr. Hannah Lee nổi tiếng với phương pháp hỗ trợ hành vi tích cực cho học sinh.",
//     achievements: "Hỗ trợ 180 học sinh, giải thưởng giáo dục 2021.",
//     feedback: "Học sinh D: 'Cô Lee giúp tôi hòa nhập tốt hơn với bạn bè.'",
//   },
//   {
//     id: "5",
//     name: "Dr. Olivia Brown",
//     specialization: "Cognitive Psychology, Learning Strategies",
//     teaching: "Effective Teaching and Learning Strategies",
//     unit: "Department of Psychology, University of Oxford",
//     image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60",
//     rating: 4,
//     experience: "9 năm trong chiến lược học tập",
//     certificates: "Chứng chỉ nhận thức từ Đại học Oxford",
//     services: "Tư vấn học tập, phát triển kỹ năng",
//     bio: "Dr. Olivia Brown chuyên về tối ưu hóa chiến lược học tập cho học sinh.",
//     achievements: "Hỗ trợ 150 học sinh, xuất bản 3 sách giáo dục.",
//     feedback: "Học sinh E: 'Cô Brown giúp tôi học hiệu quả hơn.'",
//   },
//   {
//     id: "6",
//     name: "Prof. Ava Martinez",
//     specialization: "Mental Health in Schools, Crisis Intervention",
//     teaching: "Mental Health Support for Students",
//     unit: "Faculty of Education, University of California, Berkeley",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
//     rating: 5,
//     experience: "11 năm trong can thiệp khủng hoảng",
//     certificates: "Chứng chỉ can thiệp khủng hoảng từ UC Berkeley",
//     services: "Hỗ trợ khủng hoảng, tư vấn khẩn cấp",
//     bio: "Prof. Ava Martinez là chuyên gia hàng đầu trong xử lý khủng hoảng tâm lý học đường.",
//     achievements: "Hỗ trợ 250 học sinh, giải thưởng nhân đạo 2022.",
//     feedback: "Học sinh F: 'Cô Martinez cứu tôi trong lúc khó khăn nhất.'",
//   },
//   {
//     id: "7",
//     name: "Dr. Jackie Zhang",
//     specialization: "Clinical Psychology, Anxiety Disorders",
//     teaching: "Cognitive Behavioral Therapy in Clinical Settings",
//     unit: "Department of Psychology, Harvard University",
//     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
//     rating: 4.2,
//     experience: "6 năm trong điều trị lo âu",
//     certificates: "Chứng chỉ CBT từ Harvard",
//     services: "Trị liệu lo âu, tư vấn cá nhân",
//     bio: "Dr. Jackie Zhang chuyên về điều trị các rối loạn lo âu ở học sinh.",
//     achievements: "Hỗ trợ 120 học sinh, nghiên cứu lo âu được công nhận.",
//     feedback: "Học sinh G: 'Cô Zhang giúp tôi giảm căng thẳng đáng kể.'",
//   },
//   {
//     id: "8",
//     name: "Dr. Chloe Williams",
//     specialization: "Neuropsychology, Cognitive Development",
//     teaching: "Developmental Neuropsychology in Early Childhood",
//     unit: "School of Psychology, University of Cambridge",
//     image: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtZW58ZW58MHx8MHx8fDA%3D",
//     rating: 4.8,
//     experience: "13 năm trong phát triển nhận thức",
//     certificates: "Chứng chỉ thần kinh từ Cambridge",
//     services: "Đánh giá nhận thức, hỗ trợ trẻ em",
//     bio: "Dr. Chloe Williams tập trung vào phát triển nhận thức cho trẻ em mẫu giáo.",
//     achievements: "Hỗ trợ 200 trẻ em, xuất bản 7 nghiên cứu.",
//     feedback: "Phụ huynh H: 'Con tôi tiến bộ rõ rệt nhờ cô Williams.'",
//   },
// ];
// const customIcons = {
//     1: <Star />,
//     2: <Star />,
//     3: <Star />,
//     4: <Star />,
//     5: <StarHalf />,
//   };
// export const DetailLecture = () => {
//   const { id } = useParams();

//   const lecture = Profiles.find((item) => item.id === id);

//   if (!lecture) {
//     return <p>Không tìm thấy giảng viên</p>;
//   }

//   return (
//     <div className="page">
//       <Card className="flex mt-20 ml-2">
//         <CardMedia
//           className="w-150 h-200 object-cover flex-col rounded-2xl"
//           image={lecture.image}
//           title={lecture.name}
//         />
//         <div className="h-auto w-full"> 
//         <CardContent>
//           <div className="text-black">
//             <Typography gutterBottom variant="h1" component="div">
//               {lecture.name}
//             </Typography>
//             <Typography variant="h2" sx={{ color: "text.secondary" }}>
//               {lecture.specialization}
//             </Typography>
//             <Typography variant="h3" sx={{ color: "text.secondary" }}>
//               {lecture.unit}
//             </Typography>
            
//             <Flex gap="middle" marginLeft="100px" vertical >
//                   <Rate
//                     defaultValue={lecture.rating}
//                     character={({ index = 0 }) => customIcons[index + 1]}
//                   />
//                 </Flex>
            
//             <Typography variant="h4" sx={{ color: "black", mt: 3 }}>
//               <strong>Kinh nghiệm:</strong> {lecture.experience}
//             </Typography>
//             <Typography variant="h4" sx={{ color: "black", mt: 3 }}>
//               <strong> Chứng chỉ: {lecture.certificates} </strong>
//             </Typography>
//             <Typography variant="h4" sx={{ color: "black", mt: 3 }}>
//               <strong>Dịch vụ:</strong> {lecture.services}
//             </Typography>
//             <Typography variant="h4" sx={{ color: "black", mt: 3 }}>
//               <strong>Giới thiệu:</strong> {lecture.bio}
//             </Typography>
//             <Typography variant="h4" sx={{ color: "black", mt: 3}}>
//               <strong>Thành tích:</strong> {lecture.achievements}
//             </Typography>
//             <Typography variant="h4" sx={{ color: "black", mt: 3 }}>
//               <strong>Phản hồi:</strong> {lecture.feedback}
//             </Typography>
//           </div>
//         </CardContent>
//         </div>
//         <CardActions sx={{ justifyContent: "center" }}>
//           <Link to={`/`}>Quay lại</Link>
//         </CardActions>
//       </Card>
//     </div>
//   );
// };