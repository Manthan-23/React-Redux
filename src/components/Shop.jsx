import React from 'react'
import logo from '../assets/chaii-samosa.jpg'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();

    const { addItemToCart } = bindActionCreators(actionCreators, dispatch);

    const handleAddToCart = () => {
        addItemToCart(1, 100);
    }

    return (
        <>
        <div class="container m-5">
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Item-1</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, turpis eget luctus ultrices, velit quam porttitor ante, vitae mattis arcu ipsum vel odio. </p>
        <a href="#" class="btn btn-primary" onClick={handleAddToCart}>Add to cart</a>
        <span class="m-5">Price: 100</span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Item-2</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, turpis eget luctus ultrices, velit quam porttitor ante, vitae mattis arcu ipsum vel odio.</p>
        <a href="#" class="btn btn-primary" onClick={handleAddToCart}>Add to cart</a>
        <span class="m-5">Price: 100</span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Item-3</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, turpis eget luctus ultrices, velit quam porttitor ante, vitae mattis arcu ipsum vel odio.</p>
        <a href="#" class="btn btn-primary" onClick={handleAddToCart}>Add to cart</a>
        <span class="m-5">Price: 100</span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={logo} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Item-4</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit, turpis eget luctus ultrices, velit quam porttitor ante, vitae mattis arcu ipsum vel odio.</p>
        <a href="#" class="btn btn-primary" onClick={handleAddToCart}>Add to cart</a>
        <span class="m-5">Price: 100</span>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}

export default Shop