import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { PawPrint } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
  Styled404,
  Styled404TextWrapper,
  Styled404Image,
  Styled404Header,
  Styled404SmallHeader,
  Styled404Text,
} from "./styled";
import cat from '../../images/cat.png';

const Page404 = () => {
  const theme = useTheme();

  return (
    <Styled404>
      <Styled404Image alt="cat" src={cat} />
      <Styled404TextWrapper>
        <Styled404Header>404</Styled404Header>
        <Styled404SmallHeader>Page not found</Styled404SmallHeader>
        <Styled404Text>Probably it's not you are searching for :)</Styled404Text>
        <PawPrint size={28} weight="duotone" />
        <Button
          color={theme.incomeColors[2]}
          as={Link}
          primary='true'
          style={{marginTop: '2rem'}}
          to='/'
        >
          Go home
        </Button>
      </Styled404TextWrapper>
    </Styled404>
  );
};

export default Page404;
