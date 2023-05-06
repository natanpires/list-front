import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: var(--padding);
  justify-content: center;
`;

const LoginWrapper = styled.div`
  display: inherit;
  max-width: var(--max-width);
  min-width: 25vw;
`;

export { Main, LoginWrapper };

