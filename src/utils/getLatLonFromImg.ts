import exifr from "exifr";

export default async function getLatLonFromImg(imageUrl: string) {
  try {
    const img = await fetch(imageUrl).then((res) => res.blob());
    // extracts latitude & longitude
    const exifData = await exifr.gps(img);
    console.log("GPS Data:", exifData);
    if (exifData) return { lat: exifData.latitude, lon: exifData.longitude };
  } catch (error) {
    console.error("Failed to read EXIF data", error);
  }
}
