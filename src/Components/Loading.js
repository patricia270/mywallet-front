import Loader from "react-loader-spinner";
import { Container } from "../Styles/styleLoading";

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