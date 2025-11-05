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
    return cars.filter((car) => car.status === "tersedia").slice(0, limit);
  };

  const searchCars = (query) => {
    return cars.filter(
      (car) =>
        car.nama_mobil.toLowerCase().includes(query.toLowerCase()) ||
        car.merk.toLowerCase().includes(query.toLowerCase()) ||
        car.model.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getCarPrice = (car) => {
    const activePrice = car.harga_sewa?.find((price) => price.aktif);
    return activePrice ? activePrice.harga_per_hari : 0;
  };

  const getAllCarPrices = (car) => {
    if (!car.harga_sewa || !Array.isArray(car.harga_sewa)) {
      return [];
    }
    return car.harga_sewa.filter((price) => price.aktif === true);
  };

  const getLowestPrice = (car) => {
    const activePrices = car.harga_sewa?.filter((price) => price.aktif) || [];
    if (activePrices.length === 0) return 0;
    return Math.min(...activePrices.map((price) => price.harga_per_hari));
  };

  const getCarType = (car) => {
    if (car.kapasitas_penumpang >= 7) return "MPV";
    if (car.merk.toLowerCase().includes("jazz")) return "Hatchback";
    if (car.nama_mobil.toLowerCase().includes("terios")) return "SUV";
    return "Sedan";
  };

  return {
    cars,
    loading,
    error,
    getCarById,
    getCarsByType,
    getFeaturedCars,
    searchCars,
    getCarPrice,
    getAllCarPrices,
    getLowestPrice,
    getCarType,
  };
};
