import { useHistory } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { signOut } from "../Services/Api";
import { HeaderDiv, SessionTitle } from "../Styles/StyledComponents";
import { IoExitOutline } from "react-icons/io5";
import { useContext } from "react";

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
            .then((resp) => {
                console.log(resp)
                localStorage.removeItem("MyWalletUserData");
                history.push("/");
            })
            .catch((error) => {
                console.log(error)
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