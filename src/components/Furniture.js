import React, {Component} from 'react';
import FurnitureUnit from "./FurnitureUnit";

class Furniture extends Component {
    constructor() {
        super();
        this.state = {
            furniture : []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/huonekalut/")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    furniture: response
                })
            })
    }

    render() {
        const allFurniture = this.state.furniture.map((item) => <FurnitureUnit key={item.id} furniture={item}/>)

        return (
            <div className="AllFurniture">
                <h2>All furniture</h2>
                <hr/>
                {allFurniture}
            </div>
        );
    }
}

export default Furniture;