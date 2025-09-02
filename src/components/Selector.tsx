import { useState, useCallback, useEffect } from 'react';

export interface SelectorProps {
    onSelectionChange?: (selection: string) => void;
    className?: string;
    preselectedValue?: string | null;
}

export function Selector ({ 
    onSelectionChange, 
    className = "",
    preselectedValue
}: SelectorProps) {
    const [selectedOption, setSelectedOption] = useState<string>(preselectedValue ?? "1");

  const options = [
    { value: "1", label: "1", position: 0 },
    { value: "2-3", label: "2-3", position: 33.33 },
    { value: "4-7", label: "4-7", position: 66.66 },
    { value: "8+", label: "8+", position: 100 }
  ];

  useEffect(() => {
    if(preselectedValue) {
      onSelectionChange?.(preselectedValue);
    }
  }, [preselectedValue])

  const handleOptionClick = useCallback((option: string) => {
    setSelectedOption(option);
    onSelectionChange?.(option);
  }, []);

  return (
    <div className={`brodawki-selector-container flex ${className}`}>
      <h4 className="brodawki-selector-title flex width-fit-content nowrap align-self-center text-align-center ">Wybierz liczbę brodawek:</h4>
      
      <div className="brodawki-selector-wrapper flex relative width-max align-items-center">
        <div className="brodawki-selector-line absolute"></div>
        
        {options.map((option) => (
          <div
            key={option.value}
            className={`brodawki-option absolute pointer ${selectedOption === option.value ? 'selected' : ''}`}
            style={{ left: `${option.position}%` }}
            onClick={() => handleOptionClick(option.value)}
          >
            <div className="brodawki-option-circle flex align-items-center justify-center relative border-radius-half ">
              <span className="brodawki-option-text">{option.label}</span>
            </div>
            {selectedOption === option.value && (
              <div className="brodawki-option-glow"></div>
            )}
          </div>
        ))}
      </div>
      </div>
  )
}

export default Selector
