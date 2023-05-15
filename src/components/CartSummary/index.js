import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const displayPrice = () => {
        let totalPrice = 0
        cartList.forEach(eachItem => {
          totalPrice += parseInt(eachItem.price) * parseInt(eachItem.quantity)
        })
        return totalPrice
      }

      return (
        <div className="price-container">
          <div className="price-items-container">
            <h1 className="price-heading ">
              Order Total: <span className="price">Rs {displayPrice()}/-</span>
            </h1>
            <p className="no-of-items-description">
              {cartList.length} items in cart
            </p>
            <button type="button" className="checkout-btn-lg">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-btn-sm">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
