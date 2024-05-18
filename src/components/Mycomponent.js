import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const StyledComponent = styled.div`
  /* Базовые стили компонента */
  color: blue;
  font-size: 16px;

  
`;

const MyComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' });
  const isMobile1 = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <StyledComponent style={{
      color: isMobile ? 'red' : (isMobile1 ? 'blue' : 'green'),
      fontSize: isMobile ? '12px' : (isMobile1 ? '16px' : '20px'),
    }}>
      FGDGf;sdflk
    </StyledComponent>
  );
};

export default MyComponent;