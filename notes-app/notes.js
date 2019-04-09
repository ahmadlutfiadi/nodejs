const fs = require('fs')
const chalk = require('chalk')
//method add note
const addNote = (title, body) => {
    const notes = loadNotes('notes.json')
    //array filter method
    //const duplicateNotes = notes.filter((note) => note.title === title)

    //find example replace above
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        //add data to array
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes, 'notes.json')
        console.log(chalk.green.inverse('New Note Added'))
    } else {
        console.log(chalk.red.inverse('Title Taken!'))
    }

}
//method remove note
const removeNote = (title) => {
    const notes = loadNotes('notes.json')
    const notestoKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notestoKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notestoKeep, 'notes.json')
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}

//method list notes
const listNotes = () => {
    const notes = loadNotes('notes.json')
    console.log(chalk.blue.bold("My Notes: "))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
//method read note
const readNotes = (title) => {
    const notes = loadNotes('notes.json')
    const readNote = notes.find((note) => note.title === title)
    if (readNote) {
        console.log(chalk.blue.bold("My Notes: "))
        console.log(chalk.green('Title: ' + readNote.title) + '\nBody: ' + readNote.body)

    } else {
        console.log(chalk.red.inverse('Note not Found!'))
    }

}

const saveNotes = (notes, filename) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(filename, dataJsON)
}

const loadNotes = (fileName) => {
    try {
        const dataBuffer = fs.readFileSync(fileName)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }

}

module.exports = {
    //properties
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}