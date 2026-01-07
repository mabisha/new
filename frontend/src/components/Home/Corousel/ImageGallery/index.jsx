import { useRef, useState } from "react";
import "../../../../styles/image-gallery.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";
const ImageGallery = ({ images }) => {
  const slideRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewInfo, setPreviewInfo] = useState(true);
  const onPrevClick = () => {
    slideRef.current.prepend(slideRef.current.lastElementChild);
  };
  const IMAGES = images?.imagelink;
  // const regex = /^(http|https):[/\\]{2}/;
  const hasDriveLink = images?.public_id.trim();
  const openPreview = (url) => {
    setPreviewImage(url);
    setPreviewInfo(false);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };
  const removePreviewInfo = () => {
    setPreviewInfo(false);
  };
  if (!images) {
    return null;
  }
  return (
    <div className="container" onClick={removePreviewInfo}>
      <div className="slide" ref={slideRef}>
        {IMAGES?.map((item, id) => (
          <div
            key={id}
            className="item bg-white"
            style={{
              backgroundImage: `url(${item?.url})`,
            }}
            onClick={() => openPreview(item?.url)}
          >
            <div className="content">
              <div className="name">{images?.title}</div>
              <div className="des">{images?.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-8 left-20 rounded-md  hover:bg-red-100 bg-gray-100 flex justify-center  bottom-4 absolute items-center">
        <button
          onClick={onPrevClick}
          className="prev flex justify-center items-center text-secondary"
        >
          <ArrowRightAltIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
      {hasDriveLink && (
        <Link
          className="absolute  bottom-4  rounded-md hover:bg-red-100 bg-gray-100 flex justify-center items-center w-8 h-8 left-10"
          to={images?.public_id}
          target="_blank"
        >
          <button
            onClick={onPrevClick}
            className="prev flex justify-center items-center text-secondary"
          >
            <OpenInNewIcon sx={{ fontSize: 20 }} />
          </button>
        </Link>
      )}
      {previewImage && (
        <div className="preview-overlay" onClick={closePreview}>
          <div className="preview-container h-[90vh] flex justify-center items-center">
            <img
              src={previewImage}
              alt="Preview"
              className="preview-image min-h-full"
            />
          </div>
        </div>
      )}
      {/* preview icon */}
      {previewInfo && (
        <div
          onClick={() => openPreview(IMAGES[1]?.url || IMAGES[0]?.url)}
          className="z-[1111] flex flex-col fixed  top-[40%] left-[40%]
            h-[150px]  w-[200px] justify-center items-center "
        >
          <div className="blog-video-btn">
            <AdsClickIcon className="text-secondary" sx={{ fontSize: 40 }} />
          </div>
          <div className="text-secondary mt-5 font-bold text-sm ">
            Click to preview image
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
