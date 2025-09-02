import MenuItem from "./MenuItem";
import menuItems from "../../data/menuItems";
import { AppTab } from "../../data/appTabs";

export interface HeaderMenuProps {
  page: AppTab;
  className?: string;
}

export function HeaderMenu({ page, className="" }: HeaderMenuProps) {
  return (
    <nav className={`header-menu flex f-1 align-self-center justify-center align-items-center ${className}`}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          page={page}
          className={className}
        />
      ))}
    </nav>
  );
}

export default HeaderMenu;
