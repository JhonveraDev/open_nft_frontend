import { cardProduct } from "../../../assets/data/product-card-interface.type";
import "../../../assets/styles/style.css";

interface ProductCardProps {
  product: cardProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.product_image} alt="NFT" />
        <div className="card-wish">
          <div className="card-timer">01h 51m 20s</div>
          <div className="card-fav"><i className="fa-regular fa-heart"></i></div>
        </div>
        <div className="card-bid">
          <span>Place Bid</span>
        </div>
      </div>

      <div className="card-content">
        <div className="card-title">{product.product_name}</div>
        <div className="card-creator">
          <img src={product.creator_avatar} className="card-avatar" alt="avatar" />
          <div className="card-author">
            <span>Created by:</span>
            <strong>{product.creator_name}</strong>
          </div>
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="card-footer">
        <span>Current Bid</span>
        <strong>𖤍 {product.price_usd}</strong>
      </div>
    </div>
  )
}
