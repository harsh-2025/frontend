import { Children, createContext, useContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    return <AuthContext.Provider>{Children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}