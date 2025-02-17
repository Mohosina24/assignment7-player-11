import Image from '../assets/images/banner-main.png'
const Banner = () => {
    return (
        <div
  className="hero min-h-screen my-8 bg-black "
  style={{
 
    backgroundImage: 'url(https://i.ibb.co.com/XffDC9pr/bg-shadow.png)',
    borderRadius:'20px'
  }}>
  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-3xl ">
      <img className=' mx-auto mb-5' src={Image} alt="" />
      <p className="mb-4 text-3xl text-white">
      Assemble Your Ultimate Dream 11 Cricket Team
      </p>
      <p className='text-gray-500 text-xl mb-5'>Beyond Boundaries Beyond Limits</p>
      <span className="border-2 rounded-2xl px-2 py-5 border-[#e2eb92]">
      <button className="btn bg-[#E7FE29] hover:bg-[#E7FE29] ">Claim Free Credit</button>
      </span>
      
    </div>
  </div>
</div>
    );
};

export default Banner;