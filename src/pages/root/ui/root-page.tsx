import { Outlet } from 'react-router-dom';
import Loader from '@/shared/ui/Loader';
import { Suspense } from 'react';
import { Header } from '@/shared/ui/Header';

export function RootPage() {
  return (
    <div className='responsiveContainer'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Header />
        <main className='flex min-h-[calc(100vh-100px)] flex-col justify-center'>
          <Suspense fallback={<Loader size='lg' />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
