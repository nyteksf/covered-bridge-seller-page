export default function MapEmbed({
  src = `https://regrid.com/embed/map?lat=34.9697&lng=-106.6153&zoom=16&basemap=satellite`
}) {

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg border">
      <iframe
        loading="lazy"
        height="520px"
        width="100%"
        src={src}
        style={{ border: "none" }}
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
