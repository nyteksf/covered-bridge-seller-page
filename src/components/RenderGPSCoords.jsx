import clsx from "clsx";

function RenderGPSCoords({ coords, title, className }) {
    console.log("title -> ", title)
    console.log("coords -> ", coords) 
    console.log("className -> ", className)
  return (
    <section className={clsx("w-full flex justify-center mb-1", className)}>
      <div className="w-full max-w-[616px] text-left border-l-[4px] border-[#007e7e] pl-4">
        <h3 className="font-montserrat font-bold text-lg mb-3 tracking-[0.1px]">
          {title}
        </h3>
        <ul className="list-disc pl-5">
          {coords.map(({ label, lat, lng, googleMapUrl }, idx) => (
            <li key={idx}>
              {label}: {lat}, {lng}{" "}
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007e7e] hover:text-[#0cc] ml-1"
              >
                (Google Map)
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RenderGPSCoords;
