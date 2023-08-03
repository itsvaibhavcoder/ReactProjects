import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/117/117885.png?w=740&t=st=1683730303~exp=1683730903~hmac=7bd7d4f7f631dac4606af4888f8d4c9745b6f2c230a409ad37850c989b9fcb9c"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png?w=740&t=st=1683730204~exp=1683730804~hmac=e99075817915bc5ffb7d186b5aef49f21709e0ef29461f80794efb962e4076da"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/49/49200.png?w=740&t=st=1683730262~exp=1683730862~hmac=dfde6c1387814fea5c23497485f8b324c3163cd688ad525fa15163478c840bfe"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;