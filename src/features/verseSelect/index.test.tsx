import { expect, test } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import RootComponent from '@/RootComponent.tsx';
import { HomePage } from '@pages/home';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@utils/test/render.tsx';
import { SERIES_DATA } from '@/msw/mockData.ts';
import Loader from '@/shared/ui/Loader';
import { getSeries } from '@features/verseSelect/api/getSeries';

test('renders series tabs with loaded data', async () => {
  const router = createMemoryRouter([
    {
      element: <RootComponent />,
      HydrateFallback: Loader,
      children: [
        {
          path: '/',
          element: <HomePage />,
          loader: getSeries,
        },
      ],
    },
  ]);

  render(<RouterProvider router={router} />);

  await waitFor(() => {
    SERIES_DATA.forEach(data => {
      expect(
        screen.getByRole('tab', { name: data.series_name, expanded: false }),
      ).toBeInTheDocument();
    });
  });
});
