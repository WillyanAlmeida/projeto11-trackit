import styled from "styled-components";
import delet from '../../assets/delet.png';






export default function HabitsList() {
    return (
        <>
        <List>
            <h4>Ler 1 capítulo de livro</h4>
            <WeekDays>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </WeekDays>
            <img src={delet}></img>
        </List>

        <List>
            <h4>Ler 1 capítulo de livro</h4>
            <WeekDays>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </WeekDays>
            <img src={delet}></img>
        </List>
       
        <List>
            <h4>Ler 1 capítulo de livro</h4>
            <WeekDays>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </WeekDays>
            <img src={delet}></img>
        </List>
        
        </>
        
    )
}

const List = styled.div`
margin-bottom: 10px;
position: relative;
    width: 340px;
    height: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 15px;
   h4{
    margin: 0;
    height: 100%;
   }
   img{
    position: absolute;
    right: 10px;
    top: 11px;
   }
`;

const WeekDays = styled.div`
    display: flex;
    gap: 4px;
`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 15px;
`