import styled from "styled-components";


export default function History() {

    return (
        <HistoryCOntainer>
            <Container>
                <h4>Histórico</h4>

                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>

            </Container>

        </HistoryCOntainer>
    )
}

const HistoryCOntainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #E5E5E5;
    h4{
        width: 100px;
        height: 29px;
        left: 17px;
        top: 98px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-bottom: 20px;
        color: #126BA5;
        }
    h3{
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        }
`

const Container = styled.div`
    margin-top: 75px;
    margin-left: 15px;
`