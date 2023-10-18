import { Button, Container } from "@chakra-ui/react";
import image from "../img/ScreenShotStandIn.png";
import "../styles/info.css";

export default function Info() {
  return (
    <>
      <Container maxW="100%" className="info">
        <div className="cta">Blah blah blah</div>
        <img
          src={image}
          alt="Application Screen Shot"
          className="appScreenShot"
        />
        <div className="ctaButtons">
          <Button width="20%">Log In</Button>
          <Button width="20%">Sign Up</Button>
        </div>
      </Container>
    </>
  );
}
