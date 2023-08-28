import "./About.css";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://i.ibb.co/yhdfPt5/workspace.jpg"
              alt="its me again"
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me...</h1>
          <p className="a-sub">
            "It is a long established fact that a reader will be distracted by
            the readable content, Hahaha just kidding" :)
          </p>
          <p className="a-desc">
            A BCA (Bachelor of Computer Application) student who fallen love
            with technology especially{" "}
            <a
              className="react-link"
              href="https://reactjs.org/"
              target={"_blank"}
              rel="noreferrer"
              color="blue"
            >
              {" "}
              REACT js.
            </a>{" "}
            I am the kind of guy who loves to create something new and unique.
            hence because of this creativity in my blood (not in my blood maybe
            LMAO!), I built my new hobby recently (since march 2022) which is
            sketching and digital art. you can call digital sketching my
            second passion :)
          </p>

          <div className="a-award">
            {/* <img src={Award} alt="" className="a-award-img" /> */}
            {/* <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
