import React from 'react'

const Home = () => {
  return (
    <div>
        <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-indicators'>
                <button type='button' data-ba-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                <button type='button' data-ba-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
                <button type='button' data-ba-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
                <button type='button' data-ba-target='#carouselExampleIndicators' data-bs-slide-to='3'  aria-label='Slide 4'></button>
            </div>

            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={iphone1} alt="" className='d-block w-100' height='500px'/>
                </div>
                <div className='carousel-item '>
                    <img src={iphone1} alt="" className='d-block w-100' height='500px'/>
                </div>
                <div className='carousel-item '>
                    <img src={iphone1} alt="" className='d-block w-100' height='500px'/>
                </div>
                <div className='carousel-item '>
                    <img src={iphone1} alt="" className='d-block w-100' height='500px'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home