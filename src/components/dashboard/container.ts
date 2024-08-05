import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
  product_name: string;
  status: string;
  pincode: number;
  area: string;
  created_at: string;
}

const UseDashboard = (city: string, page: number) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getProducts = async (city: string, page: number) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/v1/api/blinkit/products?location=${city}&page=${page}&limit=20`
      );
      const fetchedData = res.data.data.data;
      setData((prevData) => [...prevData, ...fetchedData]);
      setHasMore(fetchedData.length > 0);
    } catch (error) {
      console.error("Error fetching products:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(city, page);
  }, [city, page]);

  return { data, isLoading, hasMore };
};

export default UseDashboard;
