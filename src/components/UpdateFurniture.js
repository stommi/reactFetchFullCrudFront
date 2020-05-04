import React, {Component} from 'react';
import '../styles/Forms.css'

class UpdateFurniture extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            nimi: "",
            vari: "",
            lkm: ""
        }

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
        this.updateFurniture()
    }

    updateFurniture() {
        const id = this.state.id
        const url = "http://localhost:8080/api/huonekalut/"
        const furnitureAsJson = JSON.stringify({
            nimi: this.state.nimi,
            vari: this.state.vari,
            lkm: this.state.lkm
        })
        console.log(furnitureAsJson)

        return fetch(url+id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: furnitureAsJson
        })
    }

    render() {

        return (
            <div>
                <h2>Update existing furniture here</h2>

                <form onSubmit={this.handleSubmit()}>
                    <input
                        type="number"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                        placeholder="id"
                        className="CrudInput"
                    />
                    <input
                        type="text"
                        name="nimi"
                        value={this.state.nimi}
                        onChange={this.handleChange}
                        placeholder="name"
                        className="CrudInput"
                    />
                    <input
                        type="text"
                        name="vari"
                        value={this.state.vari}
                        onChange={this.handleChange}
                        placeholder="color"
                        className="CrudInput"
                    />
                    <input
                        type="number"
                        name="lkm"
                        value={this.state.lkm}
                        onChange={this.handleChange}
                        placeholder="amount"
                        className="CrudInput"
                    />

                    <br/><br/>
                    <button
                        className="CrudButton"
                        type="submit">
                        Update
                    </button>
                </form>
            </div>
        );
    }
}

export default UpdateFurniture;