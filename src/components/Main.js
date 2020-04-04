import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/bg3.png'
import casting from '../images/projects/casting.png'
import chair from '../images/projects/chair.png'
import wardrobe from '../images/projects/wardrobe.png'
import buildbay from '../images/projects/buildbay.png'
import desk from '../images/projects/desk.png'
import lampshade from '../images/projects/lampshade.png'
import Header from "./Header";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
       );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
          <article
              id="intro"
              className={`${this.props.article === 'intro' ? 'active' : ''} ${
                  this.props.articleTimeout ? 'timeout' : ''
                  }`}
              style={{ display: 'none' }}
          >
              <h2 className="major">About Me</h2>
              <span className="image main">
                  <img src={pic01} alt="" />
              </span>
              <p>
                  I am very committed and hardworking
                  final year student in Product Design.
                  Through a range of professional experiences, I have developed my confidence in the working environment
                  and believe I am an effective communicator. I relish the challenge of a
                  difficult task being presented to me.
                  others along the way.
                  I will always give my all to complete it to the best of my abilities,
                  welcoming opportunities to enhance
                  my skillset and gain knowledge from
                  others along the way.
              </p>
            {close}
          </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={casting} alt="" />
          </span>
          <p>
            Rory McIlroy had inspired me, as he is a famous and international
            sportsman from Northern Ireland. I finally decided on making a door handle,
            which incorporated the golf balls into this design. As I design the door handle
            and created it, I ensured that it was going to have a strong connection with golf.
          </p>

          <span className="image main">
            <img src={chair} alt="" />
          </span>
          <p>
            The reason I was inspired to design and build a rocking chair was because I liked
            the thought of doing a traditional piece of furniture. My main goal was to modernise
            the method of building a rocking chair by using the process of CNC. As a result, I would
            be able to mass produce the chair.
          </p>



          <span className="image main">
            <img src={buildbay} alt="" />
          </span>
          <p>
            The strong, sturdy, compact workbench
          </p>

          <span className="image main">
            <img src={lampshade} alt="" />
          </span>
          <p>
            The lampshade project brief told us that the shade had to be made out of polypropylene plastic
            and it had to have a manual included so the lamp could be assembled.
          </p>

          <span className="image main">
            <img src={desk} alt="" />
          </span>
          <p>
            A concept design of a desk designed on solidworks
          </p>

          <span className="image main">
            <img src={wardrobe} alt="" />
          </span>
          <p>
            I made the wardrobe for my Leaving Cert project which was made for my room which has a
            sloped roof.
          </p>
          {close}
        </article>

        {/*<article*/}
          {/*id="about"*/}
          {/*className={`${this.props.article === 'about' ? 'active' : ''} ${*/}
            {/*this.props.articleTimeout ? 'timeout' : ''*/}
          {/*}`}*/}
          {/*style={{ display: 'none' }}*/}
        {/*>*/}
          {/*<h2 className="major">About</h2>*/}
          {/*<span className="image main">*/}
            {/*/!*<img src={pic03} alt="" />*!/*/}
          {/*</span>*/}
          {/*<p>*/}
            {/*Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent*/}
            {/*eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam*/}
            {/*erat volutpat. Praesent urna nisi, fringila lorem et vehicula*/}
            {/*lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.*/}
            {/*Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.*/}
            {/*Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit*/}
            {/*amet.*/}
          {/*</p>*/}
          {/*{close}*/}
        {/*</article>*/}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};
export default Main
