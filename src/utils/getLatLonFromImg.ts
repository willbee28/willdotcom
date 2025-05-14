import exifr from "exifr";

export type LonLatType = { lat: number; lon: number } | undefined;

export default async function getLatLonFromImg(imageUrl: string) {
  try {
    const img = await fetch(imageUrl).then((res) => res.blob());
    // extracts latitude & longitude
    const exifData = await exifr.gps(img);
    if (exifData) return { lat: exifData.latitude, lon: exifData.longitude };
  } catch (error) {
    console.error("Failed to read EXIF data", error);
  }
}
