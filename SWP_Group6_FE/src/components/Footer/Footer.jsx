const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer"
        style={{
          backgroundImage: "linear-gradient(to right,#006699	,#b24052)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <img
                src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-modern-vector-logo-of-psychology-letter-psi-in-creative-style-png-image_4850550.png"
                alt="logo"
                className="w-30 border rounded-3xl"
              />
              <h5 className="white-text">Điều trị tâm lý học đường</h5>
              <p className="grey-text text-lighten-4">
                Chúng tôi cung cấp các dịch vụ tư vấn và hỗ trợ tâm lý cho học
                sinh, giúp xây dựng môi trường học tập lành mạnh và phát triển
                toàn diện.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Giới thiệu</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Chương trình
                  </a>
                </li>
               
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Blog chia sẻ
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Lỉnh vực hoạt động
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                  DỊCH VỤ HỖ TRỢ TÂM LÍ

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container flex justify-center">
            © 2023 Trung tâm Tư vấn Tâm lý học đường
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
