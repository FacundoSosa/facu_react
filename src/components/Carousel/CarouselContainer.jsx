import React, {useEffect, useRef, useState} from 'react'

import CarouselList from './CarouselList'
import useDraggableScroll from 'use-draggable-scroll'
import "./Carousel.css"

function CarouselContainer({images}) {
  const scrollableContainer = useRef(null)
  const [position, setPosition] = useState(0)
  const { onMouseDown } = useDraggableScroll(scrollableContainer, { direction: 'horizontal' })
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    // Calcular el ancho de una sola imagen al montar el componente
    if (scrollableContainer.current && scrollableContainer.current.firstChild) {
      const container = scrollableContainer.current.firstChild
      const firstImage = container.firstChild;
      setImageWidth(firstImage.clientWidth); // Guardar el ancho de la primera imagen
    }

    const handleResize = () => {
      // Recalcular el ancho de la imagen al cambiar el tamaño del viewport
      if (scrollableContainer.current && scrollableContainer.current.firstChild) {
        const container = scrollableContainer.current.firstChild;
        const firstImage = container.firstChild;
        setImageWidth(firstImage.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableContainer.current) {
        const scrollLeft = scrollableContainer.current.scrollLeft;
        const newPosition = Math.round(scrollLeft / imageWidth);
        setPosition(newPosition)
      }
    }

    const containerElement = scrollableContainer.current
    containerElement.addEventListener("scroll", handleScroll)
    
    return () => {
      containerElement.removeEventListener("scroll", handleScroll)
    }
  }, [imageWidth])

  const handleMove = (position) => {  
    if (scrollableContainer.current) {
      const scrollPosition = imageWidth * position;
      scrollableContainer.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }

  const handleMoveRight = () => {
    setPosition((prevPosition) => {
      const newPosition = (prevPosition + 1) % images.length;
      handleMove(newPosition)
      return newPosition
    })    
  }
  
  const handleMoveLeft = () => {
    setPosition((prevPosition) => {
      const newPosition = prevPosition === 0 ? images.length - 1 : prevPosition - 1
      handleMove(newPosition)
      return newPosition
    })
  }

  return (
    <div>
      <div className='carousel' onMouseDown={onMouseDown} ref={scrollableContainer}>
        <CarouselList images={images} />
      </div>
      <button onClick={handleMoveLeft}>left</button>
      <button onClick={handleMoveRight}>right</button>
      <span>{"posición de la imagen que estoy mostrando: " + position + " "}</span>
    </div>
  )
}

export default CarouselContainer
