import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context"
import { useContext } from "react"


export default function Menu() {
  const { progressBar, setGet } = useContext(UserContext);
  const navigate = useNavigate()

  return (
    <MenuContainer data-test="menu">

      <p data-test="habit-link" onClick={() => navigate('/habitos')}>Hábitos</p>
      <Progress data-test="today-link" onClick={() => navigate('/hoje')}>
        <CircularProgressbar
          value={progressBar}
          text={`hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
          })}
        />
      </Progress>
      <p data-test="history-link"  onClick={() => navigate('/historico')} >Histórico</p>

    </MenuContainer>
  )

}

const MenuContainer = styled.div`
  z-index: 3;
  font-family: 'Playball', cursive;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #FFFFFF;   
  font-size: 39;
  position: fixed;
  bottom: 0;
  left: 0;
  p {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
  }`

const Progress = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  width: 91px;
  height: 91px;
  margin-bottom: 32px;
  `