import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Spinner from './components/ui/spinner/Spinner.tsx';
const App = lazy(() => import('./components/App.tsx'));
const Background = lazy(() => import('./components/ui/background/Background.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <Background />
      <App />
    </Suspense>
  </StrictMode>,
)
