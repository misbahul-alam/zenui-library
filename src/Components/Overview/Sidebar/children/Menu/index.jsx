import PropTypes, { string } from "prop-types";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { cn } from "../../../../../Utils/Style";

const DefaultMenu = ({ items }) => {
  return (
    <ul className="getStarted flex flex-col gap-[12px] mb-4">
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.url}
          className={
            (({ isActive }) => cn(isActive && "!text-blue-600"),
            "flex items-center group gap-[8px] hover:text-blue-600 text-[0.950rem] font-[500] cursor-pointer capitalize text-gray-600")
          }
        >
          <span
            className={({ isActive }) =>
              cn(
                isActive && "bg-blue-600 border-blue-600",
                "border p-[6px] rounded-md border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200"
              )
            }
          >
            <item.icon
              className={`${
                startContent === 0 && "text-white"
              } shrink-0 size-4 text-blue-600 group-hover:text-white transition-all duration-200`}
            />
          </span>
          Overview
        </NavLink>
      ))}
    </ul>
  );
};

const CollapseItem = ({ title }) => {
  const [components, setComponents] = useState(false);
  return (
    <div>
      <h3
        className={`${
          components ? "text-[#0471d6]" : "text-gray-500"
        } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
        onClick={() => setComponents(!components)}
      >
        {title}
        <MdKeyboardArrowRight
          className={`${
            components && "rotate-[90deg] !text-[#0471d6]"
          } text-[1.5rem] text-[#0471d6] transition-all duration-300`}
        />
      </h3>
    </div>
  );
};
const PrimaryMenu = ({ items }) => {
  return (
    <div>
      {/*  components  */}
      {items.map((item, index) => {
        return (
          <div key={index}>
            <h3
              className={`${
                components ? "text-[#0471d6]" : "text-gray-500"
              } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
              onClick={() => setComponents(!components)}
            >
              Components
              <MdKeyboardArrowRight
                className={`${
                  components && "rotate-[90deg] !text-[#0471d6]"
                } text-[1.5rem] text-gray-500 text-[#0471d6] transition-all duration-300`}
              />
            </h3>
          </div>
        );
      })}

      <div>
        <h3
          className={`${
            components ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
          onClick={() => setComponents(!components)}
        >
          Components
          <MdKeyboardArrowRight
            className={`${
              components && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 text-[#0471d6] transition-all duration-300`}
          />
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
          >
            <Link
              to={"/components/all-components"}
              className={`${
                startContent === 2 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(2)}
            >
              All Components
            </Link>

            {/* inputs */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              FORM
            </Link>

            <Link
              to={"/components/input-text"}
              className={`${
                startContent === 3 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(3)}
            >
              Input
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

PrimaryMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.element,
      className: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
          icon: PropTypes.element,
          className: PropTypes.string,
        })
      ),
    })
  ),
};
CollapseItem.propTypes = {
  title: PropTypes.string,
};

DefaultMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: string,
      icon: PropTypes.element,
    })
  ),
};
export default {
  DefaultMenu,
  PrimaryMenu,
};
