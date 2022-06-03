import Converter from "./component/Converter/Converter";
import Header from "./component/Header/Header";
import styled from "styled-components";


function App() {


    return (
    <Main>
        <Header/>
        <Converter/>

    </Main>
  );
}

export default App;

const Main = styled.div`
 
`