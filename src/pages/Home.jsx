import React from 'react'
import "../css/layout/container.css"
import img from "../assets/images/about-image.png"
import CarouselContainer from '../components/Carousel/CarouselContainer'
import "../components/Carousel/Carousel.css"
import Form from '../components/ContactForm/Form'

function Home() {
  return (
    <div>

      {/* ========== HERO ============ */}
      <section className='hero hero--background wrapper wrapper--background'>
        <div className='container container--column container--center'>
          <h6>¡Descubre tu potencial!</h6>
          <p>¿Estás estancado con la guitarra o no sabés por donde empezar? ¡Estoy acá para guiarte! Contáctame ahora y empezá tu camino como guitarrista.</p>
          <button>LEER MÁS</button>
        </div>
      </section>
      
      {/* ========== ABOUT ========== */}
      <section className='wrapper'> 
        <div className='container container--column'>
          <h6>Sobre mí</h6>
          <h1>Facundo Sosa</h1>
          <p>Hola soy Facundo Sosa, y estoy para ayudarte en tu viaje como guitarrist</p>
          <p>No importa si estas empezando o partiendo desde cero sin mucha idea, mi enfoque va más allá de enseñarte canciones y técnicas. Quiero que seas capaz de desarrollar tus propias habilidades para aprender lo que quieras por vos mismo.</p>
          <p>Ya sea que quieras expresarte, o si simplemente deseas aprender las canciones que te gustan para tocar con tus amigos, estás en el lugar adecuado.</p>
          <p>No importa si tus sueños son grandes o pequeños, juntos los haremos realidad. ¡Contáctame hoy mismo para empezar tu viaje musical y descargá gratis mi e-book "Manual para guitarristas principiantes"! Espero verte pronto en una de mis clases.</p>
          <button>boton</button>
        </div>
        <img src={img} alt="" className='img img--shadow'/>
      </section>

      {/* ========== GALLERY ========== */}
      <section className='wrapper'>
        <CarouselContainer
          images={[
            {id: 1, image: img},
            {id: 2, image: img},
            {id: 3, image: img},
            {id: 6, image: img},
            {id: 4, image: img},
            {id: 5, image: img},
          ]}
        />
      </section>

      {/* ========== CONTACT ========== */}
      <section className='wrapper'>
        <img src={img} alt="" className='img img--shadow-reversed'/>
        <Form/>
      </section>
    </div>
    
  )
}

export default Home
