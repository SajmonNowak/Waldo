import React from 'react'
import SideMenu from "../styles/SideMenu"

const InGameNav = () => {

    const createCharList = () => {

    }

    return (
        <SideMenu>
            <div>Wanted</div>
            {createCharList()}
            <div>Time</div>
        </SideMenu>
    )
}

export default InGameNav
