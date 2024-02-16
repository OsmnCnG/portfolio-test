import "./hero.scss"
import {motion} from "framer-motion"


const textVariants = {
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1, 
        transition : {
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const sliderVariants = {
    initial: {
        x:0,
    },
    animate: {
        x:"-220%",
        transition: {
            repeat:Infinity,
            repeatType: "mirror",
            duration:20,
        },

    }
}


const Hero = () => {
    return (  
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants= {textVariants} 
                    initial="initial"
                    animate="animate" 
                >
                    <motion.h2 variants={textVariants}>OSMAN CAN GÖNEN</motion.h2>
                    <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>
                            <a href="">Contact Me</a>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                React Developer 
            </motion.div>

            <div className="imageContainer">
                <img src="11_preview_rev_1.png" alt="" />
            </div>


        </div>
    );
}
 
export default Hero;