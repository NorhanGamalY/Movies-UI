import { createContext, useMemo, useState } from "react";

const UserContext = createContext(undefined);
export default UserContext;

export function UserProvider({ children }) {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    categories: [],  
    languages: [],    
  });

  const [user, setUser] = useState(null);

  const setField = (name, value) => setForm(f => ({ ...f, [name]: value }));
  const resetForm = () => setForm({ name: "", gender: "", categories: [], languages: [] });
  const register = () => setUser({ ...form });

  const value = useMemo(
    () => ({ form, setField, resetForm, register, user, isRegistered: !!user }),
    [form, user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
