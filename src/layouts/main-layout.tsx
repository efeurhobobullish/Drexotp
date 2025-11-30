import { Header } from "@/components/main";
import { Pattern } from "@/components/ui";

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Pattern>
        <Header />
        <main className="layout">{children}</main>
      </Pattern>
     
    </>
  );
}