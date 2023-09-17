import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopularProduct from "./sections/PopularProduct";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => (
  <main className="relative">
    <nav>
      <Nav />
    </nav>
    <section className="x1:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8 ">
      <Footer />
    </section>
  </main>
);
export default App;
