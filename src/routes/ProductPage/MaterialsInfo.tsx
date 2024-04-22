import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

type MaterialsInfoProps = {
  label: string;
};

const MaterialsInfo = ({ label }: MaterialsInfoProps) => {
  const [isMaterialInfoOpen, setIsMaterialInfoOpen] = useState<boolean>(false);

  const moreInformartionHandle = () => {
    setIsMaterialInfoOpen((prev) => !prev);
  };

  return (
    <div className="p-4">
      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={moreInformartionHandle}
      >
        <strong>{label}</strong>
        <FaArrowLeft
          size={16}
          className={`${isMaterialInfoOpen && "rotate-[-90deg]"}`}
        />
      </div>
      {isMaterialInfoOpen && (
        <p className="pl-2 pt-2 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
          libero eros. Sed ac dictum ipsum, eget molestie elit. Quisque
          hendrerit enim id dui tincidunt gravida. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Proin semper
          purus dapibus est ullamcorper, a varius metus pharetra.
        </p>
      )}
    </div>
  );
};

export default MaterialsInfo;
