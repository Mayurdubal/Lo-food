import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
  product_name: string;
  status: string;
  pincode: number;
  area: string;
  created_at: string;
}

const UseDashboard = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (city: string) => {
    const res = await axios.get(
      `http://localhost:3000/v1/api/blinkit/products?location=${city}&page=1&limit=20`
    );
    setData(res.data.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts("mumbai");
  }, []);

  return { data, isLoading };
};
export default UseDashboard;
