import React,{Component} from "react";
import {NavLink} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <header>
                <menu>
                    <div className="logo">
                        <img src="images/PhatHoaCuoi.png" alt="" />
                    </div>
                    <div className="menuphai">
                        <NavLink to="/">Trang Chủ</NavLink>
                        <NavLink to="/news">Bản Tin</NavLink>
                        <NavLink to="/detail">Chi Tiết</NavLink>
                        <NavLink to="/contact">Góp Ỳ</NavLink>
                        {/* <a href="/">Trang Chủ</a>
                        <a href="/news">Bản Tin</a>
                        <a href="/detail">Chi Tiết</a>
                        <a href="/contact">Góp Ý</a> */}
                    </div>
                </menu>
                <div className="menuduoi">
                    Trang danh sách tin
                </div>
            </header>
        );
    }
}
export default Nav;
