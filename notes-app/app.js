//const validator = require ('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            //title mandatory
            demandOption: true,
            //title string
            type: 'string'
        },
        body: {
            describe: 'Body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            //title mandatory
            demandOption: true,
            //title string
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            //title mandatory
            demandOption: true,
            //title string
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNotes(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
        notes.listNotes()
    }
})

//parsing argument from yargs
yargs.parse()
//console.log(process.argv)
//console.log(yargs.argv)