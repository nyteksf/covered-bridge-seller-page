import clsx from "clsx";

const PropertyVisitDetailsList = ({ details = [], title, className }) => {

  return (
    <section className={clsx("w-full flex justify-center mb-1", className)}>
      <div className="w-full max-w-[616px] text-left border-l-[4px] border-[#007e7e] pl-4">
        <h3 className="font-montserrat font-bold text-lg mb-3 tracking-[0.1px]">
          {title}
        </h3>
        <ul className="list-none pl-0 space-y-1">
          {details.map((item, idx) => (
            <li
              key={idx}
              className="font-lato text-[#333] -tracking-[0.1px] w-full"
            >
              <span>{item.text}</span>
              {item.phone && (
                <>
                  {" "}
                  <a
                    href={`tel:${item.phone}`}
                    className="text-[#007e7e] hover:text-[#0cc] ml-1"
                  >
                    {item.phone}
                  </a>
                  .
                </>
              )}
              {item.url && (
                <>
                  {" "}
                  <a
                    href={item.url}
                    className="text-[#007e7e] hover:text-[#0cc] ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label || "(more info)"}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PropertyVisitDetailsList;
