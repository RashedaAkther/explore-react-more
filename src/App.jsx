
import './App.css'
import Counter from './counter';
import Team from './team'
import Users from './users';
import Friends from './Friends';


function App() {
 
  function handleClick() {
    alert('button has been clicked');
  }

  const handleClick2 =() =>{
    alert('button 2 has been clicked');
  }

  const addToFive =(num)=>{
    alert(num + 5);
  }
  
  return (
    <>
   
      <h1>React Core Concepts</h1>
     <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click again</button>
      <button onClick={()=>{alert('third click')}}>click more</button>
      <button onClick={()=>{addToFive(3)}}>click more</button>
     
     
    </>
  )
}

export default App
