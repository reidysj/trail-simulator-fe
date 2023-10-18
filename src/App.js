import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./pages/landing/components/Nav";
import Info from "./pages/landing/components/Info";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Info />
    </ChakraProvider>
  );
}

export default App;
