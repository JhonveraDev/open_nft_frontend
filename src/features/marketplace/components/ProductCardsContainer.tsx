import { card_data } from "../../../assets/data/cards-data.interface"
import { Titles } from "../../../components/ui/Titles";
import { ProductCard } from "./ProductCard";


export const ProductCardsContainer = () => {
  return (
    <>
      <div className="title-container">
        <Titles title="Featured Item" />
        <a href="">Discover More <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="product-cards-container">
        {card_data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  )
}
