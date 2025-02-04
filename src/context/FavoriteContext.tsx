"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { QuranSurah } from "@/app/(page)/type";
import { FavoriteContextType } from "./type";

const FavoriteContext = createContext<FavoriteContextType | null>(
  null
);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<QuranSurah[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    console.log("Data dari localStorage:", storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (surah: QuranSurah) => {
    if (!surah || !surah.nomor) return;

    let updatedFavorites;
    if (favorites.some((fav) => fav.nomor === surah.nomor)) {
      updatedFavorites = favorites.filter((fav) => fav.nomor !== surah.nomor);
    } else {
      updatedFavorites = [...favorites, surah];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};