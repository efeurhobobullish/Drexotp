import { FirstBox } from "@/components/main";
import { MainLayout } from "@/layouts";

interface MiniLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function MiniLayout({ children, title }: MiniLayoutProps) {
  return (
    <>
      <MainLayout>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 md:gap-4 my-6 md:my-10">
          <div className="hidden md:block">
            <FirstBox />
          </div>
          <div className="lg:col-span-2 pb-20 md:pb-0">
            {title && (
              <h3 className="text-xl font-space uppercase font-bold mb-4">
                {" "}
                {title}
              </h3>
            )}
            {children}
          </div>
        </div>
      </MainLayout>
    </>
  );
}