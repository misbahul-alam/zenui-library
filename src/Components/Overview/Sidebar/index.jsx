import { useRef } from "react";
import PropTypes from "prop-types";

// react router dom
import OverviewIcon from "../../../SvgIcons/OverviewIcon.jsx";
import InstallationIcon from "../../../SvgIcons/InstallationIcon.jsx";
import ResourceIcon from "../../../SvgIcons/ResourceIcon.jsx";
import TemplatesIcon from "../../../SvgIcons/TemplatesIcon.jsx";
import HookIcon from "../../../SvgIcons/HookIcon.jsx";
import { CollapseMenu, DefaultMenu } from "./children/Menu";
const Sidebar = () => {
  const sidebarRef = useRef(null);
  
  return (
    <aside
      ref={sidebarRef}
      className="py-6 px-10 pr-7 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden"
    >
      {/*  get starts  */}
      <DefaultMenu
        items={[
          {
            bgColor: "bg-blue-600",
            borderColor: "border-blue-600",
            textColor: "text-blue-600",
            title: "Overview",
            icon: OverviewIcon,
            url: "/docs/overview",
          },
          {
            bgColor: "bg-green-600",
            borderColor: "border-green-600",
            textColor: "text-green-600",
            title: "Installation",
            icon: InstallationIcon,
            url: "/docs/installation",
          },
          {
            bgColor: "bg-purple-600",
            borderColor: "border-purple-600",
            textColor: "text-purple-600",
            title: "Resources",
            icon: ResourceIcon,
            url: "/docs/resources",
          },
          {
            bgColor: "bg-[#DB06F9]",
            borderColor: "border-[#DB06F9]",
            textColor: "text-[#DB06F9]",
            title: "Custom Hooks",
            icon: HookIcon,
            url: "/custom-hooks",
          },
          {
            bgColor: "bg-indigo-600",
            borderColor: "border-indigo-600",
            textColor: "text-indigo-600",
            title: "Templates",
            icon: TemplatesIcon,
            url: "/templates",
          },
        ]}
      />
      {/*  components  */}
      <CollapseMenu
        title="Components"
        items={[
          {
            title: "All Components",
            url: "/components/all-components",
          },
          {
            label: "FORM",
          },
          {
            title: "Input",
            url: "/components/input-text",
          },
          {
            title: "Textarea",
            url: "/components/input-textarea",
          },
          {
            title: "Number",
            url: "/components/input-number",
          },
          {
            title: "Checkbox",
            url: "/components/input-checkbox",
          },
          {
            title: "Switch",
            url: "/components/input-switch",
          },
          {
            title: "Strong Password",
            url: "/components/strong-password",
          },
          {
            title: "Select",
            url: "/components/input-select",
          },
          {
            title: "Radio",
            url: "/components/input-radio",
          },
          {
            title: "Range",
            url: "/components/input-range",
          },
          {
            title: "File",
            url: "/components/input-file",
          },
          {
            title: "OTP Input",
            url: "/components/otp-input",
          },
          {
            label: "BUTTONS",
          },
          {
            title: "Normal Button",
            url: "/components/normal-button",
          },
          {
            title: "Login Button",
            url: "/components/login-buttons",
          },
          {
            title: "Dropdown Button",
            url: "/components/dropdown-button",
          },
          {
            title: "Animated Button",
            url: "/components/animated-button",
          },
          {
            label: "SURFACES",
          },
          {
            title: "Drag & Drop",
            url: "/components/drag-and-drop",
          },
          {
            title: "Cards",
            url: "/components/cards",
          },
          {
            title: "Animated Cards",
            url: "/components/animated-cards",
          },
          {
            title: "Accordion",
            url: "/components/according",
          },
          {
            title: "App bar",
            url: "/components/appbar",
          },
          {
            title: "Image Gallery",
            url: "/components/image-gallery",
          },
          {
            title: "Carousel",
            url: "/components/carousel",
          },
          {
            label: "NAVIGATION",
          },
          {
            title: "Pagination",
            url: "/components/pagination",
          },
          {
            title: "Progress Bar",
            url: "/components/progress-bar",
          },
          {
            title: "Chip",
            url: "/components/chip",
          },
          {
            title: "Timer",
            url: "/components/timer",
          },
          {
            title: "Breadcrumb",
            url: "/components/breadcrumb",
          },
          {
            title: "Rating",
            url: "/components/rating",
          },
          {
            title: "Stepper",
            url: "/components/stepper",
          },
          {
            title: "Modal",
            url: "/components/modal",
          },
          {
            title: "Tabs",
            url: "/components/tabs",
          },
          {
            label: "FEEDBACK",
          },
          {
            title: "Context Menu",
            url: "/components/context-menu",
          },
          {
            title: "Skeleton",
            url: "/components/skeleton",
          },
          {
            title: "Tree Dropdown",
            url: "/components/tree-dropdown",
          },
          {
            title: "Alert Message",
            url: "/components/alert-message",
          },
          {
            title: "Dialog",
            url: "/components/dialog-message",
          },
          {
            title: "Testimonial",
            url: "/components/testimonials",
          },
          {
            title: "Loader",
            url: "/components/loader",
          },
          {
            title: "Notification",
            url: "/components/notification",
          },
          {
            label: "DATA DISPLAY",
          },
          {
            title: "Badge",
            url: "/components/badge",
          },
          {
            title: "Table",
            url: "/components/table",
          },
          {
            title: "Tooltip",
            url: "/components/tooltip",
          },
          {
            title: "Pie Chart",
            url: "/components/pie-chart",
          },
          {
            title: "Timeline",
            url: "/components/timeline",
          },
          {
            label: "E-COMMERCE",
          },
          {
            title: "Product Card",
            url: "/components/product-card",
            isNewComponent: true,
          },
          {
            title: "Ads Card",
            url: "/components/ads-card",
            isNewComponent: true,
          },
          {
            label: "RANDOMS",
          },
          {
            title: "Code",
            url: "/components/code",
          },
          {
            title: "Snippet",
            url: "/components/snippet",
          },
        ]}
      />
      {/*  blocks  */}
      <CollapseMenu
        title={"Blocks"}
        items={[
          {
            title: "All Blocks",
            url: "/blocks/all-blocks",
          },
          {
            label: "Sections",
          },
          {
            title: "Responsive Navbar",
            url: "/blocks/responsive-navbar",
          },
          {
            title: "Hero Section",
            url: "/blocks/hero-section",
          },
          {
            title: "Price Section",
            url: "/blocks/price-section",
          },
          {
            title: "Responsive Footer",
            url: "/blocks/responsive-footer",
          },
          {
            label: "Form",
          },
          {
            title: "Contact Form",
            url: "/blocks/contact-form",
          },
          {
            title: "Multi-Step Form",
            url: "/blocks/multi-step-form",
          },
          {
            title: "Newsletter Form",
            url: "/blocks/newsletter-form",
          },
          {
            label: "Empty Pages",
          },
          {
            title: "404 Page",
            url: "/blocks/404-page",
          },
          {
            title: "Empty Page",
            url: "/blocks/empty-page",
          },
          {
            label: "E-Commerce",
          },
          {
            title: "Offer Grid",
            url: "/blocks/offer-grid",
            isNewComponent: true,
          },
          {
            title: "Product Details Page",
            url: "/blocks/product-details-page",
            isNewComponent: true,
          },
          {
            title: "Checkout Page",
            url: "/blocks/checkout-page",
            isNewComponent: true,
          },
          {
            label: "Random",
          },
          {
            title: "Responsive Search Bar",
            url: "/blocks/responsive-search-bar",
          },
          {
            title: "Responsive Sidebar",
            url: "/blocks/responsive-sidebar",
          },
        ]}
      />
    </aside>
  );
};

Sidebar.propTypes = {
  startContent: PropTypes.number.isRequired,
  setStartContent: PropTypes.func.isRequired,
};

export default Sidebar;
