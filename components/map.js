export default function GoogleMaps() {
  return (
    <iframe
      width="600"
      height="450"
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD2XUNuGXh51u7SC181gcxKqtT_uN_1_8I&q=Space+Needle,Seattle+WA`}
    ></iframe>
  );
}
