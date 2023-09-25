import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import OrderListPage from "./components/OrderListPage/OrderListPage";
import OrderPage from "./components/OrderPage/OrderPage";
import Container from './containers/Container';

function App() {
  return (
    <Container>
    {/* <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/OrderListPage" element={<OrderListPage/>}/>
        <Route path="/OrderPage/:id" element={<OrderPage/>}/>

      </Routes>

  

    </div>
    </BrowserRouter> */}
    </Container>
  );
}

export default App;
