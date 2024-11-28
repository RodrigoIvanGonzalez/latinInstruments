import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <section className="w-full px-8 py-12 -mt-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>

        <h3 className="text-4xl text-white-warm md:text-6xl font-semibold">
          Hagamos un poco de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-metallic to-white-warm">Ruido</span>
        </h3>
        <p className="text-base md:text-lg text-white-warm  my-4 md:my-6">
        Descubre la mejor selección de instrumentos musicales en un solo lugar. Ofrecemos las marcas más reconocidas y la calidad que los músicos merecen, desde principiantes hasta profesionales. Aquí encontrarás todo lo que necesitas para dar vida a tu pasión por la música.

¡Hagamos ruido! 
          <br />
          
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "https://cdn.pixabay.com/photo/2016/11/23/14/48/bowed-instrument-1853324_1280.jpg" },
  { id: 2, src: "https://cdn.pixabay.com/photo/2023/05/22/18/11/guitar-8011240_640.jpg" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2015/09/05/12/53/violin-924349_640.jpg"},
  { id: 4, src: "https://cdn.pixabay.com/photo/2017/09/28/14/58/piano-2795807_640.jpg"},
  { id: 5, src: "https://cdn.pixabay.com/photo/2014/05/21/15/47/piano-349928_640.jpg"},
  { id: 6, src: "https://cdn.pixabay.com/photo/2024/01/17/11/53/piano-8514284_640.jpg"},
  { id: 7, src: "https://cdn.pixabay.com/photo/2014/11/26/15/20/saxophone-546303_640.jpg"},
  { id: 8, src: "https://cdn.pixabay.com/photo/2020/02/20/18/00/harp-4865391_640.jpg"},
  { id: 9, src: "https://cdn.pixabay.com/photo/2019/04/10/23/54/instrument-4118588_640.jpg"},
  { id:10, src: "https://cdn.pixabay.com/photo/2014/01/17/09/57/drums-246840_640.jpg"},
  { id:11, src: "https://cdn.pixabay.com/photo/2021/06/23/11/32/trumpet-6358483_640.jpg"},
  { id:12, src: "https://cdn.pixabay.com/photo/2014/11/17/20/45/drum-535218_640.jpg"},
  { id:13, src: "https://cdn.pixabay.com/photo/2018/04/09/10/16/marching-3303729_640.jpg"},
  { id:14, src: "https://cdn.pixabay.com/photo/2017/08/09/12/57/ocarina-2614469_640.jpg"},
  { id:15, src: "https://cdn.pixabay.com/photo/2021/11/13/09/44/ukulele-6790888_640.jpg"},
  { id:16, src: "https://cdn.pixabay.com/photo/2016/11/23/15/36/close-up-1853572_640.jpg"},

];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;