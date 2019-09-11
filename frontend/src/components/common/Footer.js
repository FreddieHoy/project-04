import React from 'react'

class Footer extends React.Component {
  render(){
    return(
      <footer>
        <div className="has-text-centered is-half">
          <br />
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.yesChef.com" className="fab fa-3x fa-twitter-square"></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.yesChef.com" className="fab fa-3x fa-facebook-square"></a>
          </div>
          <p className="copyright"> © 2019. All rights reserved </p>
          <ul className="columns ">
            <li className="column"> Privacy Policy </li>
            <li className="column">Cookie Policy </li>
            <li className="column"> Terms and Conditions </li>
            <li className="column"> Contact us </li>
            <li className="column"> Careers </li>
            <li className="column"> Advertise </li>
            <li className="column"> Events </li>
          </ul>
          <div className="copyright"> This website uses cookies. By using this website, you agree we can set and use cookies </div>
          <br />
        </div>
      </footer>
    )
  }
}
export default Footer
