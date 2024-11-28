import { useState } from "react";
import  { AnimatePresence, motion } from 'framer-motion';
import { productsData } from './Data'

const Dropdownmenu = () => {
  return(
    <div className=" hidden h-96 justify-around bg-transparent px-3 py-1 md:flex  ">
      <FlyoutLink href="#" FlyoutContent = {GuitarContent}>
        Guitarras
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent = {BassContent}>
        Bajos
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent = {DrumsContent}>
        Baterias
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent = {KeysContent}>
        Teclados
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent = {SoundContent}>
        Sonido
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent = {AccesoriesContent}>
        Accesorios
      </FlyoutLink>
    </div>

)
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return(
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" relative h-fit w-fit "> 
      <a href={href} className=" relative text-white "> { children }
        <span 
        style={{ 
          transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
        className=" absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out " />
      </a>
      <AnimatePresence>
      {showFlyout && ( 
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        style={{ x: '-50%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className=" absolute left-1/2 top-12 bg-burgundy-dark text-black ">

          <div className=" absolute -top-6 left-0 right-0 h-6 bg-transparent"/>
          <div className=" absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white  "/>
          <FlyoutContent />
        </motion.div> ) }
        </AnimatePresence>
    </div>
  )


}

const GuitarContent = () =>{ 

  const productGuitar = productsData.filter( guitar => guitar.type === "Guitarra" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productGuitar.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}

const BassContent = () =>{ 

  const productBass = productsData.filter( bass => bass.type === "Bajo" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productBass.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}

const DrumsContent = () =>{ 

  const productDrums = productsData.filter( drums => drums.type === "Bateria" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productDrums.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}

const KeysContent = () =>{ 

  const productKeys = productsData.filter( key => key.type === "Teclado" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productKeys.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}

const AccesoriesContent = () =>{ 

  const productAccesories = productsData.filter( Accesory => Accesory.type === "Accesorios" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productAccesories.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}

const SoundContent = () =>{ 

  const productSound = productsData.filter( sound => sound.type === "Sonido" )

  return(
    <div className=" w-64  bg-white p-6 shadow-xl ">
      {productSound.map((product, i) => (
        <div key={i} className="mb-6 space-y-3">
          <h3><a href="">{product.brand}</a></h3>
        </div>
      ))}
    </div>
  )
}


export default Dropdownmenu


