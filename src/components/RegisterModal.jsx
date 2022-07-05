import reactDom from 'react-dom'

export default function RegisterModal() {
    return (
        reactDom.createPortal(
            <div className="popup-form popup-signup" style={ { display: 'none' } }>
                <div className="wrap">
                    <div className="ct_login" style={ { display: 'block' } }>
                        <h2 className="title">Đăng Ky</h2>
                        <input type="text" placeholder="Email / Số điện thoại" />
                        <input type="password" placeholder="Mật khẩu" />
                        <div className="btn rect main btn-login">đăng ky</div>
                        <div className="close">
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        )
    )
}
