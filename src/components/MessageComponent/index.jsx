import P from 'prop-types';
import * as Styled from './styles';

export const MessageComponent = ({ text }) => {
  return (
    <Styled.Container>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
};

MessageComponent.propTypes = {
  text: P.string.isRequired,
};
