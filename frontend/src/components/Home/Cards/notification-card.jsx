import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { PiLinkDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NotificationCard = ({
  driveLink,
  image,
  title,
  description,
  ...props
}) => {
  const [openPreview, setOpenPreview] = useState(false);

  const handlePreviewOpen = () => setOpenPreview(true);
  const handlePreviewClose = () => setOpenPreview(false);

  return (
    <>
      {/* Card Container */}
      <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col h-full flex-1">
        {/* Image Container with Preview Click */}
        <div
          className="relative h-48 w-full overflow-hidden"
          onClick={handlePreviewOpen}
          {...props}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Container */}
        <div
          onClick={handlePreviewOpen}
          className="p-4 flex flex-col flex-grow flex-1"
        >
          {/* Title with Arrow Icon */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
              {title}
            </h3>
            <KeyboardBackspaceIcon
              className="text-gray-500 rotate-180 transition-transform group-hover:translate-x-1"
              fontSize="medium"
            />
          </div>

          {/* Description */}
          {description && (
            <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
              {description}
            </p>
          )}

          {/* Drive Link */}
          {driveLink && (
            <div className="flex justify-end mt-auto">
              <Link
                to={`https://drive.google.com/file/d/${driveLink}/view`}
                target="_blank"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <PiLinkDuotone className="text-xl" />
              </Link>
            </div>
          )}
        </div>

        {/* Full Image Preview Dialog */}
        <Dialog
          open={openPreview}
          onClose={handlePreviewClose}
          maxWidth="md"
          fullWidth
        >
          <DialogContent className="relative p-0">
            <IconButton
              aria-label="close"
              onClick={handlePreviewClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={image}
              alt={title}
              className="w-full max-h-[90vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default NotificationCard;
