import Header from "@/components/Header";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import "./globals.css";
import Options from "@/components/Options";
import TourGallary from "@/components/TourGallary";
import PopularTourSwiper from "@/components/PopularTourSwiper";

export default function Home() {
  return (
    <main className="font-iransans">
    <Header/>
    <Category/>
    <Banner/>
    <PopularTourSwiper/>
    <Options/>
    <h1 className="w-[86%] my-0 mx-auto text-[28px] py-8">شهر های محبوب رو دیدی؟</h1>
    <TourGallary/>
    </main>
  );
}
