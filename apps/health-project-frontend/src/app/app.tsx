import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { HomePage } from './pages/home/home';
import { Layout } from './pages/layout/layout';
import { EditPage } from './pages/edit/edit';
import { Path } from './utils/path';
// import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={Path.edit} element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
