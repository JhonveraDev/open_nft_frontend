import bannerImage from "../../assets/images/bg-home6.png";

export const MainBanner = () => {
  return (
    <div className="banner-container">
      <h2>Join the world’s largest nFT community & start collecting NFTS</h2>
      <p>Discover the Most Premium, Unique and Exclusive NFT Collection</p>
      <div className="banner-buttons">
        <a href="" className="banner-button-create">Create your first NFT <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        <a href="" className="banner-button-explore">Explore Now <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <img src={bannerImage} alt="" />
    </div>
  )
}
