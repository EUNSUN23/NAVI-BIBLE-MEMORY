import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/ui/Header';

function RootComponent() {
  return (
    <div className='responsiveContainer'>
      <div className='flex w-full flex-col items-center justify-center'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default RootComponent;
