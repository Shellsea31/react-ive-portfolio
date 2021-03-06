import React from "react";

const About = () => {
  const style = { margin: "25px" };
  const imgStyle = { height: "300px", width: "300px", margin: "20px" };
  return (
    <div className="container">
      <div style={style} className="row">
        <div className="col-sm-12">
          <img
            style={imgStyle}
            className="float-start"
            id="image"
            src="https://avatars.githubusercontent.com/u/70654835?s=460&u=aea06b3c752ee1ecf1b49ee0f91df119208fa516&v=4"
            alt="PictureShelsy"
          />

          <p>
            Hi! My name is Shelsy Barrera and I'm a 21 year old student from San
            Jose, CA. On this site you'll find examples of some of my best work
            since I've started the Berkley Coding Bootcamp. This program has
            definitely challenged me, and I've learned a lot about self
            discipline and determination. I've accomplished tasks in time I
            never thought possible.
          </p>

          <p>
            Straight out of highschool, I studied Medical Assisting for two
            years and quickly realized it wasn't my career of choice. I
            graduated nonetheless and began a part time job. When I found an
            opportunity to study Web Development, I was very excited because it
            is a topic that has always intrigued me. I'm thankful for this
            opportunity and I will strive to absorb as much as I can. Click
            "Projects" up top to see what I'm all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
