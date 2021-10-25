import { useHistory } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { HeaderDiv, SessionTitle } from "../Styles/StyledComponents";
import { IoExitOutline } from "react-icons/io5";
import { useContext } from "react";

function Header() {
    const { user } = useContext(UserContext);
    const history = useHistory();
    
    function logout() {
        localStorage.removeItem("MyWalletUserData");
        history.push("/");
    }

    return(
        <HeaderDiv>
            <SessionTitle>Olá, <span>{user.username.split(" ")[0]}</span></SessionTitle> 
            <IoExitOutline color="#FFFFFF" size="37px" onClick={logout}/>           
        </HeaderDiv>
    );
}

export default Header;