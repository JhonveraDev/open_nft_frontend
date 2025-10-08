import { MainBanner } from "../../../../components/custom/MainBanner";
import { ProductCardsContainer } from "../../components/ProductCardsContainer";

export const HomePage = () => {
  return (
    <div className='home-container'>
      <MainBanner />
      <ProductCardsContainer />
    </div>   
  );
}
