<<<<<<< HEAD
import Header from "@/components/Header";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import TourCard from "@/components/TourCard";
=======
import Header from "@/components/landing/Header";
import Category from "@/components/landing/Category";
import Banner from "@/components/landing/Banner";
>>>>>>> 3ba96b236036d955e8c900707b3efcdaad987171
import  Footer from "@/components/Footer";
import WhatModelDoYouWant from "@/components/landing/WhatModelDoYouWant";
import SwiperTourabroad from "@/components/landing/SwiperTourabroad";
import PopularTourSwiper from "@/components/landing/PopularTourSwiper";
import SpecialdiscountSwiper from "@/components/landing/SpecialdiscountSwiper";
import Options from "@/components/landing/Options";

import "./globals.css";


export default function Home() {
  return (
    <main className="font-iransans" >
    <Header/>
    <Category/>
    <Banner/>
<<<<<<< HEAD
    <SwiperTourabroad/> 
    
=======
    <PopularTourSwiper/>
    <SpecialdiscountSwiper/>
    <Options/>
>>>>>>> 3ba96b236036d955e8c900707b3efcdaad987171
    <WhatModelDoYouWant/>
    <SwiperTourabroad/> 
    <Footer />
    </main>
  );
}
