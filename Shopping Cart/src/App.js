import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 6000,
          title: 'Watch',
          qty: 1,
          img: 'https://m.media-amazon.com/images/I/618-2dN9fWL._UX522_.jpg',
          id: 1
        },
        {
          price: 177999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg',
          id: 2
        },
        {
          price: 69000,
          title: 'Laptop',
          qty: 4,
          img: 'https://m.media-amazon.com/images/I/51DmOWr3rnL._SX679_.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20, backgroundColor: '#dedcd7', fontWeight : 'bold'} }>TOTAL : {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
