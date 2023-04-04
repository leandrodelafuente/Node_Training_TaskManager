const Tarea = require("./tarea");

class Tareas {

    _list = {};

    get listArray() {
        const listArr = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            listArr.push(task);
        });

        return listArr;

    }

    constructor() {
            this._list = {};
    }

    createTask(desc = '') {
        const task = new Tarea(desc);
        this._list[task.id] = task;
    }


}

module.exports = Tareas;