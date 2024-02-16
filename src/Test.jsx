import {motion} from "framer-motion"
import {useState} from 'react'
const Test = () => {
    
    const variants = {
        visible: (i) => ({
            opacity:1,
            x: 100, 
            // transition:{type:"spring", stiffness:200},
            // transition: { staggerChildren: 0.2 },
            transition: {delay: i* 0.3},
        }),
        hidden: {
            opacity:0
        },
    };

    const [open,setOpen] = useState(false)
    

    const item = [
        "item1", "item2", "item3"
    ]


    return ( 


        <div className="course">
            {/* <motion.div className="box" 
                        initial={{opacity:0.5, scale:0.5}}
                        // animate={{opacity:1, scale:1, x:200}} 
                        transition={{duration:2, delay:2}}
                        whileHover={{opacity:1, scale:2}}
            ></motion.div> */}

            {/* <motion.div className="box" 
                        initial="hidden"
                        variants={variants}
                        transition={{duration:2}}
                        animate="visible"
            ></motion.div> */}

            {/* <div>
                <motion.div className="box"
                        variants={variants}
                        animate={open ? "visible" : "hidden"}
                ></motion.div>
                <button onClick={() => setOpen(prev=>!prev)}>Click Me & See</button>
            </div> */}
            
        
            <div>
                <motion.ul initial="hidden" animate="visible" variants={variants} >

                
                    {
                        item.map((item,index)=> (
                            <motion.li variants={variants} key={item} custom={index}>{item}</motion.li>
                        ))
                    }

                </motion.ul>
            </div>
            


        </div>


        


        
    );
}
 
export default Test;