import "../../../../assets/styles/style.css";
import { ProductCard } from "../../components/ProductCard";

export const HomePage = () => {
  return (
    <div className='home-container'>
      <div className="container-cards">
        <ProductCard />
      </div>
    </div>
  );
}
