import { StyledMessage} from './styled';

const Message = ({children, color}) => {
  return <StyledMessage color={color}>{children}</StyledMessage>
};

export default Message;
