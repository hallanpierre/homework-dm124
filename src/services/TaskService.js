const db = {};
let sequence = 0;

class TaskService {
    static add(newTask) {
        return new Promise((resolve) => {
            const task = {
                id: ++sequence;
                done: newTask.done || false;
                description: newTask.description
            };
            db[newTask.id] = task;
            resolve(task);
        })
    }
}

module.export = TaskService;