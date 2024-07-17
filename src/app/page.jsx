// import components
import Banner from "./components/Banner";
import Pizza from "./components/Pizza";
import { pizzas } from "./data/data";

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-7 py-12">
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} key={pizza.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
