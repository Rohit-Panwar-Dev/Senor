import './App.css';
import Sliders from './Slider';
import Pslider from './Pslider';
import logo from './img/senor.jpg';
import { useEffect } from 'react';

function App() {

  // const handleBlockInspect = (event)=>{
  //   event.preventDefault();
  // }

  // useEffect(()=>{
  //   window.addEventListener('contextmenu',handleBlockInspect);
  //   return function cleanup(){
  //     window.removeEventListener('contextmenu',handleBlockInspect);
  //   }
  // },[])


  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.ctrlKey && event.shiftKey) {
  //       // Prevent the default behavior
  //       event.preventDefault();
  //       console.log('Ctrl+Shift combination disabled');
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);



  return (
    <>
    <main>
    <div class="overlay">
    </div>
      {/* <div className='blank'></div> */}
    <header className="container-fluid">
       <div className='container d-flex flex-xs-row flex-lg-column justify-content-sm-between py-1 '>
              <figure className='text-center '>
                <img src={logo} height={'193px'} width={'270px'} alt='wait' className='shadow-lg'/>
              </figure>
            <nav className="navbar navbar-expand-lg  ">
              <button className="navbar-toggler bg-light text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
      				<span className="navbar-toggler-icon"></span>
    			</button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Hair Services</p>
        </li>
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Membership</p>
        </li>
        <li className="nav-item">
          <p className="nav-link text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1"  href="#">Shop</p>
        </li>
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Blog</p>
        </li>
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Carrers</p>
        </li>
        <li className="nav-item">
          <p className="nav-link  text-white fs-3 fw-semibold ps-lg-4 ps-md-2 ps-sm-1" href="#">Contact</p>
        </li>
       
      </ul>

      
    </div>
  
</nav>
<div className="offcanvas offcanvas-start  text-bg-dark"  id="offcanvasExample">
  				<div className="offcanvas-header">
          <figure className="navbar-brand" href="index">
          <img src={logo} height={'193px'} width={'270px'} alt='wait'/>
              </figure>
  					<button type="button" className="btn-close bg-success" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  				</div>
  				<div className="offcanvas-body">
                  <ul className="navbar-nav align-items-lg-center text-uppercase ">
                  <li className="nav-item">
          <p className="nav-link fs-3 fw-semibold"  href="#">Home</p>
        </li>
        <li className="nav-item">
          <p className="nav-link fs-3 fw-semibold" href="#">About</p>
        </li>
        <li className="nav-item">
          <p className="nav-link fs-3 fw-semibold" href="#">Program</p>
        </li>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle fs-3 fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Blog
          </p>
          <ul className="dropdown-menu">
          <li><p className="dropdown-item" href="#">Blog</p></li>
            <li><p className="dropdown-item" href="#">Blog Details</p></li>
            <li><p className="dropdown-item" href="#">Elements</p></li>
          </ul>
        </li>
        <li className="nav-item">
          <p className="nav-link fs-3 fw-semibold" href="#">Contact</p>
        </li>
						
					</ul>
  				</div>
  			</div>
         </div>
      </header>

      <div className='container py-5 header-banner'>
          <h2>Award-Winning & Sustainable</h2>
          <h1>Premier</h1>
          <h1>ORGANIC Hair</h1>
          <h1>Salon in</h1>
          <h1>Jodhpur</h1>
          <button className='fw-bolder'>Book Now</button>
      </div>



         

    </main>
  
    <div className='container-fluid transform py-5'>
      <div className='container text-center py-5'>
        <h3>The safe and natural way to</h3>
        <h2>TRANSFORM YOUR HAIR</h2>
        <p>We're a sustainable, Richmond based, hair salon. We do our best to save our planet and minimize your exposure to toxins for a gentler hair experience. </p>
        <p>We go above and beyond to delight our clients and take an holistic approach to your hair, wellness, balance and beauty.</p>
        <button className='fw-bolder'>Book Now</button>
      </div>
    </div>


    <div className='container-fluid offer py-5'>
      <div className='container text-center py-5'>
        <div className='row'>
          <div className='col-lg-8 offer-box'>
            <h3>Premier hair services</h3>
            <h2>What we offer</h2>
            <p>We’re the go-to destination for contemporary cutting, colouring and impeccable customer service.</p>
            <p>“We’re a warm, friendly, experienced team who pride ourselves on the highest technical and creative skills. Shiny, beautiful hair is our Sheen promise to you.”</p>
            <p>Michelle Hart, Salon Owner</p>
            <div className='d-flex justify-content-evenly'>
            <button className='px-md-3 px-sm-2 '>EXPLORE SERVICES</button>
            <button className='px-md-3 px-sm-2'>ORDER E-GIFT CARDS</button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='container-fluid member py-5'>
      <div className='container text-center py-5'>
        <h3>Indulge in a world of luxury</h3>
        <h2>BECOME A MEMBER</h2>
        <p>Enjoy the luxury of a weekly blow-dry, priority appointments and collect loyalty reward points for additional salon treats.</p>
        <button className='fw-bolder'>Join Now</button>
      </div>
    </div>
    <div className='container-fluid product py-5'>
      <div className='container text-center py-5'>
        <h3>Products we use</h3>
        <h2>Safe, Organic, and Natural</h2>
        <p>Partnering with Natulique and OWAY, we use the world’s gentlest, safest and cleanest professional hair products with certified organic ingredients, containing fewer toxins and improved functionality.</p>
        <button className='fw-bolder'>Book Now</button>
        <Sliders/>
      </div>
    
    </div>

    <div className='container-fluid transform tbg position-relative py-5'>
      <div className='overlay3'></div>
      <div className='container text-center py-5'>
        <h2>Our Services</h2>
        <h3>Boost your appearance using current trends.</h3>
        <p>We have everything you need to alter yourself, from getting ready for business meetings to attending red carpet gala events, wedding functions, birthday celebrations, and graduation day ceremonies. We are the go-to salon for services in hair, beauty, and nails.</p>
        <p>Through our outstanding services, our ultimate goal is to make you feel absolutely radiant, gorgeous, and rejuvenated. Our team of business specialists will ensure that your change is perfect. Come on, let's change today for a lovely future.</p>
        <Pslider/>
        <button className='fw-bolder'>Book Now</button>
      </div>
    </div>

    <div className='container-fluid newsletter position-relative py-5'>
      <div className='overlay2'></div>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-6 position-relative'>
                <h2>JOIN OUR NEWSLETTER</h2>
              </div>
              <div className='col-lg-6'>
                  <div className='py-4 position-relative'>
                    <h4>First Name</h4>
                    <input type='textbox' className='w-100 border border-3 border-secondary py-3'/>
                  </div>
                  <div className='pt-4 position-relative'>
                   <h4>Email</h4>
                    <input type='textbox' className='w-100 border border-3 border-secondary py-3'/>
                  </div>
                  <div className='pt-3 position-relative'>
                    <input type='checkbox' className=''/><span className=''> Yes please. I’d love to receive emails from Sheen Hair Salon with your exclusive offers, tips, advice and news. Don’t worry, we always treat your data with respect, in accordance with our Privacy Policy and never share your personal information with 3rd parties. You can, of course, opt-out at any time using the link on any of our emails. *</span>
                   
                  </div>
                  <div>
                   <button className='w-100 position-relative fw-bolder'>Subscribe</button>
                  </div>

              </div>
            </div>
        </div>
    </div>

    <footer>
      <div className='footer-top container-fluid py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 text-white text-start'>
                <h2 className='py-3 fw-bolder fs-1'>Contact Details</h2>
                <h4 className='py-2 fs-3'> 020 8940 6464</h4>
                <h4 className='py-2 fs-3'> 2 Lichfield Terrace, Sheen Road Richmond, <br/>Surrey TW9 1AS</h4>
            </div>
            <div className='col-lg-3 text-md-center text-sm- start'>
             <img src={logo} height={'200px'} width={'400px'} alt='wait' className='flogo'/>
            </div>
            <div className='col-lg-4 text-white text-md-end text-sm-start'>
                <h2 className='py-3 fw-bold fs-1'>Quick Links</h2>
                <h4 className='py-2 fs-3'>Book Now</h4>
                <h4 className='py-2 fs-3'>Contact Us</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom container-fluid py-5'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-5 text-white text-md-start text-sm-center'>
              <h4 className='py-3 fs-4'>Privacy Policy | Cookie Policy | Terms & Conditions</h4>
              </div>
              <div className='col-lg-3 text-center'>
              <img src='https://www.sheensalon.com/wp-content/uploads/nhbf-member-hair-salon_white.png' height={'80px'} width={'150px'} alt='wait'/>
              </div>
              <div className='col-lg-4'></div>
            </div>
        </div>
      </div>
    </footer>
    

</>
  );
}

export default App;
