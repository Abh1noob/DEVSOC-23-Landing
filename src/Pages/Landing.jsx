import React from "react";
import JoshTalks from "../Assets/Josh_Talk_Logo.png";
import astronaut from "../Assets/Astronaut.png";
import Brilliant from "../Assets/Brilliant Printers.png";
import Top from "../Assets/Top One Percent Logo.png";
import discord from "../Assets/discord.png";
import FAQimg from "../Assets/FAQ.svg";
import logo from "../Assets/logo.png";
import rocket from "../Assets/rocket.svg";
import StickerMule from "../Assets/Stickermule.png";
import titlecards from "../Assets/Title.png";
import Uizard from "../Assets/Uizard.png";
import uniswap from "../Assets/Uniswap.png";
import FAQ from "../Components/FAQ/faq";
import Footer from "../Components/Footer/Footer";
import Navbar2 from "../Components/Navbar2/Navbar2";
import "./Landing.css";

export default function Landing() {
  const accordionData = [
    {
      title: "Is the hackathon free to attend?",
      content: `Yes! DEVSOC'23 is completely free to attend thanks to our sponsors.`,
    },
    {
      title: "What's the application process like?",
      content: `You're required to register for our event on our DEVSOC registrations portal where you will be asked for basic details and for your github profile (if applicable). You're also required to register on VTOP under the "Event Registration" tab. Also join the discord link on the bottom right of this website. You can simply search "DEVSOC" in the search tab and register for the same.
      
      \nAfter registration you will be required to submit a document outlining the idea your team will be pursuing during the hackathon. Following the idea submission you will be eligible to attend the hackathon itself.`,
    },
    {
      title: "I don't have much experience with coding or tech events. Should I still participate?",
      content: `We will be evaluating everyone based on different metrics. We'll take into account if you're a fresher and where you stand amongst your peers. If you don't have anything technical to add to your resume, feel free to add any public speaking events or other competitions you've been to. Basically, if you're interested in coding or tech events, you're more than welcome to participate!`,
    },
    {
      title: "How many team members do I need to have?",
      content: `This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills.`,
    },
    {
      title: "Have any more queries?",
      content: `If you have any further doubts, feel free to ask your doubts on our Discord server (icon on the bottom right).`,
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <a href="http://discord.codechefvit.com/" target="_blank" rel="noreferrer">
        <div class="side-fixed-btn hover-change">
          <img src={discord} alt="" />
        </div>
      </a>

      <section className="hero">
        <div style={{ zIndex: 15 }}>
          {/* <Navbar /> */}
          <Navbar2 />
        </div>
        <section className="showcase">
          <div className="dev-container">
            <img className="logo" src={logo}></img>
            <div>
              <h1 className="heading1">
                DEVSOC <span style={{ color: "#37ABBC" }}>‘23</span>
              </h1>
              <a href="https://devsoc23.codechefvit.com/signup" target="_blank" rel="noreferrer" style={{ color: "white" }} className="button">
               Register Now
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="features" id="about">
        <div
          className="container1"
          style={{
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head">About Us</h1>
            <p className="about-text">
              DEVSOC is CodeChef-VIT’s annual flagship event hoping to empower
              young minds by bringing enthusiastic technocrats and thinkers
              under one roof. This year, the second iteration of the hackathon
              is being held with a goal to create a sprint like event, where
              participants create, hack, innovate to solve problems while
              adhering to the spirit of creativity and teamwork. The event is
              spread over three days, with the hackathon lasting 48 hours
              consisting of amazing swags, prizes, food and drinks!
            </p>
          </div>
          <img className="logo1" src={astronaut} alt=""></img>
        </div>
      </section>

      {/* <section className="timeline-features" id="timeline">
        <img className="timeline" src={timeline}></img>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head">Timeline</h1>

            <img className="logo2" src={timeline1}></img>
            <Timeline />
          </div>
        </div>
      </section> */}
      <section className="faq-features" id="faq">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h1 className="about-head2" style={{ display: "flex" }}>
              FAQ
              <img className="logo3" src={FAQimg} alt=""></img>
            </h1>

            <div className="accordion" style={{ marginTop: "-25%" }}>
              {accordionData.map(({ title, content },index) => (
                <FAQ index={index} title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="spon-features" id="sponsors">
          <div>
            <h1 className="about-hea">Sponsors</h1>
            <h1 className="about-head1">Title</h1>
            <a href="https://www.amantyatech.com/" target="_blank" rel="noreferrer">
              <img className="titlelogo" src={titlecards} alt="">

              </img>
            </a>
           
            <h1 className="about-head1">Bronze</h1>
            <a href="https://www.joshtalks.com/" target="_blank" rel="noreferrer">
              <img className="platinumlogo" src={JoshTalks} alt=""></img>
            </a>
            <a href="https://www.brilliantprinters.com/" target="_blank" rel="noreferrer">
              <img className="brilliantlogo" src={Brilliant} alt=""></img>
            </a>
            <h1 className="about-head1">Education Partner</h1>
            <a href="https://www.top-one-percent.com/" target="_blank" rel="noreferrer">
              <img className="brilliantlogo" src={Top} alt=""></img>
            </a>

          </div>
        <img className="logo6" src={rocket} alt=""></img>
      </section>
   <section className="footer" id="contact">
        <Footer />
      </section> 
    </>
  );
}
