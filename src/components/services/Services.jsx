import "./services.scss"
import {motion} from "framer-motion"



const variants = {
    initial: {
        x:-500,
        y:100,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity:1,
        y:0,
        transition: {
            duration:1,
            staggerChildren:0.1,
        },
    }
};




const Services = () => {


    return (  
        <motion.div className="services" variants={variants} initial="initial" whileInView={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on learning 
                    <br/>new technologies.
                </p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="helloworld.jpeg" alt="" />
                    <h1>
                        <b>The</b> Technologies
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>I focus</b> on
                    </h1>
                    <button></button>
                </div>
            </motion.div>
        

            <div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{color:"black", scale:1.05}}>
                    <img src="java_logo.png" alt=""/>
                </motion.div>
                <motion.div className="box" whileHover={{color:"black", scale:1.05}}>
                    <img src="spring_logo_preview_rev_1.png" alt="" />
                </motion.div>
                <motion.div className="box" whileHover={{color:"black", scale:1.05}}>
                    <img src="react_logo.png" alt="" />
                </motion.div>
                <motion.div className="box" whileHover={{color:"black", scale:0.9}}>
                    <img src="js_logo_preview_rev_1.png" alt="" />
                </motion.div>
            </div>


        </motion.div>
        


    );
}
 
export default Services;