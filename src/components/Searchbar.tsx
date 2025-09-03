import magnifierIcon from "../assets/magnifier.svg"

export interface SearchbarProps {
    placeholder?: string;
    value: string;
    onChange: (searchTerm: string) => void;
    className?: string;
}

export function Searchbar ({ 
    placeholder,
    value,
    onChange,
    className="",
} : SearchbarProps) {
  return (
    <div className="sb-search">
        <div className="searchbar flex align-items-center">
            <img className="searchbar-icon" src={magnifierIcon} alt="Magnifier"></img>
          <input
            type="text"
            placeholder={placeholder ?? ""}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`search-input ${className ?? ""}`}
          />
        </div>
      </div>
  )
}

export default Searchbar
