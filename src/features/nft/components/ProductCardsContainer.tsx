import { card_data } from "../../../assets/data/cards-data";
import { ProductCard } from "./ProductCard";
import "../../../assets/styles/style.css";

export const ProductCardsContainer = () => {
  return (
    <div className="product-cards-container">
      {card_data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
