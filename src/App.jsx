import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { SearchProvider } from './components/context/SearchContext/SearchContext';
import { LanguageProvider } from './components/context/LanguageContext/LanguageContext';
import { TransitionProvider } from './components/context/TransitionContext/TransitionContext';
import { useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'sonner';
import { forceChakraDarkTheme } from './utils/utils';
import { toastStyles } from './utils/customTheme';
import { Flex, Spinner } from '@chakra-ui/react';

import DisplayHeader from './components/landing/DisplayHeader/DisplayHeader';
import Header from './components/navs/Header';
import Sidebar from './components/navs/Sidebar';
import Search from './components/common/Misc/Search';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const ShowcasePage = lazy(() => import('./pages/ShowcasePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));

function AppContent() {
  const location = useLocation();

  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/showcase') return 'showcase';
    return null;
  };

  const isCategoryPage = location.pathname.match(/^\/[^/]+\/[^/]+$/);

  return (
    <>
      {!isCategoryPage && <DisplayHeader activeItem={getActiveItem()} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense
              fallback={
                <Flex justify="center" align="center" h="100vh">
                  <Spinner size="xl" />
                </Flex>
              }
            >
              <LandingPage />
            </Suspense>
          }
        />
                <Route
          exact
          path="/showcase"
          element={
            <Suspense
              fallback={
                <Flex justify="center" align="center" h="100vh">
                  <Spinner size="xl" />
                </Flex>
              }
            >
              <ShowcasePage />
            </Suspense>
          }
        />
        <Route
          path="/:category/:subcategory"
          element={
            <LanguageProvider>
              <TransitionProvider>
                <main className="app-container">
                  <Header />
                  <section className="category-wrapper">
                    <Sidebar />
                    <Suspense
                      fallback={
                        <Flex justify='center' align='center' h='100vh'>
                          <Spinner size='xl' />
                        </Flex>
                      }
                    >
                      <CategoryPage />
                    </Suspense>
                  </section>
                  <Toaster
                    toastOptions={toastStyles}
                    position="bottom-right"
                    visibleToasts={1}
                  />
                </main>
              </TransitionProvider>
            </LanguageProvider>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  useEffect(() => {
    forceChakraDarkTheme();
  }, []);

  return (
    <Router>
      <SearchProvider>
        <Search />
        <AppContent />
      </SearchProvider>
    </Router>
  );
}
