import reactDom from 'react-dom'

export default function LoginModal() {

    return (
        reactDom.createPortal(
            <div className="popup-form popup-login" style={ { display: 'none' } }>
                <div className="wrap">
                    {/* login-form */ }
                    <div className="ct_login" style={ { display: 'block' } }>
                        <h2 className="title">Đăng nhập</h2>
                        <input type="text" placeholder="Email / Số điện thoại" />
                        <input type="password" placeholder="Mật khẩu" />
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <div className="btn rect main btn-login">đăng nhập</div>
                        <div className="close">
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>, document.body
        )
    )
}
