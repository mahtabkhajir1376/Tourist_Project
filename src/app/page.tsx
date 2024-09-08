import Header from "@/components/(main)/landing/Header";
import Category from "@/components/(main)/landing/Category";
import Banner from "@/components/(main)/landing/Banner";
import  Footer from "@/components/(main)/Footer";
import WhatModelDoYouWant from "@/components/(main)/landing/WhatModelDoYouWant";
import SwiperTourabroad from "@/components/(main)/landing/SwiperTourabroad";
import PopularTourSwiper from "@/components/(main)/landing/PopularTourSwiper";
import SpecialdiscountSwiper from "@/components/(main)/landing/SpecialdiscountSwiper";
import Options from "@/components/(main)/landing/Options";
import TourGallary from "@/components/(main)/landing/TourGallary";

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
