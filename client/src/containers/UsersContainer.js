import React from 'react'
import {Routes, Route} from "react-router-dom"
import TrainerProfile from '../components/TrainerProfile'
const UsersContainer = ({user}) => {
    return (
        <div>
            <Routes>
                <Route path=":id" element={<TrainerProfile user={user}/>}/>
            </Routes>
        </div>
    )
}

export default UsersContainer;