import Header from "@/components/landing/Header";
import Category from "@/components/landing/Category";
import Banner from "@/components/landing/Banner";
import  Footer from "@/components/Footer";
import WhatModelDoYouWant from "@/components/landing/WhatModelDoYouWant";
import SwiperTourabroad from "@/components/landing/SwiperTourabroad";
import PopularTourSwiper from "@/components/landing/PopularTourSwiper";
import SpecialdiscountSwiper from "@/components/landing/SpecialdiscountSwiper";
import Options from "@/components/landing/Options";
import TourGallary from "@/components/landing/TourGallary";

import "./globals.css";


export default function Home() {
  return (
    <main className="font-iransans" >
    <Header/>
    <Category/>
    <Banner/>
    <PopularTourSwiper/>
    <SpecialdiscountSwiper/>
    <Options/>
    <WhatModelDoYouWant/>
    <SwiperTourabroad/> 
    <TourGallary/>
    <Footer />
    </main>
  );
}
