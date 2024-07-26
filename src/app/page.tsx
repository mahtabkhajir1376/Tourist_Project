import Header from "@/components/landing/Header";
import Category from "@/components/landing/Category";
import Banner from "@/components/landing/Banner";
import  Footer from "@/components/Footer";
import WhatModelDoYouWant from "@/components/showlist/WhatModelDoYouWant";
import SwiperTourabroad from "@/components/showlist/SwiperTourabroad";
import PopularTourSwiper from "@/components/landing/PopularTourSwiper";
import SpecialdiscountSwiper from "@/components/landing/SpecialdiscountSwiper";

import "./globals.css";


export default function Home() {
  return (
    <main className="font-iransans" >
    <Header/>
    <Category/>
    <Banner/>
    <PopularTourSwiper/>
    <SpecialdiscountSwiper/>
    <SwiperTourabroad/> 
    <WhatModelDoYouWant/>
    <Footer />
    </main>
  );
}
