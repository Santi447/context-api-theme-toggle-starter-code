import {useTheme} from "../contexts/ThemeContext";
export default function ToggleButton({onClickFunction}) {
  const { theme,toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
    >
      Toggle Theme
    </button>
  );
}