import React, {useRef} from 'react'
import CarouselList from './CarouselList'
import useDraggableScroll from 'use-draggable-scroll'
import "./Carousel.css"

function CarouselContainer({images}) {
  const scrollableElement = useRef(null)
  const { onMouseDown } = useDraggableScroll(scrollableElement, { direction: 'horizontal' })

  return (
    <div className='carousel' onMouseDown={onMouseDown} ref={scrollableElement}>
      <CarouselList images={images} />
    </div>
  )
}

export default CarouselContainer
