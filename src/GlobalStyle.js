import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

	button {
		height: 43px;
		background: #E8833A;
		border-radius: 3px;
		border-style: none;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
		&:disabled {
			background-color: lightgray;
		}
	}
	
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
		margin-bottom: 10px;
		margin-top: 10px;
		padding: 0 10px;
		font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
		
	}
`

export default GlobalStyle