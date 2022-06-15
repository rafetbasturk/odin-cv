import React, { Component } from "react";
import { FaRegBuilding, FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

class Profile extends Component {

  render() {
    const { fname, lname, title, avatar, address, phone, email, about } = this.props.data
    return (
      <>
        <section className="profile">
          <div className="img-container">
            <img src={avatar} alt="avatar" />
          </div>
          <article className="contact">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="address">
                <FaRegBuilding />
                <p>{address}</p>
              </div>
              <div className="phone">
                <FaMobileAlt />
                <p>{phone}</p>
              </div>
              <div className="email">
                <FiMail />
                <p>{email}</p>
              </div>
            </div>
          </article>
          <article className="about">
            <h3>About Me</h3>
            <p>{about}</p>
          </article>
        </section>
        <section className="name-container">
            <div className="name">
              <span className="fname">{fname}</span>
              <span className="lname">{lname}</span>
            </div>
            <div className="title">{title}</div>
          </section>
      </>
    );
  }
}

export default Profile;