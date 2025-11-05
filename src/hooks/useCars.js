import { useState, useEffect } from "react";
import carsData from "../data/cars.json";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        // Simulasi delay untuk loading effect
        await new Promise((resolve) => setTimeout(resolve, 500));
        setCars(carsData);
        setError(null);
      } catch (err) {
        setError("Failed to load cars data");
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const getCarById = (id) => {
    return cars.find((car) => car.id === parseInt(id));
  };

  const getCarsByType = (type) => {
    return cars.filter((car) => car.merk.toLowerCase() === type.toLowerCase());
  };

  const getFeaturedCars = (limit = 3) => {
    return cars.filter((car) => car).slice(0, limit);
  };

  const searchCars = (query) => {
    return cars.filter(
      (car) =>
        car.nama_mobil.toLowerCase().includes(query.toLowerCase()) ||
        car.merk.toLowerCase().includes(query.toLowerCase()) ||
        car.model.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    cars,
    loading,
    error,
    getCarById,
    getCarsByType,
    getFeaturedCars,
    searchCars,
  };
};
