import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { CONTACT_PATH, COURSE_PATH, HOME_PATH, PROJECT_PATH, TEAM_PATH } from "../constants/path";

const LiWrap = styled.li`
    a{
        &.active{
            background-color: #00afab;
            transition: all 0.4s;
            color: #fff;
        }
    }
`
export default function Sidebar() {
    return (
        <><nav className="nav">
            <ul>
                <LiWrap className="li_login">
                    <NavLink to="#">Đăng nhập </NavLink>
                    <NavLink to="#">Đăng ký</NavLink>
                </LiWrap>
                <LiWrap>
                    <NavLink to={HOME_PATH}>Trang chủ</NavLink>
                </LiWrap>
                <LiWrap>
                    <NavLink to={TEAM_PATH}>CFD Team</NavLink>
                </LiWrap>
                <LiWrap>
                    <NavLink to={ COURSE_PATH }>Khóa Học</NavLink>
                </LiWrap>
                <LiWrap>
                    <NavLink to={ PROJECT_PATH }>Dự Án</NavLink>
                </LiWrap>
                <LiWrap>
                    <NavLink to={CONTACT_PATH}>Liên hệ</NavLink>
                </LiWrap>
            </ul>
        </nav><div className="overlay_nav" /></>
    )
}
