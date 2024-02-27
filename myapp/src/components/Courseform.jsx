import React from "react";
import useCourseStore from "../store/coursestore";
import { useState } from "react";
const CourseForm = ()=>{
    const addCourse = useCourseStore((state)=> state.addCourse)
    const [courseTitle,setCourseTitle]=useState("")
    console.log('courseForm Rendered');
    const handleCourseSubmit = ()=>{
        if(!courseTitle) return alert('please add a course title');
        addCourse({
            id: Math.ceil(Math.random()*100000),
            title: courseTitle
        })
        setCourseTitle('')
    }
    return(
        <>
           <div className="form form-container">
              <input type="text" value={courseTitle} onChange={(e)=>{
                setCourseTitle(e.target.value)
              }} className="form" />
              <button onClick={()=>{
                handleCourseSubmit()
              }}>Add course</button>
           </div>
        </>
    )


}
export default CourseForm