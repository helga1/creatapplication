
const fs= require ('fs')

const getNotes = function () {
    return 'Your notes...'
}

//this function if for getting the note saved to the data store
const addNote= function (title, body){
    const notes= loadNotes()
    //array filter
    const duplicatenotes= notes.filter(function (note) {
        return note.title===title

    })

    if (duplicatenotes===0) notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log('no duplicates')

}




const saveNotes=function (notes) {
    const dataJson= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}

//re-usable function to load the notes
const loadNotes= function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

// we exporting an object with 2 properties one for each function.
module.exports = {
    getNotes: getNotes,
    addNote: addNote

}