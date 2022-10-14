import styled, {css} from 'styled-components'


const Button = styled.button`
${(props) => props.isValid ? css`
background: red;
color: white;
`  :
  css`
  background: white;
   color: red;

  `}

padding: 10px;
margin: 10px;
border: none;
outline: none;
font-size: 16px;

&:hover{
  color: white;
  background: green;
}
`

const Input = styled.input`
color: red;
background: lightblue;
padding: 10px;
margin: 10px;
border: none;
outline: none;
font-size: 16px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Styled Components</h1>
        <Input type="text" placeholder='Username' />
        <Input type="text" placeholder='Password' />
        <Button isValid = {true}>Login</Button>
      </header>
    </div>
  );
}

export default App;
