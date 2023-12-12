import AOS from 'aos';
import '../styles/pages/Home.css';
import Title from "../components/Title";
import InfoBand from "../components/InfoBand";
import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <div className="Home">
            <Title {...{
                text: "Antoine LE CALLOCH",
                subText: "Personal Website"
            }} />
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
