import React from 'react';
import "./style.css";
// import Bo from "../Images/unamed.jpg";
// import { Col, Row, Container } from "../Grid";

function Middle() {
  return (
    <div>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
          {/* Begin Julies info */}
            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/11062735_1079024765442213_3180324841654794004_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-1.xx&oh=1efebd0586f2fbc7bba7c3e4e2988784&oe=5CFA29CB" width="140" height="140" background="#777" color="#777" class="rounded-circle" />
            <h2>Jubilee</h2>
            <h4>Team Lead Developer</h4>
            <p>An exciting, diverse, and winding road has led her to be the Team Lead and a Full-Stack web developer. She has worked as a National Park Ranger/firefighter, math teacher, event director, and operations manager. She is also an avid reader, and math geek. </p>

            <div>
              <a href="https://github.com/JAWilmer">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/juliewilmer/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>

              <a href="https://jawilmer.github.io/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z" />
                </svg>
              </a>
            </div>
            {/* End Julies
            Begin Bo */}
          </div>
          <div className="col-lg-4">
            <img src="https://media.licdn.com/dms/image/C4E03AQHE2s_3WsOIcA/profile-displayphoto-shrink_800_800/0?e=1554336000&v=beta&t=CUAujFFszwfftjb-0DhALjZBPk0atjy7wmQ_s1feK5Y" width="140" height="140" background="#777" color="#777" class="rounded-circle" />
            <h2>Boni The Bull</h2>
            <h4>Full-Stack Developer</h4>
            <p>Boni the Bull is Creative Director. He has a knack for creating simple, intuitive solutions for each project. With almost a decade of design, The Bull loves to help our partners see their creative vision come to life.</p>
            <div>
              <a href="https://www.linkedin.com/in/boni-rosales-63633a167/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>

              <a href="https://github.com/BoRosales">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>

              <a href="https://borosales.github.io/updatedProfile/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z" />
                </svg>
              </a>
            </div>
          </div>
          {/* End Bo
          Begin Jared */}
          <div className="col-lg-4">
            <img src="https://media.licdn.com/dms/image/C5603AQFf_RYr5PUATQ/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=yEieGqmKi66WRN3175R57hRN6710pDk_vgo6NwNXDZQ" width="140" height="140" background="#777" color="#777" class="rounded-circle" />
            <h2>JareBare</h2>
            <h4>Full-Stack Developer</h4>
            <p>JareBare is our founder and just getting started as a full-stack developer. He enjoys solving problems from all angles, collaborating in a community-minded area for a more lucrative strategy. When he's not practicing his new talents, you can find him... </p>
            <div>
              <a href="https://www.linkedin.com/in/jared-b-harris-b708b9b0/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>

              <a href="https://github.com/aexes3">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>

              <a href="https://aexes3.github.io/profile2/">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M6,3H18A2,2 0 0,1 20,5V19A2,2 0 0,1 18,21H6A2,2 0 0,1 4,19V5A2,2 0 0,1 6,3M6,5V17H18V5H6Z" />
                </svg>
              </a>
            </div>
            {/* End Jared */}
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            {/* <h2 className="featurette-heading"><span className="text-muted">It's. gonna. blow. your. mind.</span></h2> */}
            {/* <p className="lead">Trip Around V2.0 is a faster, smarter ReactJS version of the original Javascript app, TripAround. Both apps allow users to make informed choices about whether to fly or drive when making a trip. The application uses origin and destination data to calculate driving costs (based on 25 mpg and the national average gas price) for a road trip, then compares the driving cost to real-time airfare costs. If the travel route does not start or end close to an airport then no flight results will populate.</p> */}
          </div>
          <div className="col-md-5">
            {/* {% include icons/placeholder.svg width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto" %} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle;