import Menu from "../../src/assets/menu.svg?react";
import { type Dispatch, type SetStateAction } from "react";
import ThemeToggle from "./ThemeToggle";

type Props = {
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileHeader({ setIsSidePanelOpen }: Props) {
  return (
    <div className="w-full h-16 p-4 bg-background sticky top-0 xs:hidden flex justify-end gap-8 z-1001">
      <ThemeToggle />
      <button onClick={() => setIsSidePanelOpen(true)}>
        <Menu className="size-6" />
      </button>
    </div>
  );
}
