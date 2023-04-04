require('colors');
const inquirer = require('inquirer');

const menuOpts = [
    {
        type: 'list',
        name: 'menu_option',
        message: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar Completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar Pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: '0',
                name: `${'0'}. Salir`
            },
        ]
    }
];

const pauseOpts = [
    {
        type: 'input',
        name: 'input',
        message: 'Press ENTER to continue... '
    }   
]



const inquirerMenu = async () => {
    //console.clear();
    console.log('============================='.green);
    console.log('    Seleccione una Opción    '.white);
    console.log('=============================\n'.green);

    const {menu_option} = await inquirer.prompt(menuOpts);
    return menu_option;
}

const pause = async () => {
    const input = await inquirer.prompt(pauseOpts);
    console.log(input);
    return input;
}

const getInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value){
                if( value.length === 0 ) {
                    return 'Pleae enter a value';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

 

module.exports = {
    inquirerMenu,
    pause,
    getInput
}