import { FC, memo, useState } from "react";
import NavItem from "./NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };

  // Function to handle copying discord username
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  type navItemsType = {
    id: number | string;
    name: string;
    route: string;
  };

  const navItemsObj: navItemsType[] = [
    { id: 1, name: "UseState", route: "/usestate" },
    { id: 2, name: "UseEffect", route: "/useeffect" },
    { id: 3, name: "UseContext", route: "/usecontext" },
    { id: 4, name: "UseReducer", route: "/usereducer" },
    { id: 5, name: "UseCallback", route: "/usecallback" },
    { id: 6, name: "UseMemo", route: "/usememo" },
    { id: 7, name: "UseRef", route: "/useref" },
    { id: 8, name: "UseLayoutEffect", route: "/useLayouteffect" },
    { id: 9, name: "UseDebugValue", route: "/usedebugvalue" },
    { id: 10, name: "UseImperativeHandle", route: "/useimperativehandle" },
  ];

  return (
    <div className="w-max-[300px] flex flex-col gap-[2rem]">
      {/* Hamburger icon button */}
      <div className="pl-6 py-4 md:hidden" onClick={toggleNavFunc}>
        {!toggleNav && (
          <div className="h-10 w-10 border border-lightGray rounded-[10%] hover:bg-lightGray flex justify-center items-center">
            <Bars3Icon className="h-6 w-6 cursor-pointer" />
          </div>
        )}
      </div>

      {/* Sliding navigation menu */}
      <div
        className={`border border-lightGray fixed top-0 left-0 h-full w-[60%] md:w-[300px] md:pt-[30px]  bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          toggleNav ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0`}
      >
        {/* Close (X) button */}
        <div className="p-4 flex justify-end md:hidden">
          <div
            onClick={toggleNavFunc}
            className="h-10 w-10 border border-lightGray rounded-[10%] hover:bg-lightGray flex justify-center items-center"
          >
            <XMarkIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        {/* Navigation content */}
        <div className="pl-8">
          <h1 className="pl-4 text-[1.6rem] font-[800]">React Hooks</h1>
          <ul className="pl-4 flex flex-col gap-[0.9rem] pt-[0.5rem]">
            {navItemsObj.map((el) => (
              <li key={el.name + el.id}>
                <Link to={el.route}>
                  <NavItem navItem={el.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="w-full h-[2px] bg-black mt-[30px]" />

        <div className="pl-8 flex flex-col mt-[30px]">
          <h1 className="pl-4 text-[1.1rem] font-[600]">
            You can contact me at:
          </h1>
          <ul className="flex pl-4 gap-[30px] mt-[30px]">
            <li>
              <a href="https://github.com/PhilipBaravi" target="_blank">
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/philip-baravi-2b2a521a2/"
                target="_blank"
              >
                <svg
                  fill="#000000"
                  height="35px"
                  width="35px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-143 145 512 512"
                >
                  <path
                    d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"
                  />
                </svg>
              </a>
            </li>

            <li>
              {/* Discord SVG with click-to-copy functionality */}
              <div
                onClick={() => handleCopy("philip5198.")}
                style={{ cursor: "pointer" }}
              >
                <svg
                  fill="#000000"
                  width="35px"
                  height="35px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>discord</title>
                  <path d="M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"></path>
                </svg>
              </div>
              {/* Show Copied message */}
              {copied && (
                <div className="p-2 border bg-green-500 rounded-[20%]">
                  <p className="text-white text-[600]">Copied!</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Navigation);
