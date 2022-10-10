/** @odoo-module **/

const { Component } = owl

export class Todo extends Component {
    static props = ["id", "description", "done"]
}

Todo.template = "todo.template"
