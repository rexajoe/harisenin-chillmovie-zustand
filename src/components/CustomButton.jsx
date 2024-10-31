import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ label, icon, className = "", to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-full p-2 mt-1 rounded-3xl bg-black outline outline-[1px] outline-[#E7E3FC3B] text-white text-center ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt={label || "Icon"} // Gunakan label sebagai fallback untuk alt text
          className="absolute left-[50px] sm:left-[65px] md:left-[75px] lg:left-[100px] transform translate-y-1 w-4 h-4"
        />
      )}
      <span>{label}</span>
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
};

export default CustomButton;
