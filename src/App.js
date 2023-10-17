import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./pages/landing/components/Nav";

function App() {
  return (
    <ChakraProvider>
      <Nav></Nav>
    </ChakraProvider>
  );
}

export default App;
