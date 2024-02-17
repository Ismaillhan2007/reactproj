import "./Header.css";
import "../../App.css";
import { NavLink } from "react-router-dom";
let Header = () => {


    return (
        <div className="Header">
            <div className="container">
                <div className="wrapper">
                <div className="Header__left">
                    <img src="./images/logo.png" alt="" />
                    <div className="logo__text">
                        <p className="subText">строительная компания</p>
                        <h1>
                            Славянский <br />Терем
                        </h1>
                    </div>
                 </div>
                 <div className="line">

                 </div>
                <div className="Header__right">
                    <div className="Header__right_wrapper">
                        <div className="slogan">
                            <p>
                                Опыт работы более 15 лет.
                            </p>
                            <p>
                                Строительство домов под ключ на территории Пермского края.
                            </p>
                        </div>
                        <div className="contacts">
                            <img src="./images/vk.png" alt="" />
                            <img src="./images/phone.png" alt="" />   
                            <p>+7 902 471-07-79</p>                       
                        </div>
                    </div>
                    <nav></nav>
                 </div>
                </div>
                <nav>
                    <ul>
                        <li>
                        <NavLink to= "/">Главная</NavLink>
                        </li>
                        <li>
                         <NavLink to= "services">Услуги</NavLink>
                        </li>
                        <li>Проекты</li>
                          <NavLink to="/Reviews" >Отзывы </NavLink>  
                        <li>Партнеры</li>
                        <li>Портфолио</li>
                    </ul>
                </nav>
            </div>
        </div>
           
    );
};

export default Header;