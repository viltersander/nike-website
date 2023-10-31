import { CustomerReview, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections"
import Navbar from "./components/Navbar";

const App = () => {
  return (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section id="products" className="padding">
      <PopularProducts />
    </section>
    <section id='about-us' className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding-x py-10">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section id='contact-us' className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}

export default App
