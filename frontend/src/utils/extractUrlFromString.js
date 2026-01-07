export function extractUrlFromImagelink(imagelink) {
  const jsonStringArray = imagelink?.split(',"');

  const urls = jsonStringArray.map((item) => {
    // Replacing escape characters and trimming unnecessary characters
    const cleanItem = item.replace(/\\"/g, '"').replace(/^"|"$/g, "");

    // Parsing JSON to extract URL
    const json = JSON.parse(cleanItem);
    return { url: json.url };
  });

  return urls ?? [];
}
