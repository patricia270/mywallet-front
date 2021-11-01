import Loader from "react-loader-spinner";
import styled from "styled-components";


function Loading() {
    return(
        <Container>
            <Loader
                type="TailSpin"
                color="#A328D6"
                height={50}
                width={50}
                timeout={10000} 
            />
        </Container>
    );
}

export default Loading;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    z-index: 300;
    top: 0px;
`;