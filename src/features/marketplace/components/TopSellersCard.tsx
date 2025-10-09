import { card_data } from "../../../assets/data/cards-data";
import { Titles } from "../../../components/custom/Titles";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

export function TopSellersCard() {
  return (
    <>
      <div className="carousel-container">
        <Titles title='Top Sellers in 1 Day' />
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }} slidesPerView={7}
          className="carousel"
        >
          {card_data.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="top-seller-card">
                <div className="top-seller-card__info">
                  <div className="top-seller-card__avatar">
                    <div className="top-seller-card__rank">{data.id}</div>
                    <img src={data.top_seller_avatar} alt="Seller avatar" className="top-seller-card__image" />
                  </div>
                  <div className="top-seller-card__details">
                    <h5 className="top-seller-card__name">{data.creator_name}</h5>
                    <h6 className="top-seller-card__sales">𖤍 {data.top_seller_number.toLocaleString("de-DE")}</h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
