import Header from "@/components/Header";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import "./globals.css";
import Options from "@/components/Options";
import TourGallary from "@/components/TourGallary";
import PopularTourSwiper from "@/components/PopularTourSwiper";
import Footer from "@/components/Footer";
import SpecialdiscountSwiper from "@/components/SpecialdiscountSwiper";
export default function Home() {
  return (
    <main className="font-iransans">
      <Header />
      <Category />
      <Banner />
      <PopularTourSwiper />
      <SpecialdiscountSwiper />
      <Options />
      <h1 className="w-[86%] my-0 mx-auto text-[28px] py-8">
        شهر های محبوب رو دیدی؟
      </h1>
      <TourGallary />
      <Footer />
    </main>
  );
}
