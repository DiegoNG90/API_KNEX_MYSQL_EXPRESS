import Task from '../models/Tasks';

export async function createTask(req,res){
    try{
        const {name, done, projectid} = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        })
        res.status(200).json({message: "New task created"})
    }catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export async function getTasks(req,res){
    try{
        const allTasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        })
        res.status(200).json({allTasks});
    }catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getOneTask(req, res) {
    try{
        const {id} = req.params;
        const oneTask = await Task.findOne({
            where: {
                id}
        })
        res.status(200).json(oneTask)
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getTasksByPlaylist(req, res) {
    try{
        const {projectid} = req.params;
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'done', 'name'],
            where: {projectid}
        })
        res.status(200).json({tasks})
    }catch(error){
        console.log(error);
        res.status(500).send(error)
    }
}

export async function deleteTask(req, res) {
    try{
        const {id} = req.params;
        const deletedRowCount = await Task.destroy({
            where:{
                id
            }
        })
        res.status(200).json({
          message: 'Task deleted',
          count: deletedRowCount,
        });
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateTask(req, res) {
    try{
        const {id} = req.params;
        const {projectid, name, done} = req.body;
        const targetTask = await Task.findOne({
            attributes: ['name','projectid', 'done', 'id'],
            where: {
                id
            }
        })
        const updatedTask = await Task.update({
            name,
            done,
            projectid
        },
        {
            where: {
                id
            }
        });
        res.status(200).json({
            message: "Task updated",
            data: updatedTask
        })
    }catch(error) {
        console.log(error);
        res.status(500).send(error);
    }
}
