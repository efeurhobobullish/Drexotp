import { Footer, Hero } from "@/components/main";
import { MainLayout } from "@/layouts";

export default function Home() {
  return (
    <>
        <MainLayout>
            <Hero />
        </MainLayout>
        <Footer />
    </>
  )
}