import React from 'react'
import PlusSymbol from '../../assets/planets/PlusSymbol.svg'
import Star from '../../assets/planets/Star.svg'
import Point from '../../assets/planets/Point.svg'

import { motion, useMotionValue } from 'framer-motion';

function BackgroundPlanets (): React.ReactNode {
    const mouseX = useMotionValue(200);
    const mouseY = useMotionValue(200);

    

    return (
        <motion.div id='circles' 
            className='fixed w-full h-full flex justify-center items-center z-0 '
            onMouseMove={(event) => {
                mouseX.set(event.clientX);
                mouseY.set(event.clientY);
            }}> 


            <motion.div
                animate={{ rotate: 360 }}
                transition={{duration:8, repeat: Infinity, ease: 'linear' }}
                className='absolute  w-[110vw] md:w-[40rem] lg:w-[46rem] '>
                
                <img className='' src={PlusSymbol} alt="Plus Symbol" />
            </motion.div>
            <motion.div
                initial={{rotate:140}}
                animate={{ rotate: 500 }}
                transition={{duration:10, repeat: Infinity, ease: 'linear' }}
                className=' absolute hidden md:block md:w-[63rem] lg:w-[66rem]'>
                <div className='w-28'>
                    <img className='w-full h-full' src={Star} alt="Star Symbol" />
                </div>
            </motion.div>
            <motion.div
                initial={{rotate:260}}

                animate={{ rotate: 620 }}
                transition={{duration:12, repeat: Infinity, ease: 'linear' }}
                className='absolute hidden md:block md:w-[87rem]'>
                <div className='size-28'>
                    <img className='' src={Point} alt="Star Symbol" />
                </div>
            </motion.div>

        </motion.div>


    );
}

export default BackgroundPlanets