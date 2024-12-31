import { useRef } from "react";
import PropTypes from "prop-types";
import Content from "./Content";

const Sidebar = () => {
  const sidebarRef = useRef(null);
  
  return (
    <aside
      ref={sidebarRef}
      className="py-6 px-10 pr-7 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden"
    >
      <Content />
    </aside>
  );
};

Sidebar.propTypes = {
  startContent: PropTypes.number.isRequired,
  setStartContent: PropTypes.func.isRequired,
};

export default Sidebar;
