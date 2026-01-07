import "./DetailBox.css";
import { Link } from "react-router-dom";
const DetailBox = (props) => {
  const { cardIcon, extraIcon, cardDetail, cardTitle, cardLink } = props;
  return (
    <div className="detail-box-container">
      <div className="detail-box-inner-div-icons">
        <span className="detail-box-icons-container">{cardIcon}</span>
        {extraIcon && (
          <Link to={cardLink} className="detail-box-extra-icons-container">
            {extraIcon}
          </Link>
        )}
      </div>
      <div className="detail-box-inner-div font-Montserrat font-semibold">
        {cardDetail}
      </div>
      <div style={{ zIndex: "10" }} className="font-semibold font-Montserrat">
        {cardTitle}
      </div>
      <div className="detail-box-clip-path-div"></div>
      <div className="detail-box-clip-path-div-two"></div>
      <div className="detail-box-clip-path-div-three"></div>
      <div className="detail-box-clip-path-div-four"></div>
    </div>
  );
};

export default DetailBox;
