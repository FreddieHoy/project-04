import React from 'react'


const About = () => {
  return(
    <section className="section about-background">
      <div className="container">
        <div className="box tableBorder">

          <h2 className="title is-3 has-white-text">About the Site</h2>
          <p>This site has been developed by Sian Alcock, Ejike Chiboka, Freddie Hoy and Prash Mohan as part of a learning module in General Assembly&lsquo;s Software Engineering Immersive Course using JavaScript and React. </p>

        </div>

        <div className="box tableBorder">

          <h2>About Developers</h2>
          <hr />

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
              <span className="notes">{<a href="https://github.com/FreddieHoy" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>}</span>
              <span className="notes">{<a href="https://www.linkedin.com/in/freddie-hoy-192807168/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a>}</span>
            </div>
          </div>
        </div>
        <div className="box tableBorder">
          <h2>Acknowledgements</h2>
          <hr />
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
      </div>

    </section>
  )
}

export default About
