export default function createDriveDownloadUrl(viewUrl) {
  // Extract the file ID from the view URL
  const fileId = viewUrl.match(/\/d\/([a-zA-Z0-9_-]+)\//)[1];

  // Construct the direct download URL
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return downloadUrl;
}