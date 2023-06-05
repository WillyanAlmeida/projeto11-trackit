import styled from "styled-components";
import { UserContext } from "../../Context"
import { useContext} from "react"



export default function NavBar() {
    const { user } = useContext(UserContext);
    
    return (
        <NavContainer data-test="header">
            <p>TrackIt</p>
            <img data-test="avatar" src={user.image}></img>
        </NavContainer>
    )
}

const NavContainer = styled.div`
font-family: 'Playball', cursive;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 39;
    position: fixed;
    top: 0;
    left: 0;
    p {
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
    }
    img{
        height: 51px;
        width: 51px;
        background-size: 100%;
        border: 1px solid #000;
        border-radius: 98.5px;

    }
`