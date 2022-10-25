import Container from "./Container";

const items = [
  {
    id:1,
    name:'Coca cola'
  },
  {
    id:2,
    name:'Coxinha'
  },
  {
    id:3,
    name:'Pizza'
  },
  {
    id:4,
    name:'Bolacha'
  },
  {
    id:5,
    name:'Melancia'
  }
]

function ListaCompras(){
  
  return (
    // <Container>
      <ul>
        {/* <li>{items[0].name}</li>
        <li>{items[1].name}</li>
        <li>{items[2].name}</li>
        <li>{items[3].name}</li> */}
        {
          items.map((item,index)=><li key={item.id}> {item.id} - {item.name}</li>)
        }
      
      </ul>
    // </Container>
  )
}

export default ListaCompras;