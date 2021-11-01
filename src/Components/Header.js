import { useHistory } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { signOut } from "../Services/Api";
import errors from "../Services/Errors";
import { HeaderDiv, SessionTitle } from "../Styles/StyledComponents";

function Header() {
    const { user } = useContext(UserContext);
    const history = useHistory();

    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };
    
    function logout() {
        signOut(config)
            .then(() => {
                localStorage.removeItem("MyWalletUserData");
                history.push("/");
            })
            .catch((error) => {
                errors(error);
            })
    }

    return(
        <HeaderDiv>
            <SessionTitle>Olá, <span>{user.username.split(" ")[0]}</span></SessionTitle> 
            <IoExitOutline color="#FFFFFF" size="37px" onClick={logout}/>           
        </HeaderDiv>
    );
}

export default Header;