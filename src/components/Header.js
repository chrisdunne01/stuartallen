import PropTypes from 'prop-types'
import React from 'react'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-pencil"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Stuart Allen</h1>
        <p>
          A Final Year Student currently studying BA Product Design at Ulster University Belfast
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')

            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
      <div className="test">
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/stuart-allen-a35b2219a/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
          </ul>
      </div>

  </header>

);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header
