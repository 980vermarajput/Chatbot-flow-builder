import React from "react";

interface HeaderProps {
  onSave: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSave }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-10 py-4 flex items-center justify-end shadow-sm min-h-[50px]">
      <button
        onClick={onSave}
        className="bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
        style={{ padding: "8px 32px", fontSize: "15px", marginRight: "40px" }}
      >
        Save Changes
      </button>
    </header>
  );
};

export default Header;
