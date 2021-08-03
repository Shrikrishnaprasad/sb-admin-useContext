import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const data = profileDetails();
  const [profileData, setProfileData] = useState(data);

  return (
    <AppContext.Provider
      value={{
        profileData,
        setProfileData
      }}
    >
      {children}
    </AppContext.Provider>
  );
  function profileDetails() {
    return {
      id: 1,
      name: "Shri Krishna",
      profPic: "https://astrolinked.com/media/avatars/876/resized/500/tc.png",
      mobile: "9876543210",
      txt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
