import "./Component Styles/donationCard.css";

const DonationCard = () => {
  return (
    <>
      <div className="donation-card-container">
        <div className="donation-card-image-logo-container">
          <img src="" alt="" />
        </div>
        <div className="donation-card-description-container">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            delectus incidunt quae magni magnam? Tempore repudiandae doloremque
            assumenda atque perspiciatis{" "}
          </p>
          <button className="donation-button">
            <span className="donation-button-span"> Donate</span>
          </button> 
        </div>
      </div>
    </>
  );
};

export default DonationCard;
