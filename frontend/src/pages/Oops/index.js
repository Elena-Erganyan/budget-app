import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import { StyledOops, StyledOopsText } from "./styled";

const Oops = () => {
  const theme = useTheme();

  return (
    <StyledOops>
      <StyledOopsText>
        <h1>Oops</h1>
        <p>This page doesn't exist</p>
        <Button color={theme.incomeAccentColor} as={Link} primary to='/'>Go home</Button>
      </StyledOopsText>
    </StyledOops>
  );
};

export default Oops;
