import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
// import { HiChatBubbleBottomCenter } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help you by providing the best services for you.
            We believe a good <br /> place to live at can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+2 011 4577 6860</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Now</span>
                    <span className="secondaryText">FaceBook</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.facebook.com/muhammed.ash.184">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
            {/* third row and fourth */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Now</span>
                    <span className="secondaryText">Linkiden</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://www.linkedin.com/in/mohamed-ghareb-447112253/">
                    Chat Now
                  </a>
                </div>
              </div>

              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Now</span>
                    <span className="secondaryText">Email</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmllmkmTpCWmvTMfZNjBGJVWVtJZHBMdklWPlKbBnjvJkRfkTNFQtgBJvcgTHHDqXvcWpn">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
