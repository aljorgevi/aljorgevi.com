import React from "react"
import styled from "styled-components"
import video from "../assets/videos/connect.mp4"
import poster from "../assets/images/project-1.jpeg"
import ContactForm from "./ContactForm"

const Connect = () => {
  return (
    <Container>
      <div className="connect">
        <video
          controls
          autoPlay
          muted
          loop
          className="video-container"
          poster={poster}
        >
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>

        <ContactForm />
      </div>
    </Container>
  )
}

const Container = styled.section`
  .connect {
    min-height: 40vh;
    position: relative;
    padding: 10rem 0;
    display: grid;
    place-items: center;
    -webkit-clip-path: polygon(
      50% 0%,
      100% 10%,
      100% 90%,
      50% 100%,
      0 90%,
      0 10%
    );
    clip-path: polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%);

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      /* background: rgba(0, 0, 0, 0.6); */
      opacity: 0.6;
      z-index: 1;
    }
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -2;
  }

  .video-text {
    max-width: 30rem;
    color: var(--grey-700);
  }
  .video-banner {
    background: var(--primary-100);
    padding: 3rem 4rem 12rem 4rem;
    margin-top: 4rem;
    text-align: center;
    z-index: 2;

    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
  .btn-contact {
    margin-bottom: 2rem;
  }
`

export default Connect
