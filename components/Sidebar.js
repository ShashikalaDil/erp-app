import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {
  FaChevronDown,
  FaChevronRight,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
import Link from "next/link"; // Use Next.js Link for routing

// Sidebar Component
const Sidebar = ({ isOpen, menuData, moduleName, theme }) => {
  const [expandedGroupId, setExpandedGroupId] = useState(null);
  const [expandedProcessId, setExpandedProcessId] = useState(null);
  const [expandedReportProcessId, setExpandedReportProcessId] = useState(null);

  const [isMainProcessExpanded, setIsMainProcessExpanded] = useState(false);
  const [isReportsExpanded, setIsReportsExpanded] = useState(false);

  const toggleGroup = (groupId) => {
    setExpandedGroupId((prevGroupId) =>
      prevGroupId === groupId ? null : groupId
    );
  };

  const toggleProcess = (processId) => {
    setExpandedProcessId((prevProcessId) =>
      prevProcessId === processId ? null : processId
    );
  };

  const toggleReportProcess = (rptProcessId) => {
    setExpandedReportProcessId((prevProcessId) =>
      prevProcessId === rptProcessId ? null : rptProcessId
    );
  };

  const toggleMainProcess = () => {
    setIsMainProcessExpanded((prev) => !prev);
  };

  const toggleReports = () => {
    setIsReportsExpanded((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        "w-64 transition-transform transform border-r border-gray-100 bg-gray-100 ml-0",
        {
          "-translate-x-full": !isOpen,
          "translate-x-0": isOpen,
        }
      )}
    >
      {/* Module Name Section */}
      <div className="text-center font-bold p-2 border-b hover:bg-sky-700 cursor-pointer ">
        {moduleName}
      </div>

      {/* Main Process Section */}
      <div
        className="p-2 mt-2 mx-4 text-lg font-bold flex items-center justify-between cursor-pointer border-2 rounded-lg hover:bg-gray-400 "
        onClick={toggleMainProcess}
      >
        <FaCog className="mr-2" style={{ color: "blue", fontSize: "20px" }} />{" "}
        MAIN PROCESS
        {isMainProcessExpanded ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {isMainProcessExpanded && (
        <div className="p-1 overflow-y-auto max-h-[calc(100vh-210px)]">
          {menuData.map((group) => (
            <div key={group.groupId} className="ml-0 mb-2 font-semibold">
              <h4
                onClick={() => toggleGroup(group.groupId)}
                // style={{

                //   backgroundColor:
                //     expandedGroupId === group.groupId ? theme.hoverBackgroundColor : undefined,
                // }}
                className="text-xl ml-2 cursor-pointer flex justify-between items-center border-b p-1 pb-2 pt-2 hover:bg-gray-400 rounded-md"
              >
                {group.groupName}
                {expandedGroupId === group.groupId ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </h4>

              {expandedGroupId === group.groupId &&
                group.processes.map((process) => (
                  <div key={process.processId} className="ml-4">
                    <h5
                      onClick={() => toggleProcess(process.processId)}
                      className="text-lg ml-2 cursor-pointer flex justify-between items-center border-b p-1 pb-2 pt-2 hover:bg-gray-400 rounded-md"
                    >
                      {process.processName}
                      {expandedProcessId === process.processId ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </h5>

                    {expandedProcessId === process.processId &&
                      process.tasks.map((task) => (
                        <Link href={task.taskUrl || "#"} key={task.taskId}>
                          <a className="cursor-pointer text-lg font-semibold mt-0">
                            <div className="ml-4 p-1 hover:bg-gray-400 rounded-md">
                              {task.taskName}
                            </div>
                          </a>
                        </Link>
                      ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}

      {/* Reports Section */}
      <div
        className="p-2 mt-2 mx-4 mb-2 text-lg font-bold flex items-center justify-between cursor-pointer border-2 rounded-lg hover:bg-gray-400"
        onClick={toggleReports}
      >
        <FaFileAlt
          className="mr-2"
          style={{ color: "blue", fontSize: "20px" }}
        />{" "}
        REPORTS
        {isReportsExpanded ? <FaChevronDown /> : <FaChevronRight />}
      </div>

      {isReportsExpanded && (
        <div className="p-1 overflow-y-auto max-h-[calc(100vh-210px)]">
          {/* Your report data here */}
        </div>
      )}
    </div>
  );
};

// Fetch data server-side if needed for SSR/SSG
export const getServerSideProps = async () => {
  const menuData = await fetch("path/to/your/json/file.json").then((res) =>
    res.json()
  );
  const moduleName = "Module Name"; // Get module name if needed
  const theme = {
    primary: "#fff",
    secondary: "#000",
    subTextColor: "#666",
    borderColor: "#ccc",
    hoverBackgroundColor: "#f1f1f1",
  };

  return {
    props: {
      menuData,
      moduleName,
      theme,
    },
  };
};

export default Sidebar;
