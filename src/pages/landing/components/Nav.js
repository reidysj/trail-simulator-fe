import { Button, Divider } from "@chakra-ui/react";
import "../styles/nav.css";

export default function Nav() {
  return (
    <>
      <div class="buttons">
        <h1 class="title">Trail Simulator</h1>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
      <Divider />
    </>
  );
}
