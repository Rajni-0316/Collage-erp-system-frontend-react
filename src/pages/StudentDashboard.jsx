import React, { useEffect, useState } from "react";
import ProfilePicUploadForm from "../components/student/ProfilePicUploadForm";
import ProfilePicUploadUsingAxios from "../components/student/ProfilePicUploadUsingAxios";

const StudentDashboard = () => {
    const [loggedInStudent, setLoggedInStudent] = useState({})
    
    useEffect(() => {
        const student = JSON.parse(localStorage.getItem('student'))
        console.log(student)
        if (student) {
            setLoggedInStudent(student)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white py-4 px-6">
                <h1 className="text-2xl font-bold">Student Dashboard</h1>
            </header>
            <div className="flex flex-1">
                {/* Main Content */}
                <div className="flex-1 p-6">
                    <h2 className="text-xl font-semibold mb-4">Welcome, Student!</h2>
                    <p className="text-gray-700">Here is your dashboard content.</p>
                    {/* upload using form */}
                    <ProfilePicUploadForm id={loggedInStudent._id} />
                    {/* upload using axios */}
                    <ProfilePicUploadUsingAxios id={loggedInStudent._id} updatePage={setLoggedInStudent} />
                </div>
                {/* Profile Card */}
                <div className="w-1/4 bg-white shadow-md rounded-lg p-4 m-6">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4">
                            <img
                                src={"http://localhost:5001/images/" + loggedInStudent.profilePhoto}
                                alt=""

                            />
                        </div>
                        <h3 className="text-lg font-semibold">{loggedInStudent.firstName} {loggedInStudent.lastName}</h3>
                        <p className="text-gray-500">Student ID: {loggedInStudent.username}</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-gray-700 font-semibold mb-2">Details</h4>
                        <ul className="text-gray-600 text-sm">
                            <li>Course: NA</li>
                            <li>Year: NA</li>
                            <li>Email: {loggedInStudent.email}</li>
                            <li>DOB: {loggedInStudent.dob}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;