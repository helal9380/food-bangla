/** @format */
import { useEffect, useState } from "react";

const useMenu = () => {
  const [populer, setPopuler] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setPopuler(data);
        setLoading(false)
      });
  }, []);
  return [populer, loading]
};
export default useMenu;
