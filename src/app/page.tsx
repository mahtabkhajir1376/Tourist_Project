import Header from "@/components/Header";
import Category from "@/components/Category";
import Banner from "@/components/Banner";
import "./globals.css";
import Options from "@/components/Options";


export default function Home() {
  return (
    <main className="font-iransans">
    <Header/>
    <Category/>
    <Banner/>
    <Options/>
    </main>
  );
}
