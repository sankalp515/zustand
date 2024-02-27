import React from "react";
import useCourseStore from "../store/coursestore";
const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )
    return (
        <>
               {courses.map((courses,i)=>{
                return (
                    <React.Fragment key={i}>
                        <li className={`course-item`} style={{backgroundColor: courses.completed ? '#00ff0044' : 'white'}}>
                            <span><input checked={courses.completed} type="checkbox" onChange={(e)=>{
                                toggleCourseStatus(courses.id)
                            }}/></span>
                            <span>{courses?.title}</span>
                            <button onClick={()=>{removeCourse(courses.id)}}>Delete</button>
                        </li>
  
                    </React.Fragment>
                )
               })}

        </>
    )
}

export default CourseList