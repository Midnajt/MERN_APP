import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import SmallSideBar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";

const DashboardContext = createContext();

function DashboardLayout() {
  // temp
  const user = { name: "john" };
  const [showSidebar, setShowBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggleDarkTheme");
  };

  const toggleSidebar = () => {
    setShowBar(!showSidebar);
  };

  const logOutUser = () => {
    console.log("logOutUser");
  };

  return (
    <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logOutUser }}>
      <Wrapper>
        <main className='dashboard'>
          <SmallSideBar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
