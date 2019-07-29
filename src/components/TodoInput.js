import React from "react";

export default class TodoInput extends React.Component {
  render() {
    const buttonText = this.props.buttonText;
    const item = this.props.item;
    const handleSubmit = this.props.handleSubmit;
    const handleChange = this.props.handleChange;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              id="focus"
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="text-center">
            <button className="btn-lg btn-primary mt-3 ">
              <label htmlFor="focus">{buttonText}</label>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
