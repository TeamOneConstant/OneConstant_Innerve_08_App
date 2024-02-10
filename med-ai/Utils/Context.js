import { createContext } from "react";
const AppContext = createContext();
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AppContextProvider({ children }) {
  const [isUserLogin, setUserLogin] = useState(false);
  const [user, setUser] = useState(null);

  async function clear() {
    try {
      await AsyncStorage.clear();
      setUser(null);
      setUserLogin(false);
      // navigation.navigate('Onboarding',{isLogout:true});
      //   RNRestart.Restart();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AppContext.Provider
      value={{
        setUserLogin,
        isUserLogin,
        setUser,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppContextProvider;
