import { FirstBox } from "@/components/main";  
import { MainLayout } from "@/layouts";  
  
export default function Dashboard() {  
  return (  
    <>  
      <MainLayout>  
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:gap-4 gap-10 my-6 md:my-10">  
          <FirstBox />  
          <div className="lg:col-span-2">  
          </div>  
        </div>  
      </MainLayout>  
    </>  
  );  
}