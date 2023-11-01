import { FaShoppingCart, FaRegBookmark } from 'react-icons/fa';

export function Products(props) {
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage' style={{ width: '200px', height: '200px' }}></img>

                <FaShoppingCart className={"productCard_cart"} />
                <FaRegBookmark className={"productCard_wishlist"} />

                <div className='productCard_content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack_1'>
                        <div className='productPrice'>${props.price}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}