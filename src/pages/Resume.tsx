import "../assets/css/styles.css";
import ProfileImg from "../assets/images/_doge.png";
import { Button, Container, useColorModeValue } from "@chakra-ui/react";
import {
  FaCss3Alt,
  FaDrum,
  FaFilePdf,
  FaHeadphonesAlt,
  FaHtml5,
  FaJsSquare,
  FaKeyboard,
  FaLaptop,
  FaSteam,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaLanguage,
  FaPhone,
  FaAt,
  FaMapMarkedAlt,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { MotionDiv } from "../components/MotionDiv";

export const Resume = () => {
  return (
    <>
      <Container py={4} px={{ base: 4, md: 0 }} pt={20} maxW="4xl">
        <MotionDiv delay={0.1}>
          <main className="l-main bd-container">
            <div className="resume" id="area-cv">
              <div
                className="resume__left"
                style={{
                  backgroundColor: useColorModeValue("#f0efef", "#181616"),
                }}
              >
                {/* <!-- Home --> */}
                <section className="home" id="home">
                  <div className="home__container section bd-grid">
                    <div className="home__data bd-grid">
                      <img src={ProfileImg} alt="" className="home__img" />
                      <h1 className="home__title">
                        EMIGDIO <b>TORRES</b>
                      </h1>
                      <h3 className="home__profession">Software Engineer</h3>
                      <div>
                        <Button
                          as="a"
                          download=""
                          leftIcon={<FaFilePdf />}
                          href="assets/pdf/emigdio-resume.pdf"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="home__address bd-grid">
                      <span className="home__info">
                        <FaPhone className="home__icon" />
                        +52 (313) 961-7676
                      </span>
                      <span className="home__info">
                        <FaAt className="home__icon" />
                        emigdio821@gmail.com
                      </span>
                      <span className="home__info">
                        <FaMapMarkedAlt className="home__icon" />
                        Zapopan, Jalisco, Mexico
                      </span>
                    </div>
                  </div>
                  {/* <FaFilePdf
                className="generate-pdf"
                title="Download PDF"
                id="pdf-button"
              /> */}
                </section>

                {/* <!-- Social --> */}
                <section className="social section">
                  <h2 className="section-title">SOCIAL</h2>
                  <div className="social__container bd-grid">
                    <a
                      href="https://www.linkedin.com/in/emigdio821/"
                      target="_blank"
                      className="social__link"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className="social__icon" /> @emigdio821
                    </a>
                    <a
                      href="https://github.com/emigdio821/"
                      target="_blank"
                      className="social__link"
                      rel="noreferrer"
                    >
                      <FaGithubAlt className="social__icon" /> @emigdio821
                    </a>
                  </div>
                </section>

                {/* <!-- Profile --> */}
                <section className="profile section" id="profile">
                  <h2 className="section-title">Profile</h2>
                  <p className="profile__description description-spacing">
                    <b>Telematics Engineer</b> with experience in Software
                    Engineering using current programming standards.
                  </p>
                  <p className="profile__description">
                    Currently I am a Software Engineer at <b>Wizeline</b>. I
                    have no problem to adapt in new environments and
                    technologies.
                  </p>
                </section>

                {/* <!-- Education --> */}
                <section className="education section">
                  <h2 className="section-title">Education</h2>
                  <div className="education__container bd-grid">
                    <div className="education__content">
                      {/* <!-- <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div> --> */}
                      <div className="education__data bd-grid">
                        <h3 className="education__title">
                          Telematics Engineer
                        </h3>
                        <span className="education__studies">
                          Engineer’s Degree
                        </span>
                        <span className="education__studies">
                          University of Colima
                        </span>
                        <span className="education__year">2010 - 2014</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div
                className="resume__right"
                style={{
                  backgroundColor: useColorModeValue("#fafafa", "#212121"),
                }}
              >
                {/* <!-- Experience --> */}
                <section className="experience section">
                  <h2 className="section-title">Experience</h2>
                  <div className="experience__container bd-grid">
                    <div className="experience__content">
                      <div className="experience__time">
                        <span className="experience__rounder"></span>
                        <span className="experience__line"></span>
                      </div>
                      <div className="experience__data bd-grid">
                        <h3 className="experience__title">Web Developer</h3>
                        <span className="experience__company">
                          2014 to 2017 |{" "}
                          <span className="experience-company__font">
                            TATA Consultancy Services
                          </span>
                        </span>
                        <p className="experience__description">
                          Frontend work, using JavaScript under a framework
                          called: ExtJS. Development of banking web apps for
                          Morgan Stanley bank.
                        </p>
                      </div>
                    </div>
                    <div className="experience__content">
                      <div className="experience__time">
                        <span className="experience__rounder"></span>
                        <span className="experience__line"></span>
                      </div>
                      <div className="experience__data bd-grid">
                        <h3 className="experience__title">Software Engineer</h3>
                        <span className="experience__company">
                          2017 to 2019 |{" "}
                          <span className="experience-company__font">
                            Advanced Methods Co. (Amco)
                          </span>
                        </span>
                        <p className="experience__description">
                          Frontend work, using SASS, JQuery, Bootstrap.
                          Sometimes worked on Backend, using Ruby on Rails.
                          Development of Payments portal for an education
                          platform.
                        </p>
                      </div>
                    </div>
                    <div className="experience__content">
                      <div className="experience__time">
                        <span className="experience__rounder"></span>
                        <span className="experience__line"></span>
                      </div>
                      <div className="experience__data bd-grid">
                        <h3 className="experience__title">Software Engineer</h3>
                        <span className="experience__company">
                          2019 to 2021 |{" "}
                          <span className="experience-company__font">
                            HCL Technologies
                          </span>
                        </span>
                        <p className="experience__description">
                          Frontend work, using IBM JS Dojo toolkit, migrating to
                          ReactJS, Redux and MaterialUI. Development of an
                          application builder. Development of an application
                          builder
                        </p>
                      </div>
                    </div>
                    <div className="experience__content">
                      <div className="experience__time">
                        <span className="experience__rounder"></span>
                        {/* <!-- <span className="experience__line"></span> --> */}
                      </div>
                      <div className="experience__data bd-grid">
                        <h3 className="experience__title">Software Engineer</h3>
                        <span className="experience__company">
                          2021 to <i>present</i> |{" "}
                          <span className="experience-company__font">
                            Wizeline
                          </span>
                        </span>
                        <p className="experience__description">
                          Currently working with React.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <!-- Languages --> */}
                <section className="languages section" id="languages">
                  <h2 className="section-title">Languages</h2>
                  <div className="languages__container bd-grid">
                    <div className="languages__content">
                      <FaLanguage className="languages__icon" />
                      <span className="languages__name">Spanish</span>
                    </div>
                    <div className="languages__content">
                      <FaLanguage className="languages__icon" />
                      <span className="languages__name">English</span>
                    </div>
                  </div>
                </section>

                {/* <!-- Skills --> */}
                <section className="skills section">
                  <h2 className="section-title">Skills</h2>
                  <div className="skills__container bd-grid">
                    <div className="skills__content">
                      <FaCss3Alt className="skills__icon" />
                      <span className="skills__name">CSS</span>
                    </div>
                    <div className="skills__content">
                      <FaHtml5 className="skills__icon" />
                      <span className="skills__name">HTML</span>
                    </div>
                    <div className="skills__content">
                      <FaJsSquare className="skills__icon" />
                      <span className="skills__name">JS</span>
                    </div>
                    <div className="skills__content">
                      <FaGitAlt className="skills__icon" />
                      <span className="skills__name">Git</span>
                    </div>
                    <div className="skills__content">
                      <FaReact className="skills__icon" />
                      <span className="skills__name">React</span>
                    </div>
                    <div className="skills__content">
                      <FaNodeJs className="skills__icon" />
                      <span className="skills__name">Node</span>
                    </div>
                  </div>
                </section>

                {/* <!-- Hobbies --> */}
                <section className="hobbies section">
                  <h2 className="section-title">Hobbies & Interests</h2>
                  <div className="hobbies__container bd-grid">
                    <div className="hobbies__content">
                      <FaDrum className="hobbies__icon" />
                      <span className="hobbies__name">Drums</span>
                    </div>
                    <div className="hobbies__content">
                      <FaHeadphonesAlt className="hobbies__icon" />
                      <span className="hobbies__name">Music</span>
                    </div>
                    <div className="hobbies__content">
                      <FaSteam className="hobbies__icon" />
                      <span className="hobbies__name">Games</span>
                    </div>
                    <div className="hobbies__content">
                      <FaLaptop className="hobbies__icon" />
                      <span className="hobbies__name">Tech</span>
                    </div>
                    <div className="hobbies__content">
                      <FaKeyboard className="hobbies__icon" />
                      <span className="hobbies__name">Kboards</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </MotionDiv>
      </Container>
    </>
  );
};
