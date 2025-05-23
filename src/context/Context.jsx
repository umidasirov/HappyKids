import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// 👉 Контекст
export const MainContext = createContext();

// 👉 Провайдер
export function MainProvider({ children }) {
    const [domen,setDomen] = useState('https://pythonproject2-wceu.onrender.com/')


    const [user, setUser] = useState({
        id: 548976,
        name: "Umidjon",
        isLogin: true,
        lastename: "Ashirboyev",
        phoneNumber: "+998950934060",
        email: "umidasirov55@gmail.com",
    });

    const [getUser, setGetUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ✅ Login
    const loginUser = async (email, password) => {
        try {
            const res = await axios.post(`${domen}/api/login/`, {
                email,
                password
            });
    
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
    
            await getProfile(); // profilni yuklab oling
    
            setIsLogin(true); // faqat shu yerda true qilamiz
            return true;
        } catch (err) {
            console.error("Login xatoligi:", err);
            setIsLogin(false);  // login muvaffaqiyatsiz bo‘lsa false
            return false;
        }
    };
    

    // ✅ Profilni olish
    const getProfile = async () => {
        const token = localStorage.getItem("access");
        if (!token) return;
    
        try {
            const response = await axios.get(`${domen}/api/profile/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setGetUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
            console.error("Profil olishda xatolik:", error);
            throw error;
        }
    };
    
    
    

    // ✅ Logout
    const logoutUser = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        setIsLogin(false);
        setGetUser(null);
        setUser(null);
    };

    // ✅ useEffect: Sahifa yangilanganda foydalanuvchini tiklash
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const access = localStorage.getItem("access");

        if (storedUser && access) {
            setGetUser(JSON.parse(storedUser));
            setIsLogin(true);
        }
    }, []);

    return (
        <MainContext.Provider
            value={{
                user,
                setUser,
                isLogin,
                setIsLogin,
                getUser,
                loginUser,
                logoutUser,
                email,
                setEmail,
                password,
                setPassword
            }}
        >
            {children}
        </MainContext.Provider>
    );
}
