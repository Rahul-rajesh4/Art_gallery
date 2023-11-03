import React from 'react'
import './home.css'
import Cards from '../cards/Cards'
import Nav from '../Navbar/Nav'
import Display from '../DISPLAY/Display'
export default function Home() {
  return (
    <>
      <Nav />
      <div className='bodyy'>
        <div className='artimg'>
          <div className='overlay'>
            <h1 className='heddinggg'>ArtGallery</h1>
          </div>
        </div>
      </div>
      <div className='spacecard'>
        <h2 className='textdesign'>SHOP</h2>
        <Cards />
      </div>
      <div className='container1'>
        <h1 className='hedding11'>Collections</h1>
      </div>

      <div>
        <Display />
      </div>
    </>
  )
}
