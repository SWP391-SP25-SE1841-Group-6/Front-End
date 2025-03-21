import logo from "../../assets/Images/logo.jpg";
export default function Footer() {

    return (
      <div >
             <footer className="page-footer " style={{ backgroundImage:"linear-gradient(to right,black,blue ) " }}>
        
          <div className="container">
        
            <div className="row">
       
              <div className="col l6 s12">
              <img src={logo} alt="logo" className="w-10 border rounded-3xl"/>
                <h5 className="white-text">School psychology </h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Introduce</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Program</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Lecturer</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">News</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container flex justify-center">
            © 2023 School Psychology Consulting Center
            </div>
          </div>
        </footer>
        </div>
    );
};

