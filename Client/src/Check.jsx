import {Button, color, useColorMode} from "@chakra-ui/react";
import {MoonIcon, Icon, SunIcon} from "@chakra-ui/icons";
import {useContext} from "react";
import {AppContext} from "./Components/AppContext/AppContext";
function Examplerh() {
  const {colorMode, toggleColorMode} = useColorMode();
  const {setColored} = useContext(AppContext);
  setColored(colorMode);
  return (
    <header>
      <Button mr={3} bg={"transparent"} onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
      </Button>
    </header>
  );
}
export default Examplerh;
