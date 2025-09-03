import React, { useCallback } from "react";
import { useState, useRef, useEffect } from "react";
import arrowThin from "../assets/arrow_thin.svg";

/* single select -> item
multi select -> array of items */
export interface DropdownItem {
  id: string | number;
  name: string;
  [key: string]: any;
}

export interface DropdownSelectProps<T extends DropdownItem> {
  items: T[];
  placeholder?: string;
  value?: T | T[] | null;
  onChange: (value: T | T[] | null) => void;
  searchable?: boolean;
  allowNew?: boolean;
  showTick?: boolean;
  multiple?: boolean;
  showNewPopup?: boolean;
  allowColors?: boolean;
  newItemComponent?: React.ComponentType<any>;
  newItemProps?: Record<string, any>;

  disabled?: boolean;
  className?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  arrowIcon?: string;
  tickIcon?: string;
  addNewIcon?: string;
}

export function DropdownSelect<T extends DropdownItem>({
  items,
  placeholder = "",
  value,
  onChange,
  searchable = true,
  allowNew = true,
  showTick = true,
  multiple = false,
  showNewPopup = false,
  allowColors = false,
  newItemComponent: NewItemComponent,
  newItemProps = {},
  disabled = false,
  className = "",
  searchPlaceholder = "Szukaj...",
  emptyMessage = "Nie znaleziono ",
  arrowIcon = arrowThin,
  tickIcon = "src/assets/tick.svg",
  addNewIcon = "src/assets/addNew.svg",
}: DropdownSelectProps<T>) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isAddNewPopupOpen, setIsAddNewPopupOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getSelectedValue = useCallback((): T[] => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const selectedItems = getSelectedValue();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );

  const handleSelect = useCallback(
    (item: T) => {
      if (disabled) return;

      if (multiple) {
        const currentSelected = getSelectedValue();
        const isSelected = currentSelected.some((s) => s.id === item.id);

        const newSelected = isSelected
          ? currentSelected.filter((s) => s.id !== item.id)
          : [...currentSelected, item];

        onChange(newSelected);
      } else {
        const currentSelected = value as T | null;
        const newSelected = currentSelected?.id === item.id ? null : item;

        onChange(newSelected);
        setIsDropdownVisible(false);
      }
    },
    [multiple, value, onChange, disabled, getSelectedValue]
  );

  const handleOpenAddNewPopup = useCallback(() => {
    if (disabled) return;
    setIsAddNewPopupOpen(true);
  }, [disabled]);

  const handleCloseAddNewPopup = useCallback(() => {
    setIsAddNewPopupOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isDropdownVisible) {
      setSearchValue("");
    }
  }, [isDropdownVisible]);

  const getDisplayText = (): string => {
    if (selectedItems.length === 0) return placeholder;

    if (multiple) {
      if (selectedItems.length === 1) return selectedItems[0].name;
      return `[${selectedItems.length}]`;
    }

    return selectedItems[0].name;
  };

  const isItemSelected = (item: T): boolean => {
    return selectedItems.some((s) => s.id === item.id);
  };

  return (
    <div
      className={`searchable-dropdown relative width-fit-content border-none height-auto ${className}`}
      ref={dropdownRef}
    >
      <button
        className={`dropdown-header g-5 flex space-between align-items-center pointer width-fit-content ${
          disabled ? "disabled" : ""
        } ${allowColors && selectedItems.length > 0 ? "selected" : ""}`}
        onClick={() => !disabled && setIsDropdownVisible((prev) => !prev)}
        disabled={disabled}
      >
        <div className="dropdown-placeholder-wrapper width-fit-content">
          <a
            className={`dropdown-header-a ${
              selectedItems.length > 0 ? "center" : ""
            }`}
          >
            {getDisplayText()}
          </a>
        </div>
        <img
          src={arrowIcon}
          alt="Toggle dropdown"
          className={`arrow-down ${isDropdownVisible ? "rotated" : ""}`}
        />
      </button>
      {isDropdownVisible && !isAddNewPopupOpen && (
        <div className="dropdown-menu absolute">
          {(searchable || allowNew) && (
            <section className="dropdown-search-and-add-new">
              <input
                type="text"
                className={`dropdown-search ${!allowNew ? "wide" : ""}`}
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              {allowNew && NewItemComponent && (
                <button
                  className="add-new-dropdown-button"
                  onClick={handleOpenAddNewPopup}
                >
                  <img
                    src={addNewIcon}
                    alt="Add new item"
                    className="dropdown-add-new-icon"
                  />
                </button>
              )}
            </section>
          )}
          <ul className="dropdown-list flex-column">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={`dropdown-item ${
                    isItemSelected(item) ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item.name}
                  {showTick && isItemSelected(item) && (
                    <img
                      src={tickIcon}
                      alt="Selected"
                      className="dropdown-tick-icon"
                    />
                  )}
                </li>
              ))
            ) : (
              <li className="dropdown-item disabled">{emptyMessage}</li>
            )}
          </ul>
        </div>
      )}
      {showNewPopup && isAddNewPopupOpen && NewItemComponent && (
        <NewItemComponent onClose={handleCloseAddNewPopup} {...newItemProps} />
      )}
    </div>
  );
}

export default DropdownSelect;
