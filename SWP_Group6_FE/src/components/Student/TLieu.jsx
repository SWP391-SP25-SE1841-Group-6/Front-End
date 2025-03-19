import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Footer from "../Footer/Footer";


const Tlieu = () => {
  return (
    <>
      <div className=" w-[90%] m-10 p-20 border-2 rounded-2xl">
        <div className="text-start text-3xl underline  mb-5">
          Tài Liệu Hỗ Trợ & Tư Vấn Tâm Lý Học Đường
        </div>

        <div className="mr-auto  ">
          <p className="text-5xl m-5">Tư vấn tâm lý học đường là gì</p>
          <span className="text-4xl ml-20 0">
            -Tư vấn tâm lý học đường là gì?Tư vấn học đường cũng giống với hình
            thức tư vấn tâm lý bình thường, tuy nhiênphạm vi hoạt động sẽ được
            thu hẹp lại trong trường học. Đây là một hoạt động hữuích dựa trên
            các cơ sở lý thuyết để có thể giúp cho học sinh có định hướng
            đúngđắn hơn về những vấn đề riêng tư, xã hội hoặc giúp xác định cụ
            thể về nghề nghiệpcủa bản thân trong tương lai.Hoạt động này không
            chỉ hỗ trợ tốt cho tâm lý của học sinh mà còn giúp ích rấtnhiều cho
            giáo viên, cán bộ nhà trường, phụ huynh học sinh nhằm nâng cao
            khảnăng tự giải quyết các vấn đề có liên quan đến học đường cũng như
            các mối quanhệ giữa họ với học sinh. Hiện nay, ngoài việc giúp cho
            các học viên có được địnhhướng tốt thì tư vấn học đường còn mở rộng
            thêm nhiều khía cạnh khác nhau.Thông qua các buổi tư vấn học đường,
            học viên có thể biết thêm nhiều kỹ năngnhư bệnh vực, biện hộ, định
            hướng tương lai, cải thiện tốt việc học tập, nâng caothành tích cá
            nhân,…Thực tế thì tư vấn học đường đã có từ rất lâu nhưng khoảng10
            năm trở lại đây mới phổ biến và được quan tâm nhiều tại nước ta.Tại
            Việt Nam, tư vấn học đường được chia thành 3 phần chính, đó là tư
            vấn tâm lý,tư vấn hướng nghiệp và tư vấn học đường căn bản. Các đối
            tượng chính màphương pháp này nhắm đến là học sinh, phụ huynh học
            sinh, giáo viên các cấp,nhân viên văn phòng, cán bộ công chức, viên
            chức hoặc những cá nhân có niềmđam mê đối với công tác cộng đồng và
            công tác giáo dục
          </span>

          <p className="text-5xl mt-10">
            Nhiệm vụ của tư vấn học đường là gì?{" "}
          </p>
          <span className="text-4xl ml-20  ">
            -Nhiệm vụ chính của tư vấn học đường chính là giúp cho học sinh có
            thể tháo gỡ được những khó khăn, vướng của bản thân trong học tập
            hoặc trong cuộc sống hàng ngày. Từ đó giảm áp lực, sự căng thẳng,
            mệt mỏi để sống tích cực, vui vẻ và có ích hơn mỗi ngày. Không những
            vậy, tư vấn học đường còn là một phương thức kéo mối quan hệ thầy –
            trò,bố mẹ – con cái, bạn bè – bạn bè lại gần với nhau hơn. Đặc biệt
            nó cũng chính là cách thức để nắm bắt tâm lý của trả và sớm có những
            biện pháp can thiệp kịp thời. Từ đó giúp trẻ phát triển bình thường
            và đúng với chuẩn mực đạo đức xã hội
          </span>

          <p className="text-5xl mt-10">Tư vấn học đường có vai trò gì?</p>
          <span className="text-4xl ml-20 ">
            -Đối với cá nhân học sinh: Tư vấn học đường sẽ giúp các bạn được
            chia sẻ giúp bạn tự chỉhơn trong việc định hướng học tập và nghề
            nghiệp cho bản thân. Đặc biệt sẽ giảm tỷ lệ trẻ bị stress vì học tập
            dẫn đến tự tử ở lứa tuổi tâm sinh lý có nhiều thay đổi này. Đồng
            thời các bạn học sinh cũng hình thành được thái độ tích cực và sống
            chan hoà hơn với mọi người xung quanh. Đối với phụ huynh: Tư vấn học
            đường rất quan trọng, phụ huynh cần có sự kết hợp với giáo viên chủ
            nhiệm khi trẻ có những biểu hiện bất thường về hành vi và tâm lý.
            Làm bạnvới con để lắng nghe điều chúng muốn và chia sẻ để định hướng
            con đường đúng đắn là điều mà các bậc cha mẹ cần thực hiện. Nghe và
            giúp con tìm giải pháp giải quyết vấn đề là bí quyết giúp trẻ vượt
            qua được vấn đề khó khăn trong học tập, định hướng nghề nghiệp tương
            lai để không mắc phải các bệnh tâm lý
          </span>
        </div>

        {/* Video hỗ trợ */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 ">Video Hướng Dẫn</h3>
          <div className=" grid-cols-1 grid-rows-2 gap-4 flex justify-center">
            <iframe
              className="w-200 h-150"
              src="https://www.youtube.com/embed/Danh_rpgkj4"
              title="Hướng dẫn giảm căng thẳng"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-200 h-150"
              src="https://www.youtube.com/embed/rJoKbtOJQwQ"
              title="Kỹ năng giao tiếp xã hội"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Stack spacing={3} className="flex text-2xl pl-1 justify-center mt-8 text-center w-80 m-auto ">
          <Pagination
            count={5}
            shape="rounded"
            sx={{ bgcolor: "white", color: "white",textAlign:"center" }}
          />
        </Stack>

      
      </div>
      <div className="m-2 w-full">
          <Footer />
        </div>
    </>
  );
};

export default Tlieu;
