import React, { useEffect, useRef, useState,useContext } from 'react';
import flatpickr from 'flatpickr';
import { MainContext } from '../context/Context';
import 'flatpickr/dist/flatpickr.min.css';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import MainBtn from './MainBtn';
import { Link ,useNavigate} from 'react-router-dom';
import SecondaryButton from './SecondaryButton';
import axios from 'axios';

export default function Register() {
  const dateInput = useRef(null);
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ism: '',
    familia: '',
    telRaqam: '',
    shaxar: '',
    tugulganKuni: ''
  });
  const [message, setMessage] = useState('');
  const {domen} = useContext(MainContext)
  console.log(domen);
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Обработчик для select
  const handleSelectChange = (e) => {
    setFormData(prev => ({
      ...prev,
      shaxar: e.target.value
    }));
  };

  useEffect(() => {
    flatpickr(dateInput.current, {
      locale: Russian,
      dateFormat: 'd.m.Y',
      onChange: function(selectedDates, dateStr) {
        setFormData(prev => ({
          ...prev,
          tugulganKuni: dateStr
        }));
      }
    });
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${domen}/api/register/`, formData, {
      headers: { 'Content-Type': 'application/json' }
    });
    setMessage('✅ Регистрация успешна!');
    navigate('/login');  // Переход на страницу логина
  } catch (error) {
    if (error.response) {
      setMessage('❌ Ошибка: ' + JSON.stringify(error.response.data));
    } else {
      setMessage('❌ Ошибка соединения с сервером');
    }
  }
};

  const navigate = useNavigate();

  return (
    <div className="register sh" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="reg-first">
        <h2>Bizning oilamizga qoshiling !!!</h2>
        <p>O'zingiz uchun yangi akkaunt yarating va ozingiz va ushbu platformamizdagi ozingizni natijalaringizni saqlang</p>
        <ul className="list-group">
          <li className="list-group-item"> Ertaklaringizni saqlang</li>
          <li className="list-group-item"> Ota ona va bolalar uchun bloglar</li>
          <li className="list-group-item"> O'yinlar</li>
        </ul>
        <div className="info">
          Happy Kids bu 3 yoshdan 8 yoshgacha bolgan bolalar uchun moljallanga platforma bolib bu yerda bolalar ertaklar oqishi xar xil jismoniy mashqalar qilishi mumkin undab tashqa bu yerda ota onalar uchun maslahatlarxam bor
        </div>
      </div>
      <div className="reg-second">
        <h2>Registratsiya</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Familiya</span>
            <input type="text" className="form-control" placeholder="Familiya" name='familia' required onChange={handleChange} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Ism</span>
            <input type="text" className="form-control" placeholder="Ism" name='ism' required onChange={handleChange} />
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" name='email' required onChange={handleChange} />
            <span className="input-group-text" id="basic-addon2">@example.com</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Parol</span>
            <input type="text" className="form-control" placeholder="******" name='password' required onChange={handleChange} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">+998</span>
            <input type="text" className="form-control" placeholder="x-xxx-xx-xx" name='telRaqam' required onChange={handleChange} />
          </div>
          <div className="input-group" id="datepicker" data-td-target-input="nearest" data-td-target-toggle="nearest">
            <input ref={dateInput} className="form-control" placeholder="Tug'ulgan sanangiz" name="tugulganKuni" required readOnly />
            <span className="input-group-text" data-td-target="#datepicker" data-td-toggle="datetimepicker">
              <i className="bi bi-calendar"></i>
            </span>
          </div>
          <select className="form-select" style={{ marginTop: '10px' }} onChange={handleSelectChange} name='shaxar' required value={formData.shaxar}>
            <option value="">Shaxarni tanlang</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <div className="btn" style={{ margin: "0 auto", marginTop: '50px', width: "300px" }}>
            <MainBtn type="submit">Royhatdan o'tish</MainBtn><br />
            <Link to='/login'>
              <SecondaryButton>Kirish</SecondaryButton>
            </Link>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
