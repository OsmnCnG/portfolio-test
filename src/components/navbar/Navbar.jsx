import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {delay, motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate= {{opacity:1, scale:1}}
                transition={{duration:0.5}}
                ></motion.span>
                <div className="socialAccount">
                    <a href="https://github.com/OsmnCnG" target="blank"><img src="github.png" alt="" /></a>
                    <a href="https://www.instagram.com/osmnn.c/" target="blank"><img src="instagram.png" alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100094221262071" target="blank"><img src="facebook.png" alt="" /></a>
                    
                </div>
            </div>
        </div>

    );
}
 
export default Navbar;