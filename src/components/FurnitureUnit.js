import React from 'react'

function FurnitureUnit(props) {
    return(
        <div className="SingleFurniture">
            <h3>Id: {props.furniture.id}</h3>
            <h3>Nimi: {props.furniture.nimi}</h3>
            <h3>Väri: {props.furniture.vari}</h3>
            <h3>Lkm: {props.furniture.lkm} kpl</h3>
            <hr/>
        </div>
    )
}

export default FurnitureUnit