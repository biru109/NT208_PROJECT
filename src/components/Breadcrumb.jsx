import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <div className="text-xl text-black mb-4 flex items-center flex-wrap gap-1 font-noto">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.to ? (
            <Link to={item.to} className="text-black hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-1">&gt;&gt;</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
