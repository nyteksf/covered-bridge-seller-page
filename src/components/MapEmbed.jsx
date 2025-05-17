export default function MapEmbed({ lat = 34.9697, lng = -106.6153, zoom = 16 }) {
    const src = `https://regrid.com/embed/map?lat=${lat}&lng=${lng}&zoom=${zoom}&basemap=satellite`;
  
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg border">
        <iframe
          title="Parcel Map"
          src={src}
          className="w-full h-full"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  