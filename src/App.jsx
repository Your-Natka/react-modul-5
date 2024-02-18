import { Route, Routes } from 'react-router-dom';

//localhost:5173/
//localhost:5173/about
//localhost:5173/profile

export const App = () => {
  return (
    <div>
      <h1>Routing in React</h1>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </div>
  );
};
