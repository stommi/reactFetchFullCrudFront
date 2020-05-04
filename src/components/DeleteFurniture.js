import React, {Component} from 'react';
import '../styles/Forms.css'

class DeleteFurniture extends Component {
    constructor() {
        super();
        this.state = {
            id: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        this.deleteFurniture(this.state.id)
    }

    deleteFurniture(id) {
        const url = "http://localhost:8080/api/huonekalut/";
        fetch(url+id, {
            method: "DELETE"})
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                })
    }

    render() {
        return (
            <div>
                <h2>Delete furniture here</h2>

                <form onSubmit={this.handleSubmit}>
                    <input
                        className="CrudInput"
                        type="text"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                        placeholder="Id for the furniture"
                    />

                    <br/><br/>

                    <button
                        type="submit"
                        className="CrudButton"
                        >
                        Delete
                    </button>
                </form>

                <h3>{this.state.id}</h3>
            </div>
        );
    }
}

export default DeleteFurniture;