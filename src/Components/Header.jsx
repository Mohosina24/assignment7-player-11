
import Image from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
         <img src={Image} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
            
          </ul>
         <div className='ml-10 '>
         <button className='border-2 px-6 py-2 rounded-lg border-slate-300'> 0 Coin </button>
         </div>
         
        </div>
      </div>
    );
};

export default Header;