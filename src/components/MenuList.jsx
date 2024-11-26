import { useState } from "react"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {productsData} from "./Data";

const MenuList = () => {

  const [ isOpen, setIsOpen] = useState(false)
  const productGuitar = productsData.filter(product => product.type === 'Guitarra');
  return (
    <section className=" ">

      <div className="relatice flex flex-col items-center w-[340px] h-[340px] rounded-lg">
        <button onClick={()=> setIsOpen((prev)=> !prev)} className="bg-blue-400 p-4 w-full flex items-center text-black justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white ">
          guitarras
          {!isOpen ? (
            <ExpandMoreIcon />
          ) : (
          <ExpandLessIcon />
        )}
          </button>

          {isOpen && <div className="bg-blue-400 top-20 flex flex-col items-start rounded-lg p-2 w-full ">
            {productGuitar.map((product, i) =>(
              <div className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" key={i} >
                <h3 className="font-bold">{product.type} {product.brand}</h3>
              </div>
            ))}
          </div>
          }

      </div>

    </section>
  )
}

export default MenuList