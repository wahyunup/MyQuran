import { CardSurahProps } from "@/components/type";
import { BsXLg } from "react-icons/bs";

const PopUp = ({
  handleIsOpen,
  isOpen,
  nama,
  arti,
  asma,
  keterangan,
  type,
  audio,
}: CardSurahProps) => {
  const formattedKeterangan = keterangan
    ? keterangan.replace(/<i><i>/, '<span class="italic"></span>')
    : "";

  return (
    <div
      className={`inset-0 fixed bg-stone-500/20 z-[1] flex justify-center items-center px-5 ${isOpen}`}>
      <div className="bg-white p-8 w-[500px] rounded-lg">
        <div className="flex justify-end">
          <div className="hover:bg-red-100 hover:text-red-500 cursor-pointer  p-2 rounded-full">
            <BsXLg onClick={handleIsOpen} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center w-full justify-between pt-5">
            <div>
              <h1 className="font-semibold">
                {nama} |{" "}
                <span className="font-normal italic text-[13px]">{type}</span>
              </h1>
              <span className="text-slate-400 italic text-[14px]">
                "{arti}"
              </span>
            </div>
            <span>{asma}</span>
          </div>

          <p
            dangerouslySetInnerHTML={{ __html: formattedKeterangan }}
            className="text-justify text-[14px] lg:text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
