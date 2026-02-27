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
];

const promoProducts = [
  {
      "name": "Café en grano - Origen Huila 250g",
      "price": "18000",
      "relevantInfo": "72",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café molido - Origen Nariño 250g",
      "price": "18500",
      "relevantInfo": "74",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café en grano - Origen Antioquia 340g",
      "price": "24000",
      "relevantInfo": "70.6",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café molido - Origen Sierra Nevada 500g",
      "price": "32000",
      "relevantInfo": "64",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café en grano - Blend Especial 1kg",
      "price": "58000",
      "relevantInfo": "58",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café molido - Descafeinado 250g",
      "price": "20000",
      "relevantInfo": "80",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café en grano - Tostión Media 500g",
      "price": "30000",
      "relevantInfo": "60",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café molido - Tostión Oscura 340g",
      "price": "25000",
      "relevantInfo": "73.5",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café en grano - Orgánico 500g",
      "price": "35000",
      "relevantInfo": "70",
      "imageSrc": "/coffee-bag.png"
    },
    {
      "name": "Café molido - Premium Reserva 250g",
      "price": "22000",
      "relevantInfo": "88",
      "imageSrc": "/coffee-bag.png"
    }
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
