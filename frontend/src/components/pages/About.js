import React from 'react'
import WomanChopping from '../assets/WomanChopping.jpg'
import CookBook from '../assets/CookBook.jpg'

const About = () => {
  return(
    <section className="section about-background">
      <div className="container">
        <div className="box">
          <h2 className="title is-3 has-text-centered has-white-text">What we do!</h2>
          <hr />
          <div className="columns">
            <div className="column">
              <p>This site is for all those foodies out there. Who are passionate about cooking! A place to share dishes, recipes, ideas, cuisines and goodtimes! <br /> <br />Share what you have made for dinner, for family sunday lunch, for your post work out gains or for your midnight guilty indulgence! Comment on others posts, see their recepies and enjoy! <br /> <br /> Many of our users use this site as a way release stress. Here at YesChef we value how our customers feel and have optimised the site for joy! Others use this site to discover a new passion! Sharing cooking with friends and family is a very joyful process and so we encorage it! 😁</p>
              <hr />
              <img src={CookBook} alt='Cook Book' />
            </div>
            <div className="column">
              <img src={WomanChopping} alt='Woman Chopping' />
            </div>
          </div>

        </div>
        <div className="box">
          <h2 className="subtitle is-3 has-white-text">About the Site</h2>
          <hr />
          <div className="columns">
            <div className="column">
              <h2 className="subtitle is-5 has-white-text">Developer</h2>
              <p>This site has been developed by Freddie Hoy, as part of the General Assembly Software Engineering Immersive Course.
                <br />
                <br />
              JavaScript & React was used for the front end. Python & Django was used for the backend. </p>
              <hr />
              <h2>Acknowledgements:</h2>
              <br />
              <ul>Background images - Unsplash artists:
                <li>• Home page - Kitchen - Mikael Cho</li>
                <li>• About page - Woman Chopping - Facundo Ruiz</li>
                <li>• About page - Cook Book - S O C I A L . C U T </li>
              </ul>
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
