import Pessoa from './Pessoa';

function App(){
  return (
    <div>
      <Pessoa nome="Wesley" idade={10} peso={79}/>
      <Pessoa nome="João" idade={26} peso={71}/>
      <Pessoa nome="Ana" idade={40} peso={48}/>
      <Pessoa nome="Carlos" idade={20} />
    </div>
  )
}



export default App;