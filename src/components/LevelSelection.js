import React from 'react'
import levels from "../data/levels";
import { LevelSelectionMenu } from '../styles/LevelSelectionMenu';
import LevelCard from './LevelCard'

const LevelSelection = ({startLevel, playerName}) => {

    const displayLevels = () => {
        return levels.map((level) => {
            return <LevelCard levelData = {level} startLevel = {startLevel} key={level.name}/>
        })
    }

    return (
        <LevelSelectionMenu>
            <h2>Welcome {playerName}</h2>
            <div className="marginBot">Choose your Level</div>
            {displayLevels()}
        </LevelSelectionMenu>
    )
}

export default LevelSelection
