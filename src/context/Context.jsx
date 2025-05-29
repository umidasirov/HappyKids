import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const [domen, setDomen] = useState(
    "https://pythonproject2-wceu.onrender.com"
  );

  const [sidebar, setSidebar] = useState(false);

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      const res = await axios.post(`${domen}/api/login/`, {
        email,
        password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      await getProfile();

      setIsLogin(true);
      return true;
    } catch (err) {
      console.error("Login xatoligi:", err);
      setIsLogin(false);
      return false;
    }
  };

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
      description:
        "Bolalarning aqliy rivojlanishi uchun mo‘ljallangan, yangi bilimlar va muammolarni hal qilish ko‘nikmalarini shakllantiradi. Fikr yuritish va ijodiy fikrlashni rivojlantirishga yordam beradi.",
    },
    {
      back: "#E1EEFF",
      darkBack: "#BFDBFF",
      color: "#2460D0",
      main: "Qiziqali interfeys",
      icon: "bi bi-emoji-smile",
      description:
        "Yorqin ranglar va animatsiyalar bolalarning diqqatini jalb qiladi. Interaktiv elementlar o‘rganishni oson va qiziqarli qiladi.",
    },
    {
      back: "#F8F0FF",
      darkBack: "#EBD5FB",
      color: "#8D41D6",
      main: "Ota onalar ishtiroki",
      icon: "bi bi-people",
      description:
        "Ota-onalar bolalarining o‘rganishini kuzatib, maslahat va qo‘llab-quvvatlash imkoniga ega bo‘ladi. Farzandlar bilan yaqinroq muloqot o‘rnatiladi.",
    },
  ];

  const logoutUser = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    setIsLogin(false);
    setGetUser(null);
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const access = localStorage.getItem("access");

    if (storedUser && access) {
      setGetUser(JSON.parse(storedUser));
      setIsLogin(true);
    }
  }, []);

  const [categories] = useState([
    {
      id: 1,
      icon: "Games",
      title: "O'yinlar",
      description:
        "O'rganish jarayonini qiziqlashtiradigan interaktiv va qiziq mini oyinlar",
      link: "/games",
      bgColor: "#FF9F1C",
    },
    {
      id: 2,
      icon: "Stories",
      title: "Ertaklar",
      description:
        "Qiziq va mashxur bolgan eratklar, ertklarni oqishni yaxshi koradigan bolalar uchun",
      link: "/story",
      bgColor: "#2EC4B6",
    },
    {
      id: 3,
      title: "Mashqlar",
      icon: "Activities",
      description:
        "Bolalar uchun qiziqarli va rivojlantiruvchi faoliyatlar — matematik misollar va ma'rifatli mashqlar!",
      link: "/activities",
      bgColor: "#E71D36",
    },
    {
      id: 4,
      icon: "Parents",
      title: "Ota onalar",
      description:
        "Bolangizni qollab quvvatlash uchun ota onalarga maslahatlar.",
      link: "/parents",
      bgColor: "#662E9B",
    },
  ]);
  const [topgames, setTopGames] = useState([
    {
      name: "Ranglarni topish o'yini",
      star: 4.5,
      img: "https://imagecompresser.com/color-picker.jpg",
      description:
        "Bolalar uchun ajoyib bolgan oyin bolib bolalr uchun rang tanlaydi, bolalar esa u rangni topishlari kerak",
      hTags: "o'rganish",
      link: "/color-game",
    },
    {
      name: "Harflarni ovoz orqali topsih o'yini",
      star: 5.0,
      img: "https://c8.alamy.com/comp/2A7C3J9/illustration-of-kids-with-book-music-notes-and-the-alphabet-music-story-rhymes-2A7C3J9.jpg",
      description:
        "Yana bir Ajoyib oyin bolib, nolalarni audio tinglash orqali alifboga o'rgatish sitemasi",
      hTags: "o'rganish",
      link: "/alphabet-game",
    },
    {
      name: "Sonlarni ketmaketligini topsih o'yini",
      star: 4.3,
      img: "https://infofaq.ru/wp-content/uploads/2016/12/chislo.jpg",
      description:
        "Raqamlarni bilmaydigan bolalarng ularni tanishtiradi, bilganlarnga esa sonlarni",
      hTags: "o'rganish",
      link: "/count-game",
    },
  ]);
  const [ertaklar, setErtaklar] = useState([
    {
      name: "Alpomish",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: " 5 yoshdan katta bolalar uchun",
    },
    {
      name: "Ur to'qmoq",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: "",
    },
    {
      name: "Shiroq",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: "",
    },
    {
      name: "Boy ila kambag‘al",
      isFavour: false,
      img: "",
      description: "",
      stars: "5",
      tip: "Ertak",
      mainText:
        "Bir bor ekan, bir yo‘q ekan, bir qishloqda ikki do‘st yashar ekan — biri boy, ikkinchisi kambag‘al.Boy do‘stning katta uyi bor edi. Uy atrofida katta bog‘, minglab pulga teng mol-mulki bor edi. Har kuni u ko‘plab mehmonlar bilan ovqatlanar, bayramlar uyushtirar, yaxshi kiyim kiyib, dam olar edi. Lekin u ko‘pincha kambag‘al do‘stini kamsitar, uning oddiy hayotini pastga olar edi.Kambag‘al esa kichkina, oddiy uyda yashar, kichkina dalasida mehnat qilardi. Har kuni tongda uyg‘onib, yerni sug‘orar, don ekar, sabzavot parvarish qilardi. U mehnat qilishni yaxshi ko‘rardi, chunki u hayotida eng muhimi tinchlik va erkinlik ekanini bilardi. Bir kuni qishloqqa qattiq bo‘ron keldi. Shamol shiddat bilan esib, kuchli yomg‘ir yog‘ib, ko‘plab daraxtlar ag‘darildi, uylar vayron bo‘ldi. Boy do‘stning katta uyi vayron bo‘lib, mol-mulki yomon zararlandi. U nima qilsa ham, holatini tuzatolmay qoldi, boshpana topishda qiynaldi. Kambag‘alning uyida esa bo‘ron unchalik zarar yetkazmadi, chunki u uni kichik va mustahkam qilib qurdi. Dalasidagi ekinlar biroz shikastlandi, lekin u sabr bilan ish boshladi. Bo‘ron o‘tgach, boy do‘st kambag‘alning uyiga borib, yordam so‘radi. U kambag‘al do‘stidan kechirim so‘radi va o‘rganmoqchi bo‘ldi. Kambag‘al esa mehr bilan uni qabul qilib, o‘z dalasini ko‘rsatdi, birga ishlashni taklif qildi. Birgalikda ular ekinlarni tikladilar, yangi rejalarga kirishdilar. Boy do‘st mehnat qilishni o‘rgandi, kambag‘al esa do‘stining yuragini kechirganidan quvonchda edi.",
      yosh: "",
      xulosalar: [
        {
          xulosa: "Boylik har doim ham baxt va tinchlik olib kelmaydi.",
        },
        {
          xulosa:
            "Mehnat va sabr orqali topilgan kichik narsa ham insonni baxtli qiladi.",
        },
        {
          xulosa: "Do‘stlik, yordam va kechirim — eng qimmatli boyliklardir.",
        },
      ],
    },
    {
      name: "Tulki bilan quyon",
      isFavour: false,
      img: "",
      description: "",
      stars: 4,
      mainText:
        "Bir bor ekan, bir yo‘q ekan, katta o‘rmon chetida Tulki va Quyon yashar ekan. Ular bir-biri bilan do‘st bo‘lib, har kuni o‘rmon bo‘ylab uchrashar, o‘ynashar ekan.Tulki juda shirin va hiylakor edi. U tez o‘ylashni, o‘rganishni va boshqa hayvonlarni aldashni yaxshi ko‘rar edi. Quyon esa tez yugurib, jasorat bilan o‘rmon bo‘ylab yurardi, lekin ba’zan juda ishonuvchan va ehtiyotkor bo‘la olmas edi.Bir kuni Tulki o‘yladi:— Men quyonni o‘z foydamga ishlatishim mumkin, lekin u do‘stim, shuning uchun ehtiyotkor bo‘lishim kerak .Tulki quyonni ko‘rgach, unga dedi:— Ey, Quyon, men seni bir sirga o‘rgatmoqchiman. Agar men aytgan gaplarni bajarib, menda qolgan mevalarni olib kelsang, sen juda baxtli bo‘lasan!Quyon Tulkining gaplariga ishondi va uning aytgan ishlarini bajarishga rozi bo‘ldi.Tulki esa undan foydalanib, mevalarni o‘zi uchun to‘play boshladi. Quyon esa tinimsiz ishladi, lekin mevalardan hech qanday foyda ko‘rmadi.Bir kuni quyon juda charchadi va o‘ylay boshladi:— Nega men ishlayman, lekin Tulki hech narsa bermaydi? Ehtimol, men o‘zim uchun ham ishlashim kerak.Shundan so‘ng, quyon o‘zining tez yugurish qobiliyatidan foydalanib, o‘rmonning boshqa joylariga borib, o‘zi uchun meva yig‘ishni boshladi. U shuningdek, o‘rmondagi boshqa hayvonlarga yordam berdi, do‘stlikni mustahkamladi.Tulki esa yolg‘iz qoldi, chunki uning hiylasi ochildi, hayvonlar uni ishonchsiz deb bildi.",
      yosh: "",
      tip: "Ertak",
      xulosalar: [
        {
          xulosa: "Do‘stlik va halollik — eng qimmatli narsalardir.",
        },
        {
          xulosa: "Hiyla va yolg‘on oxir-oqibat yolg‘izlikka olib keladi.",
        },
        {
          xulosa: "Har bir kishi o‘z kuchi va qobiliyatidan foyda ko‘rishi kerak.",
        },
      ],
    },
    {
      name: "Chol va kampir",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: "",
    },
    {
      name: "Mehnatkash chumoli va dangasa kapalak",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: "",
    },
    {
      name: "Uch aka-uka va sehrli supurgi",
      isFavour: false,
      img: "",
      description: "",
      stars: "",
      mainText: "",
      yosh: "",
    },
  ]);
  return (
    <MainContext.Provider
      value={{
        ertaklar,
        setErtaklar,
        setTopGames,
        topgames,
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
        domen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
