
const colors = require('colors');

const { inquirerMenu, 
        pause,
        getInput
        } = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {

    console.clear();

    let opt = '';
    const tasks = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Create task
                const desc = await getInput('Task Description: ');
                console.log(desc);

                
                tasks.createTask(desc);
      
                break;
            
            case '2':

                //List Tasks
                console.log(tasks.listArray);
                break;
        
            default:
                break;
        }
      
        
        console.log(tasks);
        await pause();

    } while (opt !== '0');

}

main();