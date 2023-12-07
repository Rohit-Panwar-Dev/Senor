import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      arrows:false,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        <div>
            <div className="card mx-2" >
              <img src="https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_1.png" className="card-img-top" alt="..."/>
              <div className="card-body bg-dark ">
                <h3 className="card-text fs-3 fw-bolder text-white">HAIR</h3>
              </div>
            </div>
        </div>
        <div>            <div className="card mx-2" >
                <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_7.png' className='card-img-top' alt=''/>
                <div className="card-body bg-dark ">
                    <h3 className='card-text fs-3 fw-bolder text-white '>NAILS</h3>
                </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_9.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>BRIDAL-SERVICES</h3>
              </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_11.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>SKIN</h3>
              </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_46.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>MAKEUP</h3>
              </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_54.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>MEN HAIR</h3>
              </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_39.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>MANI_PEDI</h3>
              </div>
            </div>
            </div>
            <div>
            <div className="card mx-2" >
              <img src='https://www.letstransformsalon.com/webapp/modules/services/uploads/services_category/service_category_12.png' className='card-img-top' alt=''/>
                  <div className="card-body bg-dark ">
                    <h3 className='card-text bg-dark fs-3 fw-bolder text-white '>BODY</h3>
              </div>
              </div>
              </div>

        </Slider>
      </div>
    );
  }
}