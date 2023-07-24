import React from 'react';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Preloader from '../../UI/Preloader/Preloader';

export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>{component()}</Suspense>
    </BrowserRouter>
  );
