import "../../assets/style.css";
import myImage from "../../assets/images/card-item-46.jpg";
import myImage2 from "../../assets/images/avatar-box-01.jpg";

export const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={myImage} alt="NFT" />
        <div className="card-timer">01h 51m 20s</div>
        <div className="card-fav">♡</div>
      </div>

      <div className="card-content">
        <div className="card-title">Dayco serpentine belt</div>
        <div className="card-creator">
          <img
            src={myImage2}
            alt="creator"
          />
          <div>
            <span>Created by:</span>
            <br />
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
