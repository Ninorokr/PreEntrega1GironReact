import cart from "../assets/cart.svg"

const CartWidget = ({width, color}) => {
    return (
        <a href="./carrito"><img src={cart} width={width} color={color}/></a>
    );
}

export default CartWidget;