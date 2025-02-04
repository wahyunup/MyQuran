import { CardSurahProps } from "@/components/type";

const CardSurah = ({ asma, nama, nomor, handleIsOpen }: CardSurahProps) => {
  return (
    <div onClick={handleIsOpen} className="odd:bg-slate-50  py-7 gap-2 flex justify-between px-10 cursor-pointer">
      <div className="flex gap-2 cursor-text">
        <h1>{nomor}.</h1>
        <p>{nama}</p>
      </div>
      <h1>{asma}</h1>
    </div>
  );
};

export default CardSurah;
