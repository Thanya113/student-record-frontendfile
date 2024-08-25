import React from 'react';
import './Hom.css';
import './Home.css'; //footer css
import Notice from './Notice.js';
import Placement from './Placement';
import Footer from './Footer';

const Hom = () => {
  return (
    <>
      <div id="home" className="hero-area">
        {/* Background Image */}
        <div className="bg-image bg-parallax overlay" style={{ backgroundImage: `url("https://w0.peakpx.com/wallpaper/491/893/HD-wallpaper-purple-digital-globe-purple-digital-background-global-networks-dots-globe-silhouette-digital-technology-purple-technology-background.jpg")` }}></div>
        {/* /Background Image */}

        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="white-text">SNT ENGINEERING COLLEGE</h1>
                <p className="lead white-text">DEPARTMENT OF INFORMATION TECHNOLOGY</p>
                <p className="lead white-text">Faculty Details, Student Details, Results etc.,</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Home */}
      
      {/* About */}
      <div id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-header">
                <h2>Department Of Information Technology</h2>
                <p className="lead">Get Details of Faculties, Students and Results @ your fingertips</p>
              </div>
              {/* Feature */}
              <div className="feature">
                <i className="feature-icon fa fa-user-cog"></i>
                <div className="feature-content">
                  <a href="/Admin"><h4>Admin </h4></a>
                  <p>Click to view the faculties & students details in the college.</p>
                </div>
              </div>
              {/* /Feature */}
              {/* Feature */}
              <div className="feature">
                <i className="feature-icon fa fa-chalkboard-teacher"></i>
                <div className="feature-content">
                  <a href="/Faculty"><h4>Faculty</h4></a>
                  <p>Click to view the info about result and syllabus of the students.</p>
                </div>
              </div>
              {/* /Feature */}
              {/* Feature */}
              <div className="feature">
                <i className="feature-icon fas fa-user-graduate"></i>
                <div className="feature-content">
                  <a href="/Student"><h4>Students</h4></a>
                  <p>Click to view the results and personal details.</p>
                </div>
              </div>
              {/* /Feature */}
            </div>
            <div className="col-md-6">
              <div className="about-img">
                <img src="
https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_960_720.jpg
" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     <Notice />
     <br/>
     <Placement />
     <br />
     <Footer />

   
    </>
  );
};

export default Hom;
