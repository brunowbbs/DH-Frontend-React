import Container from './Container'
import ListaCompras from './ListaCompras';
import Texto from './Texto'

function App(){
  return (
    <>
      <Texto txt="Hello World"/>
     
      {/* <Container />

      <Container>
        <img width={80} src='https://logospng.org/wp-content/uploads/react.png'/>
        <p>Lorem ipsum dolor....</p>
      </Container> */}

      <ListaCompras/>

      
    </>
    )
}

export default App;