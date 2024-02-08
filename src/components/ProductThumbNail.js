import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CuroselWrapper({ images }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            {images && images.map((itemImage, index) => {

                return (
                    <Carousel.Item>
                        <img
                            key={index}
                            className="d-block w-100"
                            src={itemImage}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )
            })

            }

        </Carousel>
    );
}
