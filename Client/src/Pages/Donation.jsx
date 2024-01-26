import "../Pages/Page Styles/Donation.css";
import NavBar from "../Components/navBar";
import Footer from "../Components/Footer";
import SmallQRCard from "../Components/SmallQRCard";
import DonationCard from "../Components/donationCard";
import donation_description_image from "../assets/siteimages/donationpage/donation-container.jpg";

const Donation = () => {
  return (
    <>
      <div className="donation-header-container">
        <NavBar />

        <div className="donation-text-container">
          <h1 className="donation-title">DONATIONS</h1>
        </div>
      </div>

      <div className="donation-section-container">
        <div className="donation-section-container-wrapper">
          <div className="donation-section-container-east-wrapper">
            <div className="donation-description-container">
              <div className="donation-description-image-container">
                <img src={donation_description_image} alt="" />
              </div>
              <div className="donation-description-text-container">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates obcaecati cum blanditiis doloremque consequatur
                  beatae ut, ab hic quasi unde expedita quia ex laboriosam, sit
                  quas omnis perspiciatis sapiente non. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Voluptates obcaecati cum
                  blanditiis doloremque consequatur beatae ut, ab hic quasi unde
                  expedita quia ex laboriosam, sit quas omnis perspiciatis
                  sapiente non.
                </p>
              </div>
            </div>

            <div className="donation-section-container-donation-card-wrapper">
              <DonationCard />
              <DonationCard />
            </div>
          </div>

          <div className="donation-section-container-west-wrapper">
            <SmallQRCard />
            <SmallQRCard />
          </div>
        </div>

        <div className="donation-section-container-wrapper"></div>
      </div>

      <div className="donation-footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Donation;
