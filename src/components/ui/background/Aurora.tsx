import { LazyMotion, domAnimation } from "motion/react"
import * as m from "motion/react-m"

const Aurora = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.section
            animate={{
              backgroundImage: [
                "radial-gradient(120% 120% at 50% 0%, #000212 50%, #00a1ad 85%)",
                "radial-gradient(120% 120% at 50% 0%, #000212 50%, #488dff 85%)",
                "radial-gradient(120% 120% at 50% 0%, #000212 50%, #88465e 85%)"
              ]
            }}
            transition={{
              duration: 14,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                zIndex: "-2000"
            }}
          >
          </m.section>
        </LazyMotion>
    )
}

export default Aurora;