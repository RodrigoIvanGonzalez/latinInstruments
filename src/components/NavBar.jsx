import Logo from '../assets/logoLI.webp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import SearchBar from './SearchBar';
const NavBar = () => {
  return (
    <>
      <nav className='flex justify-between items-center bg-[#121212] '>

        <div className="flex gap-10 items-center basis-3/4">
          <div className="w-36">
            <a href="#">
              <img src={Logo} alt="Latin Instrument" />
            </a>
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>


        <div className="flex justify-between items-center">
          <div className="flex">
            <PersonOutlineIcon sx={{ color: '#f9f9f9', margin: '10px' }} />
            <div className="font-bold text-[#f9f9f9]">Hola!
              <a href="" className='text-[#f9f9f9]'>Inicia sesion</a>
            </div>
            <a href="" className='text-[#f9f9f9]'>O podes registrarte</a>
          </div>

          <div className="basis-20">
            <div className="relative top-1 left-8 h-[24px] w-[24px] ">
              <ShoppingCartOutlinedIcon sx={{ color: '#f9f9f9' }} />
            </div>
          </div>
        </div>

      </nav>

    </>
  )
}

export default NavBar