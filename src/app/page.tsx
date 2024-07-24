import Header from "@/components/Header";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import  Footer from "@/components/Footer";
import WhatModelDoYouWant from "@/components/WhatModelDoYouWant";
import SwiperTourabroad from "@/components/SwiperTourabroad";

import "./globals.css";


export default function Home() {
  return (
    <main className="font-iransans" >
    <Header/>
    <Category/>
    <Banner/>
    <SwiperTourabroad/> 
    <WhatModelDoYouWant/>
    <Footer />
    </main>
  );
}
