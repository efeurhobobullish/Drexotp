import { Header } from '@/components/auth';
import { Pattern } from '@/components/ui';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Pattern>
        <Header />
        <main className="py-10 mx-auto md:w-[480px] w-[90%]">
        {children}
        </main>
      </Pattern>
    </>
  )
}