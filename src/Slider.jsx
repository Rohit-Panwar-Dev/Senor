import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let dragging = false;
class Sliders extends React.Component{
  render(){
       var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows:false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
            breakpoint: 824,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
         beforeChange: () => dragging = true,
      afterChange: () => dragging = false,
    };
  return(<>
     	<Slider {...settings} className="py-5">

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_15.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_16.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_17.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_19.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_20.png' className="img-fluid" width={'220px'}  alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_22.png' className="img-fluid" width={'220px'} alt="" />
                </a>
            </div>
            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_15.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_16.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_17.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

        	<div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_19.png' className="img-fluid" width={'220px'} alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_20.png' className="img-fluid" width={'220px'}  alt=""/>
                </a>
            </div>

            <div>
                <a href="index.js" onClick={(e)=> dragging}>
                    <img src='https://www.letstransformsalon.com/webapp/modules/ourpartner/uploads/partner_22.png' className="img-fluid" width={'220px'} alt="" />
                </a>
            </div>

        	

        </Slider>
  </>)
  }
}

export default Sliders



