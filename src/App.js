import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
        {
          users.map(user => <User name={user.name} email={user.email} city={user.address.city}></User>)
        }
    </div>
  )
}

function User(props){
  return(
    <div style={{backgroundColor : 'indigo', color: 'white', padding : '20px',  borderRadius:'10px', width: '50%', margin:'0 auto', marginTop:'15px'}}>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
      <p>city : {props.city}</p>
    </div>
  )
}



// function Counter(){
// const [count, setCount] = useState(0)
// const increaseCount = () => setCount(count + 1)
// const decreaseCount = () => setCount(count - 1)
//   return(
//     <div>
//       <h2>Count : {count}</h2>
//       <button onClick={increaseCount}>increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }






// const products = [
//   {name : "laptop", price : 25000},
//   {name : "Desktop", price : 75000},
//   {name : "Mobile", price : 3000},
//   {name : "iPhone", price : 150000},
//   {name : "Bike", price : 95000},
// ]
{/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
} */}
// function Product(props){
  //   return(
    //     <div className='product'>
    //       <h2>Name : {props.name}</h2>
    //       <p>Price : {props.price}</p>
    //     </div>
    //   )
    // }
    
    export default App;
    