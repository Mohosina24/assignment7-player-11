import Image from '../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div className='mt-96'>
           
            <div className="hero h-72  bg-white w-8/12 md:w-9/12 absolute z-10 -mt-36 mx-44 md:mx-16 lg:mx-32 border-2 p-8"
  style={{
 
    backgroundImage: 'url(https://i.ibb.co.com/XffDC9pr/bg-shadow.png)',
    borderRadius:'20px'

  }}>
    <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl ">
         
          <p className="mb-4 text-3xl text-black">
          Subscribe to our Newsletter
          </p>
          <p className='text-gray-500 text-xl mb-5'>Get the latest updates and news right in your inbox!</p>
          <div >
          <input type="text" placeholder="enter your email" className="input input-bordered w-full max-w-xs" />
          <input type="button" className='btn ml-3 bg-[#E7FE29]' value="Subscribe" />
          </div>
          
        </div>
      </div>

            </div>
                {/* footer section */}
        <footer className=' bg-black relative  ' >
            <div className='pt-48'>
            <div className='flex justify-center '>
                    <img className='' src={Image} alt="" />
                </div>
        
            <div className="footer text-white p-10 flex justify-around">
              
  <nav>
    <h6 className="footer-title">About Us</h6>
    <p className=" text-start">We are a passionate team <br /> dedicated to providing the best  <br /> services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Home</a>
  </nav>

  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white text-start">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="enter your email"
          className="input input-bordered join-item" />
        <button className="btn  join-item bg-[#E7FE29] hover:bg-[#E7FE29]"
      
        >Subscribe</button>
      </div>
    </fieldset>
  </form>
        </div>
            </div>
            <hr />
            <div className="footer footer-center bg-black text-slate-400 p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} -  Your Company All Rights Reserved.</p>
  </aside>
</div>
        </footer>
        </div>
    );
};

export default Footer;
