
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script
const fs= require ('fs')
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksToDo() {
    return this.tasks.filter((task)=> task.completed=== false)

        return tasksToDo

    /* I have obj vith properties
    I need method that will return me a text of the property=== false
    for thise I need to filter this object

    const duplicatenotes= notes.txt.filter(function (note) {
        return note.title===title
    })
    if (duplicatenotes===0) notes.txt.push({
        title:title,
        body:body
    })
*/
}


}



console.log(tasks.getTasksToDo())