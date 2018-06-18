// ███╗   ██╗ ██████╗ ████████╗███████╗
// ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝
// ██╔██╗ ██║██║   ██║   ██║   █████╗  
// ██║╚██╗██║██║   ██║   ██║   ██╔══╝  
// ██║ ╚████║╚██████╔╝   ██║   ███████╗
// ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝
                                    
                                    
var mongoose = require("mongoose");

var Scheme = mongoose.Schema;

var noteSchema = new Schema({
  _headlineId: {
    type: Schema.types.ObjectId
  },
  date: String,
  noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;