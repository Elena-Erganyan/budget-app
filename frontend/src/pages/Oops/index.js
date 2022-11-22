import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import { StyledOops, StyledOopsText } from "./styled";
import cat from '../../images/cat.png';

const Oops = () => {
  const theme = useTheme();

  return (
    <StyledOops>
      <img alt="cat" src={cat} />
      <StyledOopsText>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Probably it's not you are searching for</p>
      <Button color={theme.incomeColors[2]} as={Link} primary to='/'>Go home</Button>
      </StyledOopsText>
    </StyledOops>
  );
};

export default Oops;
