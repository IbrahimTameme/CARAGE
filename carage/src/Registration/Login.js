import React,{Component} from 'react';


class RegisterForm extends Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          fields["confirmPassword"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
      if(fields["confirmPassword"] != fields["password"]){
        errors["confirmPassword"] = "Not match with password";
      }
      

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
//     <div id="main-registration-container">
//      <div id="register">
//         <h3>Registration page</h3>
//         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
//         <label>Name</label>
//         <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.username}</div>
//         <label>Email ID:</label>
//         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
//         <div className="errorMsg">{this.state.errors.emailid}</div>
//         <label>Mobile No:</label>
//         <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
//         <div className="errorMsg">{this.state.errors.mobileno}</div>
//         <label>Password</label>
//         <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
//         <div className="errorMsg">{this.state.errors.password}</div>
//         <input type="submit" className="button"  value="Register"/>
//         </form>
//     </div>
// </div>

<>
  <meta charSet="utf-8" />
  <title>AutoWash - Car Wash Website Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free Website Template" name="keywords" />
  <meta content="Free Website Template" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* CSS Libraries */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="./CSS.css" rel="stylesheet" />
  {/* Top Bar Start */}
  <div className="top-bar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="logo">
            <a href="index.html">
              <h1>
                Auto<span>Wash</span>
              </h1>
              {/* <img src="img/logo.jpg" alt="Logo"> */}
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-7 d-none d-lg-block">
          <div className="row">
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="far fa-clock" />
                </div>
                <div className="top-bar-text">
                  <h3>Opening Hour</h3>
                  <p>Mon - Fri, 8:00 - 9:00</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="fa fa-phone-alt" />
                </div>
                <div className="top-bar-text">
                  <h3>Call Us</h3>
                  <p>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-bar-item">
                <div className="top-bar-icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="top-bar-text">
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Top Bar End */}
  {/* Nav Bar Start */}
  <div className="nav-bar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="#" className="navbar-brand">
          MENU
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto">
            <a href="index.html" className="nav-item nav-link">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="price.html" className="nav-item nav-link">
              Price
            </a>
            <a href="location.html" className="nav-item nav-link">
              Washing Points
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="single.html" className="dropdown-item">
                  Detail Page
                </a>
                <a href="team.html" className="dropdown-item">
                  Team Member
                </a>
                <a href="booking.html" className="dropdown-item">
                  Schedule Booking
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link active">
              Contact
            </a>
          </div>
          <div className="ml-auto">
            <a className="btn btn-custom" href="#">
              Get Appointment
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Nav Bar End */}
  {/* Page Header Start */}
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="contact">
    <div className="container">
      <div className="section-header text-center">
        <h2>Registration</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-form">
            <div id="success" />
            <form  method="post" name="userRegistrationForm" id="contactForm" noValidate="novalidate" onSubmit= {this.submituserRegistrationForm} >
             
              <div className="control-group">
                <label htmlFor="">Your Email</label>
                <input
                  type="email"
                  name="emailid"
                  value={this.state.fields.emailid}
                  onChange={this.handleChange}
                  id="email"
                  placeholder=""
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <div className="errorMsg">{this.state.errors.emailid}</div>
                <p className="help-block text-danger" />
              </div>
              
              
              <div className="control-group">
                <label htmlFor="">password</label>
                <input
                  type="text"
                  name="password"
                  value={this.state.fields.password}
                   onChange={this.handleChange}
                  className="form-control"
                  id="password"
                  placeholder=""
                  required="required"
                  data-validation-required-message="Please enter a password"
                />
                <p className="help-block text-danger" />
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>
              
              <div>
                <button name="btn btn-custom" type="submit" id="submit" className="button" value="Register">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-12">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-contact">
            <h2>Get In Touch</h2>
            <p>
              <i className="fa fa-map-marker-alt" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope" />
              info@example.com
            </p>
            <div className="footer-social">
              <a className="btn" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn" href="">
                <i className="fab fa-youtube" />
              </a>
              <a className="btn" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="btn" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h2>Popular Links</h2>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Our Service</a>
            <a href="">Service Points</a>
            <a href="">Pricing Plan</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h2>Useful Links</h2>
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FQAs</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <form>
              <input className="form-control" placeholder="Full Name" />
              <input className="form-control" placeholder="Email" />
              <button className="btn btn-custom">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container copyright">
      <p>
        © <a href="#">Your Site Name</a>, All Right Reserved. Designed By{" "}
        <a href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to top button */}
  <a href="#" className="back-to-top">
    <i className="fa fa-chevron-up" />
  </a>
  {/* Pre Loader */}
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>

      );
  }


}


export default RegisterForm;



 



