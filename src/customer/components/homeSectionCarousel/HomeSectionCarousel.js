import React, { useState } from 'react'
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/Mens_Kurta';

const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
};

const HomeSectionCarousel = ({data,section}) => {
    const [activeIndex, setActiveIndex] = useState(0);


    const slidePrev =  () => {
        setActiveIndex(activeIndex - 1);
    };
    const slideNext =  () => {
        setActiveIndex(activeIndex + 1);
    }
    const items = data.map((item) => 
        <HomeSectionCard product={item}/>
    )
    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
            <div className='relative border p-5 '>
                <AliceCarousel
                    disableDotsControls
                    disableButtonsControls
                    mouseTracking
                    items={items}
                    key={activeIndex}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    animationType="fadeout"
                    animationDuration={2000}
                />
            </div>
            {activeIndex !== items.length-5 &&(<Button
                variant="contained"
                onClick={slideNext}
                className="z-50 bg-[]"
                sx={{
                    position: 'absolute',
                    top: "8rem",
                    right: "0rem",
                    transform: "translateX(50%) rotate(90deg)",
                    bgcolor: "white"
                }}
                aria-label="next">
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
            </Button>)}
            {activeIndex !== 0 && (<Button
                variant="contained"
                onClick={slidePrev} className="z-50 bg-[]"
                sx={{
                    position: 'absolute',
                    top: "8rem",
                    left: "0rem",
                    transform: "translateX(50%) rotate(90deg)",
                    bgcolor: "white"
                }}
                aria-label="next">
                <KeyboardArrowLeftIcon
                    sx={{
                        transform: "rotate(-90deg)",
                        color: "black"
                    }}/>
            </Button>)}
        </div>
    )
}

export default HomeSectionCarousel
