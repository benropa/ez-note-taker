// set requirements
const fs = require('fs');
const util = require('util');

//Asynchronous consts to read & write using util and fs
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const noteData = './db/db.json';

// code for class to handle reading and writing data
class Database {
    async readNotes() {
        try {
            const rawNotes = await readFileAsync(noteData, 'UTF8');
            return rawNotes ? JSON.parse(rawNotes) : [];
        } catch (error) {
            throw error;
        }
    }
// code for adding a new note 
async addNote(data) {
    try {
        await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(() => {
            console.log("New note added");
        }
        );
    } catch (error) {
        throw error;
    }
}
 // code for deleting a note
 async deleteNote(data) {
    try {
        await writeFileAsync(noteData, JSON.stringify(data, null, '\t'))
            .then(() => {
                console.log('Deleted note');
            });
    } catch (error) {
        throw error;
    }
}
}

module.exports = new Database();