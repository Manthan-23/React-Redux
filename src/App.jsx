import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './components/Shop'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from './state/index'
import { bindActionCreators } from 'redux'

function App() {
  const dispatch = useDispatch();

  const { addItemToCart, removeItemFromCart } = bindActionCreators(actionCreators, dispatch);

  const [count, setCount] = useState(0)

  const state = useSelector(state => state.item); 
  console.log(state); // Accessing the new_state from the first element of the array
  



  return (
    <>    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React Redux</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  

      <div class="d-flex align-items-center ms-auto">
        <button type="button" class="btn btn-primary btn-sm" onClick={() => {removeItemFromCart(1, 100)}}>Remove Item</button>
        <span class="mx-3">Total Items in Cart: {state.itemCount}</span>
        <span class="btn btn-success btn-sm">Total Amount: {state.totalPrice}</span>
      </div>

    </div>
  </div>
</nav>

<Shop/>
</>

  )
}

export default App
