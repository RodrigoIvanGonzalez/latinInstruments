import {productsData} from "./Data";

const Products = () => {
  const mostSell = productsData.filter(product => product.mostSell === true);

  return (
    <>
      <section className="m-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl text-white-warm font-bold mb-12">
            LOS PRODUCTOS MÁS VENDIDOS
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
          {mostSell.map((data) => (
            <div
              key={data.id}
              className="bg-white-warm shadow-card rounded-lg p-4 flex flex-col items-center space-y-3 h-[350px] w-[220px]"
            >

              <div className="aspect-w-3 aspect-h-4 w-full">
                <img
                  src={data.image}
                  alt={data.name}
                  className="object-cover rounded-md"
                />
              </div>

              <h3 className="font-bold text-black-deep text-center">{data.name}</h3>
              <p className="text-sm text-gray-intermediate text-center">
                {data.description}
              </p>

              <div className="flex flex-col items-center justify-between mt-4 space-y-2">
      <span className="text-xl font-bold text-gold-metallic">$ {data.price}</span>
      <button className="bg-burgundy-dark text-white-warm px-4 py-2 rounded-lg hover:bg-gold-metallic hover:text-black-deep transition">
        Comprar
      </button>
    </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Products