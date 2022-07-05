import React, { useState } from 'react'
import Input from '../components/Input'

export default function Register() {
    const [value, setValue] = useState({})
    const [error, setError] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        const errorObj = {}

        // name
        if (!value?.name?.trim()) {
            errorObj.name = "* Ho va ten khong duoc de trong"
        }
        // phone
        if (!value?.phone?.trim()) {
            errorObj.phone = "* SDT khong duoc de trong"
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(value.phone)) {
            errorObj.phone = "* SDT khong hop le"

        }
        // email
        if (!value?.email?.trim()) {
            errorObj.email = "* Email khong duoc de trong"
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
            errorObj.email = "* Email khong hop le"
        }
        // fb url
        if (!value?.fb?.trim()) {
            errorObj.fb = "* Facebook Url khong duoc de trong"
        } else if (!/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/) {
            errorObj.fb = "* Facebook Url khong hop le"
        }
        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            alert("Vui long kiem tra email")
        }

    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <form className='form' onSubmit={ onSubmit } >
                            {/* using uncontrolled */ }

                            {/* name */ }
                            <Input
                                label="Họ và tên"
                                placeholder="Họ và tên bạn"
                                onChange={ e => {
                                    value.name = e.target.value
                                } }
                                error={ error.name }
                            />
                            {/* <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" placeholder="Họ và tên bạn" />
                            </label> */}

                            {/* phone  */ }
                            <Input
                                label="Số điện thoại"
                                placeholder="Số điện thoại"
                                onChange={ e => {
                                    value.phone = e.target.value
                                } }
                                error={ error.phone }
                            />
                            {/* <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" placeholder="Số điện thoại" />
                            </label> */}

                            {/* email */ }
                            <Input
                                label="Email"
                                placeholder="Email"
                                onChange={ e => {
                                    value.email = e.target.value
                                } }
                                error={ error.email }
                            />
                            {/* <label>
                                <p>Email<span>*</span></p>
                                <input type="text" placeholder="Email của bạn" />
                            </label> */}

                            {/* url facebook */ }
                            <Input
                                label="URL Facebook"
                                placeholder="https://facebook.com"
                                onChange={ e => {
                                    value.fb = e.target.value
                                } }
                                error={ error.fb }
                            />
                            {/* <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" placeholder="https://facebook.com" />
                            </label> */}
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */ }
                                    {/* Cần ít nhất 200 COIN để giảm giá */ }
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            {/* y kien ca nhan */ }
                            {/* <Input
                                label="Ý kiến cá nhân"
                                placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                            /> */}
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <button type="submit" className="btn main rect" >đăng ký</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}
