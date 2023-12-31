import AOS from 'aos';
import '../styles/pages/Home.css';
import Title from "../components/Title";
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
        </div>
    );
};

export default Home;
