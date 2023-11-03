import React, { useState, useEffect } from "react";
import ProductRow from "./ProductRow";
import axios from "axios";
import BasicSelect from "./sort";
import BasicPagination from "./Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("minToMax");
  const [page, setPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "minToMax") {
      return a.price - b.price;
    } else if (sortOrder === "maxToMin") {
      return b.price - a.price;
    } else if (sortOrder === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "HighToLow") {
      return b.rating.rate - a.rating.rate;
    } else if (sortOrder === "LowToHigh") {
      return a.rating.rate - b.rating.rate;
    }
    return 0;
  });

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = sortedProducts.slice(startIndex, endIndex);

  return (
    <div className="container main-content">
      <div className="row">
        <div className="col-sm-8">
          <h1>MY PRODUCTS</h1>
        </div>
        <div className="col-sm-4">
          <BasicSelect onChange={handleSortChange} />
        </div>
      </div>
        <br />
        <br />
      {productsToDisplay.map((product) => (
        <ProductRow
          key={product.id}
          category={product.category}
          description={product.description}
          id={product.id}
          images={product.image}
          price={product.price}
          title={product.title}
          rating={product.rating.rate}
          noOfRate={product.rating.count}
        />
      ))}
      <br/>
      <div className="row text-end">
        <div className="col-sm-5" >
          <h4>Go To Page</h4>
        </div>
        <div
        className="col-sm-7"
        style={{ fontSize: "large" }}
       >
        <BasicPagination
          count={Math.ceil(sortedProducts.length / productsPerPage)}
          onChange={handlePageChange}
        />
      </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductList;
