import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Rings color="blue" height="180" width="180" />
    </LoaderWrapper>
  );
};

export default Loader;
