import logo from '../../assets/images/logofinal.png';

const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer"
        style={{
          backgroundImage: "linear-gradient(to right, #006699	,#68a5e5	)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
             <img 
                src={logo} 
                alt="School Psychology Logo" 
                className="w-22 h-22 object-contain rounded-full " // Reduced from w-26 h-26
              />
              <h5 className="white-text">School Psychology Treatment</h5>
              <p className="grey-text text-lighten-4">
                We provide counseling services and psychological support for students,
                helping to build a healthy learning environment and comprehensive
                development.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">About Us</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Programs
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Lecturers
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    News
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container flex justify-center">
            © 2023 School Psychology Counseling Center
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
