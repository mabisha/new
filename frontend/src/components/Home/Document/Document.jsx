const Thumbnail = ({ pdfUrl }) => {
  const onDocumentLoadSuccess = () => {
    window.open(
      pdfUrl,
      "_blank"
    );
  };

  return (
    <div>
      <button onClick={onDocumentLoadSuccess}>Open pdf</button>
    </div>
  );
};

export default Thumbnail;
