import { Circles } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <Circles color="red" />
    </StyledLoaderWrapper>
  );
};
