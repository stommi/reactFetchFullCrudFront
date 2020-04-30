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
    }

    handleChange() {
        this.setState({})
    }



    render() {
        return (
            <div>
                <h2>Add new furniture here</h2>
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

            </div>
        );
    }
}

export default PostFurniture;