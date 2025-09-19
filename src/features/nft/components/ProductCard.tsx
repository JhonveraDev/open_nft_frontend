import myImage from "../../../assets/images/card-item-41.jpg";
import myImage2 from "../../../assets/images/avatar-box-01.jpg";
import "../../../assets/styles/style.css";

export const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={myImage} alt="NFT" />
        <div className="card-wish">
          <div className="card-timer">01h 51m 20s</div>
          <div className="card-fav">♡</div>
        </div>
      </div>

      <div className="card-content">
        <div className="card-title">Dayco serpentine belt</div>
        <div className="card-creator">
          <img src={myImage2} alt="creator" />
          <div className="card-author">
            <span>Created by:</span>
            <strong>Marvin McKinney</strong>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <span>Current Bid</span>
        <strong>0,34 Ξ</strong>
      </div>
    </div>
  )
}
