"use client";
import { useFavorites } from "@/context/FavoriteContext";

const Home = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Surah Favorit</h1>
      {favorites?.length === 0 ? (
        <p className="text-gray-500">Belum ada surah yang disimpan.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {favorites?.map((surah) =>
            surah ? (
              <div key={surah.nomor} className="border p-4 rounded-md shadow-md">
                <h2 className="text-xl font-semibold">{surah.nama}</h2>
                <p className="text-gray-500">{surah.asma}</p>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
