import '../styles/pages/Home.css';
import InfoBand from "../components/InfoBand";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-desc-image">
                <div className="Home-desc">
                    <h1>Hi, my name is ANTOINE LE CALLOCH<br/>
                        and I welcome you to my personal website
                    </h1>
                </div>
                <div>
                    <ScrollButton/>
                </div>
            </div>
            <div className="Info_band_listes">
                <InfoBand {...{
                    image: "/images/polytech_nice_sophia_noback.png",
                    imageLocation: "left",
                    diploma: "Engineering degree",
                    speciality: "Computer Science specialty with minor in cybersecurity",
                    location: "Polytech Nice Sophia - Côte d'Azur University",
                    date: "2020 - 2024"}}/>
                <InfoBand {...{
                    image: "/images/GEII_toulouse_logo_noback.png",
                    imageLocation: "right",
                    diploma: "Specialised Undergraduate Technology Degree",
                    speciality: "Electrical Engineering and Industrial Computing",
                    location: "University Institute of Technology - Toulouse III Paul Sabatier University",
                    date: "2018 - 2020"}}/>
                <InfoBand {...{
                    image: "/images/logo_stephane_hessel_noback.png",
                    imageLocation: "left",
                    diploma: "French general-track Baccalaureate in Mathematics and Science",
                    speciality: "engineering science specialty (high honours)",
                    location: "Stéphane Hessel high school, Toulouse",
                    date: "2018"
                }}/>
            </div>
        </div>
    );
};

export default Home;
