import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import ProductSection from "@/components/ProductSection";
import DailyMenu from "@/components/DailyMenu";
import Separator from "@/components/Separator";

const carouselItems = [
  {
    imageSrc: "/carrousel.png",
    title: "Conoce nuestra nueva sede",
    description: "Ven y visítanos en nuestro nuevo local, ubicado en Chapinero",
  },
  {
    imageSrc: "/carrousel.png",
    title: "Conoce nuestra nueva sede",
    description: "Ven y visítanos en nuestro nuevo local, ubicado en Chapinero",
  },
  {
    imageSrc: "/carrousel.png",
    title: "Conoce nuestra nueva sede",
    description: "Ven y visítanos en nuestro nuevo local, ubicado en Chapinero",
  },
  {
    imageSrc: "/carrousel.png",
    title: "Conoce nuestra nueva sede",
    description: "Ven y visítanos en nuestro nuevo local, ubicado en Chapinero",
  },
];

const promoProducts = [
  {
    imageSrc: "/coffee-bag.png",
    name: "Café tostado Altomayo molido 450g",
    price: "$45.000",
    relevantInfo: "$100/g",
  },
  {
    imageSrc: "/coffee-bag.png",
    name: "Café tostado Altomayo molido 450g",
    price: "$45.000",
    relevantInfo: "$100/g",
  },
  {
    imageSrc: "/coffee-bag.png",
    name: "Café tostado Altomayo molido 450g",
    price: "$45.000",
    relevantInfo: "$100/g",
  },
];

const methodProducts = [
  {
    imageSrc: "/coffee-maker.png",
    name: "Prensa francesa Color Negro 500ml",
    price: "$52.000",
    relevantInfo: "1 Unidad",
  },
  {
    imageSrc: "/coffee-maker.png",
    name: "Prensa francesa Color Negro 500ml",
    price: "$52.000",
    relevantInfo: "1 Unidad",
  },
  {
    imageSrc: "/coffee-maker.png",
    name: "Prensa francesa Color Negro 500ml",
    price: "$52.000",
    relevantInfo: "1 Unidad",
  },
];

const menuCategories = [
  { imageSrc: "/coffee.png", name: "Cafés" },
  { imageSrc: "/dessert.png", name: "Postres" },
  { imageSrc: "/drinks.png", name: "Sodas" },
  { imageSrc: "/breakfast.png", name: "Desayunos" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto mb-4 max-w-106.25 px-4">
        <section className="mt-8">
          <div>
            <h2 className="m-0 text-[51px] leading-12.5">Hola,</h2>
            <h2 className="m-0 text-[29px] font-light">Sebastián</h2>
          </div>
          <Carousel items={carouselItems} />
        </section>

        <Separator />

        <ProductSection title="Promociones" products={promoProducts} />

        <Separator />

        <ProductSection
          title="Métodos"
          description="Conoce y lleva nuestros métodos de extracción para disfrutar en casa"
          products={methodProducts}
        />

        <Separator />

        <DailyMenu
          title="Menú del día"
          description="Prueba nuestros deliciosos desayunos y acompáñalos con una tasa de tu café favorito"
          categories={menuCategories}
        />
      </main>
      <Footer />
    </>
  );
}
