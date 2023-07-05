import React from 'react'

export default function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-4'>
                <h4>Showcase</h4>
            </div>
            <div className='col-4'>
                <div className='input-group'>
                    <input className='form-control search-right' placeholder='Search Gift, Cake and More...'></input>
                    <span className='input-group-text search-left'><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
            <div className='col-4'>
               <div className='cart'>
                <span><i class="fa-solid me-5 fa-cart-shopping"></i><i class="fa-solid fa-user"></i></span>
               </div> 
            </div>
        </div>
        <hr></hr>
      </div>
    </div>
  )
}
