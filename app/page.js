import Header from "./UI/Header";
import Hero from "./UI/Hero";
import Footer from "./UI/Footer.jsx";
export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen p-2">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
