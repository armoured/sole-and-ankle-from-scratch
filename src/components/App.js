import styled from 'styled-components/macro';

import Header from "./Header";
import ShoeBody from './ShoeBody';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <ShoeBody />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;



export default App;
