import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/PageNotFound";
import { Header } from "./components/Header";
import useFetch from "./pages/hook/useFetch";

const App = () => {
  const [searchValue, setSearchValue] = useState("all");
  // `search/shows?q=${searchValue}`
  const { data, loading, error } = useFetch(`/search/shows?q=${searchValue}`);
  const cachedData = useMemo(() => data, [data]);
  const fetchApiConfig = async () => {
    const { data } = await useFetch(`/search/shows?q=${searchValue}`);
    setData(data);
  };
  useEffect(() => {
    if (!cachedData) {
      fetchApiConfig();
    }
  }, [cachedData, fetchApiConfig]);

  return (
    <>
      <BrowserRouter>
        <Header setSearchValue={setSearchValue} />
        {data && data.length === 0 && (
          <p style={{ color: "white" }}>No results found.</p>
        )}
        {loading && <p style={{ color: "white" }}>Loading...</p>}
        {!loading && !data && <p>Error fetching data.</p>}
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/shows/:id" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
