import { useEffect } from "react"
import { Link } from "react-router-dom"
import { HOME_PATH } from "../constants/path"
import { usePage } from "../hooks/usePage"

export default function Header() {
    const [setIsLogin] = usePage()
    
    useEffect(() => {
        const menuHam = document.querySelector(".menu-hambeger")
        menuHam.addEventListener("click", (e) => {
            e.stopPropagation()
            document.body.classList.toggle("menu-is-show")
        })

        document.addEventListener("click", () => {
            document.body.classList.remove("menu-is-show")

        })

    })
    return (
        <><header id="header">
            <div className="wrap">
                <div className="menu-hambeger">
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to={ HOME_PATH } className="logo">
                    <img src="/img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {/* <div className="have-login">
                        <div className="account">
                            <Link to={ PROFILE_PATH } className="info">
                                <div className="name">Trần Lê Trọng Nghĩa</div>
                                <div className="avatar">
                                    <img src="img/avt.png" alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="hamberger">
                        </div>
                        <div className="sub">
                            <a href="#">Khóa học của tôi</a>
                            <a href="#">Thông tin tài khoản</a>
                            <a href="#">Đăng xuất</a>
                        </div>
                    </div> */}
                    <div class="not-login bg-none">
                        <a href="" class="btn-register" >Đăng nhập</a>
                        <a href="" class="btn main btn-open-login">Đăng ký</a>
                    </div>
                </div>
            </div>
        </header></>
    )
}
