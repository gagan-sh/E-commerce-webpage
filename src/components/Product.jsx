/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import c1 from '../Image/cake1.jpg';
import c2 from '../Image/cake2.jpg';
import c3 from '../Image/cake3.jpg';
import r1 from '../Image/rat1.jpg';
import r2 from '../Image/rat-2.png';



export default function Product() {
  return (
    <div>
      <div className='row ms-5 me-5 mb-5'>
        <div className='col-7'>
          <div className='row'>
            <div className='col-3 small-cake'>
              <div className='card mb-4'>
                <img className='card-small-cake' src={c1} alt='cake pastry' />
              </div>
              <div className='card mb-4'>
                <img className='card-small-cake' src={c2} alt='cake pastry' />
              </div>
              <div className='card mb-4'>
                <img className='card-small-cake' src={c3} alt='cake pastry' />
              </div>
            </div>
            <div className='col-8'>
              <div className='card'>
                <img className='card-big-cake' src={c3} alt='cake pastry' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-5 mt-5'>
          <h1 className='cake-name'>Chocolate Mania</h1>
          <div className='row d-flex ms-2 mt-4'>
            <span><button className='rating-btn'><span><i className="fa-solid fa-star"></i></span><span className='rating-txt'>4.8</span></button><span className='rev-txt'>Reviews 8</span></span>
          </div>
          <div className='row mt-3 ms-2'>
            <span><span className='price-txt'>&#8377; 599</span><span className='price-grey-txt'><s>&#8377; 799</s></span><span className='price-off-txt'>9% OFF</span></span>
          </div>
          <p className='weight-txt ms-4 mt-3'>Select Weight</p>
          <div className='cake-weigh ms-4'>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label weigh-txt-stl" htmlFor="inlineRadio1">0.5 Kg</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label weigh-txt-stl" htmlFor="inlineRadio2">1 Kg</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label weigh-txt-stl" htmlFor="inlineRadio2">2 Kg</label>
            </div>
          </div>
          <div className='weight-mrp-row ms-5'>
            <div className='weight-mrp'>&#8377; 599</div>
            <div className='weight-mrp'>&#8377; 1599</div>
            <div className='weight-mrp pe-4'>&#8377; 2599</div>
          </div>
          <div className='select-box mt-4 ms-4'>
            <div className='input-group enter-loc'>
              <span className='input-group-text locate-icon'><i className="fa-solid fa-lg text-danger fa-location-dot"></i></span>
              <input className='form-control input-group locate-text' placeholder='Enter Pincode' ></input>
            </div>
            <div className='date-text-box'>
              <input className='form-control date-text' placeholder='Select Date'></input>
            </div>
          </div>
          <div className='mt-4 ms-4'>
            <div className='eat-opt row'>
              <div className='col-6'>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineRadio1"><b>Eggless</b></label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label" htmlFor="inlineRadio2"><b>With Egg</b></label>
                </div>
              </div>
              <div className='col-6 pe-4'>
                <div className='date-text-box'>
                  <input className='form-control date-text' placeholder='Message on Cake'></input>
                </div>
              </div>
            </div>
          </div>
          <div className='delivery-typ mt-4 ms-4'>
            Select Delivery Type
          </div>
          <div className='delivery-time card mt-4 ms-4'>
            <div className='row ms-1 mt-3 mb-3'>
              <div className='col-4'>
                <button className='delivery-btn1'>
                  Standard <br></br> <span className='text-success'><b>(Free)</b></span>
                </button>
              </div>
              <div className='col-4'>
                <button className='delivery-btn'>
                  Fixed Time <br></br> <span className='text-success'><b>&#8377; 200</b></span>
                </button>
              </div>
              <div className='col-4'>
                <button className='delivery-btn'>
                  Mid Night <br></br> <span className='text-success'><b>&#8377; 400</b></span>
                </button>
              </div>
            </div>
          </div>
          <div className='select-time mt-4 ms-4'>
            <div className='row'>
              <div className='col-6'>
                <button className="select-time-drop dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Time
                </button>
              </div>
            </div>
          </div>
          <div className='cart-buy-btn mt-5 ms-4'>
            <div className='row'>
              <div className='col-6'>
                <button className='btn-cart bg-light'>Add To Cart</button>
              </div>
              <div className='col-6'>
                <button className='btn-cart text-light'>Buy Now</button>
              </div>
            </div>
          </div>
          <div className='product-desc mt-5 ms-4'>
            <p className='pro-desc'>Product Description</p>
            <p>Undoubtedly, a birthday is the most important day in anyone's life. All the great stories, journey, and adventures started due to this auspicious day. This is a day that is marked with great excitement and gifts form a major part of this occasion. A cake forms the most important part of a birthday celebration. So, if you want to send a lovely “Happy Birthday” wish to your best friend or close relative, you cannot ignore the wonderful birthday cakes.</p>
          </div>
          <div className='product-desc mt-5 ms-4'>
            <p className='pro-desc'>Disclaimer :</p>
            <li>Design of Cake will differ than displayed Cake.</li>
            <li>Flavor of the Cake will remain same.</li>
            <li>Price shown is for per Kg.</li>
            <li>You can increase quantity from Qty.</li>
          </div>
          <div className='product-desc mt-5 ms-4'>
            <p className='pro-desc'><i className="fa-solid fa-star"></i> 5.0 &#183; 3 reviews</p>
            <div className='row'>
              <div className='col-6'>
                <div className='card rating-card gradient-custom-2'>
                  <div className='row'>
                    <div className='col-3 mt-3 ms-2'>
                      <img className='rat-img' src={r1} alt='rating image'></img>
                    </div>
                    <div className='col-8 ms-2 mt-3'>
                      <h6 className='mb-0'>Gagan S.</h6>
                      <p className='text-secondary mt-0'>November 2022</p>
                    </div>
                  </div>
                  <p className='d-flex justify-content-center'>"Excellent Experience"</p>
                </div>
              </div>
              <div className='col-6'>
                <div className='card rating-card gradient-custom-2'>
                  <div className='row'>
                    <div className='col-3 mt-3 ms-2'>
                      <img className='rat-img' src={r1} alt='rating image'></img>
                    </div>
                    <div className='col-8 ms-2 mt-3'>
                      <h6 className='mb-0'>Gagan S.</h6>
                      <p className='text-secondary mt-0'>November 2022</p>
                    </div>
                  </div>
                  <p className='d-flex justify-content-center'>"Excellent Experience"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
