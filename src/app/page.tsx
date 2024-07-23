import Header from "@/components/landing/Header";
import Category from "@/components/landing/Category";
import Banner from "@/components/landing/Banner";
import "./globals.css";
import Options from "@/components/landing/Options";
import TourGallary from "@/components/landing/TourGallary";
import PopularTourSwiper from "@/components/landing/PopularTourSwiper";
import Footer from "@/components/Footer";
import SpecialdiscountSwiper from "@/components/landing/SpecialdiscountSwiper";
import WhatModelDoYouWant from "@/components/landing/WhatModelDoYouWant";
export default function Home() {
  return (
    <main className="font-iransans">
      <Header />
      <Category />
      <Banner />
      <PopularTourSwiper />
      <SpecialdiscountSwiper />
      <Options />
      <WhatModelDoYouWant/>
      <h1 className="w-[86%] my-0 mx-auto text-[28px] py-8">
        شهر های محبوب رو دیدی؟
      </h1>
      <TourGallary />
      <Footer />
    </main>
  );
}
