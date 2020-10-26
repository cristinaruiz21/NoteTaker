var fs = require("fs");
var util = require("util");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);
var id = 0;

class Notes{
    readNotes(){
        return readFileAsync("db/db.json","utf8");
    }
    writeNotes(data){
        return writeFileAsync("db/db.json",JSON.stringify(data));
    }
    getNotes(){
        return this.readNotes().then(data =>{
            var addedNotes;
            try{
                addedNotes = [].concat(JSON.parse(data))
            } catch(err){
                addedNotes = []
            }
            return addedNotes;
        })
    }
    addNotes(data){
        const {title, text}= data
        if (!title || !text){
            throw err
        }
        const newNote = {title, text, id:id++}
        return this.getNotes().then(data => [...data,newNote]).then(data => this.writeNotes(data)).then(()=>newNote)
    }
    deleteNotes(id){
        return this.getNotes().then(data => data.filter(note => note.id != id)).then(data => this.writeNotes(data))
    }
}

module.exports = new Notes();