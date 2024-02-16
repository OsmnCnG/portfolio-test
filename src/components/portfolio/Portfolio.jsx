import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id: 1,
        title:"Quiz App With React",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyI1Bcl73fLb1bJHXs88ncmOtG80JvDK6Vg&usqp=CAU",
        description:"Lorem ipsum dolor sit amet.",
        ref:"https://quiz-app-beta-three-54.vercel.app/"
    },
    {
        id: 2,
        title:"react xox game",
        img:"https://play-lh.googleusercontent.com/Z8odU30RMas0hnf13UXl2xg285x5ez3N2vpTUKS3bN8ddo6nzEVyXYbnrjbLEHMya1c",
        description:"Lorem ipsum dolor sit amet.",
        ref:"https://react-xox.vercel.app/"
    },
    {
        id: 3,
        title:"later works",
        img: "quizl.png",
        description:"Lorem ipsum dolor sit amet.",
        ref:"https://quiz-app-beta-three-54.vercel.apps/"
    },
    {
        id: 4,
        title:"later works",
        img:"",
        description:"Lorem ipsum dolor sit amet.",
        ref:"https://quiz-app-beta-three-54.vercel.app/"
    }
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0,1], [-100,100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.ref} target="blank"><button>See Demo</button></a>
                    </motion.div>
                </div>
                
            </div>
        </section>
    )

}




const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end ", "start start"],
    });


    const scaleX = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
    });
    
    return (  
        <div className="portfolio" ref={ref}>

            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
            
        </div>

    );
}
export default Portfolio;