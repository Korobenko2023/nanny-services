import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const NanniesPage = lazy(() => import('./pages/Nannies/NanniesPage'));
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ); 
};
  