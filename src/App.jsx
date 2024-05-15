import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import Pagination from './components/Pagination';
import Product from './components/Product';


function App() {

  const [data, setData] = useState({products: [], total: 0});
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=10&skip=${page*10}`)
    .then((response) => setData(response.data))
  }, [page])


  const pageChangeHandler = (pageNumber) => {
    setPage(pageNumber);
  }

  return (
    <>
      <div className='text-3xl mb-3'> Pagination</div>
      <Product products={data.products} />
      <Pagination count={data.total/10} handlePageChange={pageChangeHandler} />
    </>
  )
}

export default App
