import React, {useRef} from 'react'
import "./Carousel.css"

function CarouselList({images}) {
  return (
        <div className='carousel__wrapper'>
            <div className='carousel__container'>
                {images.map(element => {
                    return (
                        <img onMouseDown={(e) => {e.preventDefault()}} className='carousel__img' key={element.id} src={element.image} alt=''/>
                    )
                })}
            </div>  
        </div>
  )
}

export default CarouselList
