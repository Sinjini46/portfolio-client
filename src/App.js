import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, setPortfolioData, ShowLoading } from "./redux/rootSlice";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  // Fetch portfolio data from the backend
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      // Replace the URL with your actual backend API endpoint
      const response = await axios.get(`${process.env.REACT_APP_SERVER || 'http://localhost:5000'}/api/portfolio/get-portfolio-data`);
      dispatch(setPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      console.error("Error fetching portfolio data", error);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
