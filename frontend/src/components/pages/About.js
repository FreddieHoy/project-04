import React from 'react'
// import gitHubIcon from '../assets/github-icon.png'
// import linkedinIcon from '../assets/linkedin-icon.png'

const About = () => {
  return(
    <section className="section about-background">
      <div className="container">
        <div className="box">
          <h2 className="subtitle is-3 has-text-centered has-white-text">What we do!</h2>
          <p>This site is for all those foodies out there. Who are passionate about cooking! A place to share dishes, recipes, ideas, cuisines and goodtimes!
            <br />
            <br />

          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>



        <div className="box">
          <div className="">
            <h2 className="title is-3 has-white-text">About the Site</h2>

          </div>
          <hr />
          <div className="columns">
            <div className="column">
              <p>This site has been developed by Freddie Hoy, as part of the General Assembly Software Engineering Immersive Course.
                <br />
                <br />
              JavaScript & React was used for the front end. Python & Django was used for the backend. </p>
              <hr />
              <h2>Acknowledgements:</h2>
              <br />
              <ul>Background images - Unsplash artists:
                <li>• Organic carrots - Harshal S. Hirve</li>
                <li>• Plant box - Markus Spiske</li>
                <li>• Tomatos, Onions & Potatos - Lars Blankers</li>
                <li>• Market Greens - Lou Liebau</li>
                <li>• Apples - Akshay Nanavati</li>
              </ul>
              <p>Icons made by smalllikeart from www.flaticon.com</p>
              <p>Smiling Carrot from www.vegetableislands.com</p>
            </div>
            <div className="column">



              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">Freddie Hoy</div>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img src={'https://i.imgur.com/mObm02y.jpg'} alt='Freddie Hoy'/>
                  </figure>
                </div>
                <div className="card-content">
                  <span className="notes"><a href="https://github.com/FreddieHoy" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a></span>
                  <span className="notes"><a href="https://www.linkedin.com/in/freddie-hoy-192807168/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
