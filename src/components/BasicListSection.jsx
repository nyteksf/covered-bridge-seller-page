import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faLink } from "@fortawesome/free-solid-svg-icons";
import { isValidElement } from "react";

const iconMap = { pdf: faFilePdf, link: faLink };
const makeSlug = (txt) =>
  txt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 40);

const BasicListSection = ({
  title,
  items = [],
  className = "",
  showBullets = null /* ← NEW prop (null = default bullets) */,
}) => {
  /* normalise any input type ------------------------------------------------ */
  const list = items.map((item, idx) => {
    // Plain string
    if (typeof item === "string") {
      return { id: `s-${makeSlug(item)}-${idx}`, node: item };
    }

    // Object with icon and/or URL
    if (typeof item === "object" && !isValidElement(item)) {
      const { text, type, url } = item;
      const icon = iconMap[type] ?? null;

      const node = url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-[#333] transition-all duration-250 hover:underline hover:text-[#0cc]"
        >
          <span className="group-hover:text-[#0cc] transition-all duration-250">{text}</span>
          {icon && (
            <span className="ml-1 text-[#333] group-hover:text-[#0cc]">
              (
              <FontAwesomeIcon
                icon={icon}
                className="text-[#007e7e] ml-[1px]"
              />
              )
            </span>
          )}
        </a>
      ) : (
        <>
          <span className="text-[#333] hover:underline font-semibold transition-all duration-250">{text}</span>
          {icon && (
            <span className="ml-1 text-[#333]">
              (
              <FontAwesomeIcon
                icon={icon}
                className="text-[#007e7e] ml-[1px]"
              />
              )
            </span>
          )}
        </>
      );

      return { id: `o-${idx}`, node };
    }

    // JSX node already passed
    if (isValidElement(item)) {
      return { id: `x-${idx}`, node: item };
    }

    // Invalid
    return { id: `skip-${idx}`, node: null };
  });

  /* choose list style ------------------------------------------------------- */
  const ulClasses = clsx(
    showBullets ? "list-disc pl-5" : "list-none pl-1",
    "space-y-1"
  );

  return (
    <section className={clsx("w-full flex justify-center mb-1", className)}>
      <div className="w-full max-w-[616px] text-left border-l-[4px] border-[#007e7e] pl-4">
        <h3 className="font-montserrat font-bold text-lg mb-3 tracking-[0.1px]">
          {title}
        </h3>

        <ul className={clsx(ulClasses, "w-full")}>
          {list.map(({ id, node }) =>
            node ? (
              <li
                key={id}
                className="font-lato text-[#333] -tracking-[0.1px] w-full"
              >
                {node}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </section>
  );
};

export default BasicListSection;
