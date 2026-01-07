import { MdOutlineClose } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
const AdminModal = ({ children, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const directedFromGallery = location?.pathname?.includes("gallery");
  const directedFromPublication = location?.pathname?.includes("publication");

  //
  const closeModal = (e) => {
    if (e.target.closest(".modalCard")) return;
    if (directedFromGallery) {
      navigate("/admin/gallery");
      return;
    }
    if (directedFromPublication) {
      navigate("/admin/publication");
      return;
    }
    navigate(-1);
  };

  //
  const handleButtonCloseClick = () => {
    if (directedFromGallery) {
      navigate("/admin/gallery");
      return;
    }
    if (directedFromPublication) {
      navigate("/admin/publication");
      return;
    }
    navigate(-1);
  };
  return (
    <div
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-[#1d1d1d]/30 backdrop-blur-[4px]"
      onClick={closeModal}
    >
      <div className="modalCard max-h-full w-auto max-w-full overflow-y-auto overflow-x-hidden rounded-md bg-white">
        <div className="flex items-center justify-between gap-10 border-b border-gray-200/70 px-3 py-3 sm:px-5">
          <h2 className="text-lg font-semibold text-[#1d1d1d]">{title}</h2>
          <button
            className="text-2xl text-red-500"
            onClick={handleButtonCloseClick}
          >
            <MdOutlineClose />
          </button>
        </div>
        <PerfectScrollbar className="max-h-[calc(100vh-100px)]">
          {children}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default AdminModal;
