import "./subTitle.css";
import { SUBTITLE_FIRST_LINE, SUBTITLE_SECOND_LINE } from "../../config";

export const SubTitle = () => {
  return (
    <>
      <div className="subTitle">
        <h6>
          {SUBTITLE_FIRST_LINE} <br /> {SUBTITLE_SECOND_LINE}
        </h6>
      </div>
    </>
  );
};
