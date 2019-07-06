import React from 'react'

function SkillCard(props){
    return(
        <div className="col s3">
        <div className="card skillCard">
            <div className="card-content">
                <span className="card-title">Title</span>

                <p>{props.skill}</p>

                <button className="skillBtn">{props.skill} Projects</button>
            </div>

        </div>
        </div>
    )
}

export default SkillCard;