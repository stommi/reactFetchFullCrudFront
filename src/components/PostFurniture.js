import React, {Component} from 'react';

class PostFurniture extends Component {
    constructor() {
        super();
        this.state = {
            nimi: "",
            vari: "",
            lkm: ""
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
        this.addFurniture()
    }

    addFurniture() {
        const url = "http://localhost:8080/api/huonekalut/";
        const furnitureAsJson = JSON.stringify({
            nimi: this.state.nimi,
            vari: this.state.vari,
            lkm: this.state.lkm
        });
        console.log(furnitureAsJson);
        return fetch(url, {
            method: 'POST',
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
                <h2>Add new furniture here</h2>

                <form onSubmit={this.handleSubmit}>
                    <input
                        className="CrudInput"
                        type="text"
                        name="nimi"
                        value={this.state.nimi}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />

                    <input
                        className="CrudInput"
                        type="text"
                        name="vari"
                        value={this.state.vari}
                        onChange={this.handleChange}
                        placeholder="Color"
                    />

                    <input
                        className="CrudInput"
                        type="number"
                        name="lkm"
                        value={this.state.lkm}
                        onChange={this.handleChange}
                        placeholder="Amount"
                    />
                    <br/><br/>
                    <button
                        type="submit"
                        className="CrudButton">
                        Post
                    </button>
                </form>

            </div>
        );
    }
}

export default PostFurniture;