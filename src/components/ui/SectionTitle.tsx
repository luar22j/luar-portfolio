import type { ReactNode } from "react";

interface SectionTitleProps {
  id: string;
  children: ReactNode;
}

const SectionTitle = ({ id, children }: SectionTitleProps) => (
  <h2
    id={id}
    className="title-animation text-3xl font-bold text-gray-200 drop-shadow-[0_2px_10px_theme(colors.brand)]"
  >
    {children}
  </h2>
);

export default SectionTitle;
