import React from "react";
import {motion} from 'motion/react'

const Aurora = () => {
    return (
        <motion.section
          animate={{
            backgroundImage: [
              "radial-gradient(108% 108% at 50% 0%, #000212 50%, #488dff 85%)",
              "radial-gradient(108% 108% at 50% 0%, #000212 50%, #88465e 85%)",
            ]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          className="fixed inset-0 w-screen h-full lg:h-screen overflow-hidden -z-10"
        >
        </motion.section>
    )
}

export default Aurora;