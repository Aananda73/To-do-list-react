import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    editId: "",
    buttonText: "Add Todo Item"
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.item.trim() !== "") {
      if (!this.state.editItem) {
        const newItem = {
          id: this.state.id,
          title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
          items: updatedItems,
          item: "",
          id: uuid(),
          editItem: false
        });
      } else {
        const updatedItems = [...this.state.items];
        for (let i in updatedItems) {
          if (updatedItems[i].id === this.state.editId) {
            updatedItems[i].title = this.state.item;
          }
        }
        this.setState({
          items: updatedItems,
          item: "",
          id: uuid(),
          editItem: false,
          editId: "",
          buttonText: "Add Todo Item"
        });
      }
    }
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filtereditems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filtereditems
    });
  };

  handleEdit = id => {
    const tempitems = this.state.items.filter(item => item.id === id);
    const edititemId = id;
    const tempitem = tempitems[0].title;
    this.setState({
      editItem: true,
      item: tempitem,
      buttonText: "Edit Item",
      editId: edititemId
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-center">Todo Input</h3>
              <TodoInput
                buttonText={this.state.buttonText}
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
