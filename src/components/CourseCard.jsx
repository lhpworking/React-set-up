import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL_PATH } from "../constants/path";

export default function CourseCard({ thumbnailUrl, teacher, slug, short_description, title, id, course_status }) {
    const STATUS = {
        'da-ket-thuc': "end",
        'dang-dien-ra': "starting",
        'sap-khai-gian': "soon"
    }
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to={ generatePath(COURSE_DETAIL_PATH, { slug, id }) }>
                    <img src={ thumbnailUrl } alt="" />
                    <span className="badge b1">{ STATUS.course_status }</span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <a className="name" href="#">
                        { title }
                    </a>
                    <p className="des">
                        { short_description }
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={ teacher.avatar } alt="" />
                        </div>
                        <div className="name">{ teacher.title }</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}
