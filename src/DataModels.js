import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

/**
 * Infinite list of cards component
 */
const DataModels = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);


  /**
   * React Call back to call the fetch data api on change of index and loading props.
   */
  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    //AXIOS API used to call an api to fetch the data
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
      })
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  /**
   * Call the fetchData API on component mount
   */

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  /**
   * callback rendered when the scroll reaches the end of the screen
   */
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default DataModels;
