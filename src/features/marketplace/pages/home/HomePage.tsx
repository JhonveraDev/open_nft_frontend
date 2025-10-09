import { MainBanner } from "../../../../components/ui/MainBanner";
import { TopSellers } from "../../components/TopSellers";
import { ProductCardsContainer } from "../../components/ProductCardsContainer";

export const HomePage = () => {
  return (
    <div className='home-container'>
      <MainBanner />
      <ProductCardsContainer />
      <TopSellers />
    </div>   
  );
}
