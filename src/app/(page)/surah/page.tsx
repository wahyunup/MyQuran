"use client";
import { useEffect, useState } from "react";
import CardSurah from "@/components/ui/Card/CardSurah";
import PopUp from "@/components/partials/PopUp/PopUp";
import { QuranSurah } from "../type";


const Surah = () => {
  const [datas, setDatas] = useState<QuranSurah[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleIsOpen = (surah: QuranSurah) => {
    setSelectedSurah(surah);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("https://api.npoint.io/99c279bb173a6e28359c/data")
      .then((res) => res.json())
      .then((responseData: QuranSurah[]) => {
        console.log("Fetched data:", responseData);
        setDatas(responseData);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-gray-500 animate-pulse">
            Memuat Surah ...
          </p>
        </div>
      ) : (
        datas.map((data) => (
          <CardSurah
          
            handleIsOpen={() => handleIsOpen(data)}
            key={data.nomor}
            nama={data.nama}
            nomor={data.nomor}
            asma={data.asma}
          />
        ))
      )}

      {isOpen && selectedSurah && (
        <PopUp handleIsOpen={() => setIsOpen(false)} audio={selectedSurah.audio} nama={selectedSurah.nama} arti={selectedSurah.arti} type={selectedSurah.type} asma={selectedSurah.asma} keterangan={selectedSurah.keterangan} isOpen={isOpen} />
      )}
    </div>
  );
};

export default Surah;

