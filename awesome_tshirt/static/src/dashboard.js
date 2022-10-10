/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter} from "./counter/counter"
import { Todo } from "./todo/todo"

const {Component} = owl

class AwesomeDashboard extends Component {

    static components = {Counter, Todo};
    setup() {
        this.todos = [{id: 3, description: "buy milk", done: false}, {id: 4, description: "New todo", done: false}];
    }

}

AwesomeDashboard.template = "awesome_tshirt.clientaction"

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
