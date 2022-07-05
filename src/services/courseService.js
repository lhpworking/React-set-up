import { api } from "../constants/api"

export const courseService = {
    getCourse() {
        return api.get('elearning/v4/courses')
    },
    getCourseDetail() {
        return api.get('elearning/v4/courses/${id}')
    }
}