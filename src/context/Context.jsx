import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// 👉 Контекст
export const MainContext = createContext();

// 👉 Провайдер
export function MainProvider({ children }) {
    const [domen, setDomen] = useState('https://pythonproject2-wceu.onrender.com')

    const [sidebar,setSidebar] = useState(false)

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


    const whyUs = [
        {
            back: "#FDE9F5",
            darkBack: "#FBCFE8",
            color: "#C43073",
            main: "Ta'lim mazmuni",
            icon: "bi bi-lightbulb",
            description: "Bolalarning aqliy rivojlanishi uchun mo‘ljallangan, yangi bilimlar va muammolarni hal qilish ko‘nikmalarini shakllantiradi. Fikr yuritish va ijodiy fikrlashni rivojlantirishga yordam beradi."
        },
        {
            back: "#E1EEFF",
            darkBack: "#BFDBFF",
            color: "#2460D0",
            main: "Qiziqali interfeys",
            icon: "bi bi-emoji-smile",
            description: "Yorqin ranglar va animatsiyalar bolalarning diqqatini jalb qiladi. Interaktiv elementlar o‘rganishni oson va qiziqarli qiladi."
        },
        {
            back: "#F8F0FF",
            darkBack: "#EBD5FB",
            color: "#8D41D6",
            main: "Ota onalar ishtiroki",
            icon: "bi bi-people",
            description: "Ota-onalar bolalarining o‘rganishini kuzatib, maslahat va qo‘llab-quvvatlash imkoniga ega bo‘ladi. Farzandlar bilan yaqinroq muloqot o‘rnatiladi."
        }
    ]

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

    // In your context provider file
// In your context provider file

const [categories] = useState([
  {
    id: 1,
    icon:"Games",
    title: "O'yinlar",
    description: "O'rganish jarayonini qiziqlashtiradigan interaktiv va qiziq mini oyinlar",
    link: "/games",
    bgColor: "#FF9F1C"
  },
  {
    id: 2,
    icon:"Stories",
    title: "Ertaklar",
    description: "Qiziq va mashxur bolgan eratklar, ertklarni oqishni yaxshi koradigan bolalar uchun",
    link: "/story",
    bgColor: "#2EC4B6"
  },
  {
    id: 3,
    title: "Mashqlar",
    icon:"Activities",
    description: "Bolalar uchun qiziqarli va rivojlantiruvchi faoliyatlar — matematik misollar va ma'rifatli mashqlar!",
    link: "/activities",
    bgColor: "#E71D36"
  },
  {
    id: 4,
    icon:"Parents",
    title: "Ota onalar",
    description: "Bolangizni qollab quvvatlash uchun ota onalarga maslahatlar.",
    link: "/parents",
    bgColor: "#662E9B"
  }
]);
    
    return (
        <MainContext.Provider
            value={{
                sidebar,
                setSidebar,
                whyUs,
                categories,
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
                setPassword,
                domen
            }}
        >
            {children}
        </MainContext.Provider>
    );
}