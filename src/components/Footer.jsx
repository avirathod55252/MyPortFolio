import React from "react";
// import {india}from "../assets/india.png";
import india from "../assets/india.jpg";
import av from "../assets/ar.png";
import Pdf from "../assets/a.pdf";
import {
  AiFillContacts,
  AiFillFile,
  AiFillFileExcel,
  AiFillFilePdf,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={av} alt="Avinash" />

        <h2>Avinash Rathod </h2>
        <p>Made With 🧡 in India</p>
        <br />
      </div>

      <aside>
        <h2>You can Find Me EveryWhere </h2>

        <article>
          <a href="tel:+917620790495" target={"blank"}>
            <AiFillPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/avinash-rathod-55252avr/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:avinashrathod55252@gamil.c" target={"blank"}>
            <AiFillMail />
          </a>
          <a href="https://github.com/avirathod55252" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href={Pdf} target="_blank">
            <AiFillFilePdf />
          </a>
          <div></div>
        </article>
      </aside>
      <a href="#Home">
        <AiOutlineArrowUp />
      </a>

      {/* <section id="india">
      <img  src={india} alt="Avinash" />
      </section>
      */}

      <div>
        <p>
          No ©copyright issue <br /> Feel free to copy If you need any help,
          ping me !
        </p>
      </div>
    </footer>
  );
};

export default Footer;
