import React from 'react';
//import '../social_icons/style.css';
import {
 Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <div className="social-icons">
           <Row>
            <Col>
              <a href="https://www.facebook.com/smit.modi.587/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="fb fa-2x" icon={faFacebook} />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/sjmodi1997" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="git fa-2x" icon={faGithub} />
              </a>
            </Col>
            <Col>
              <a href="https://www.instagram.com/sjmodi3344/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="insta fa-2x" icon={faInstagram} />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/smit-modi-1780ba166/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="linkedin fa-2x" icon={faLinkedin} />
              </a>
            </Col>
          </Row>
         </div>
  );
}

export default SocialIcons;