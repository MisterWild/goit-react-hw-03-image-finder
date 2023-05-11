import PropTypes from 'prop-types';
import { StyledButton, StyledButtonWrapper } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={onClick} type="button">
        Load More
      </StyledButton>
    </StyledButtonWrapper>
  );
};

StyledButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
