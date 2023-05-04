let noteArray = [];

let NoteObject = function (pTitle, pPriority, pType, pNote,pURL) {
    this.ID = noteArray.length + 1;
    this.Title = pTitle;
    this.Priority = pPriority;
    this.Type = pType;
    this.Note = pNote;
    this.URL = pURL;
}

noteArray.push(new NoteObject("testnote", "High", "Home", "testtest", "https://www.youtube.com/watch?v=M01_2CKL6PU"));

document.addEventListener("DOMContentLoaded", function () {
    
    // Priority Level button
    let Priorities = ["High", "Middium", "Low"]; 

    for (let i = 0; i < Priorities.length; i++) {
        let option = document.createElement("option");
        option.value = Priorities[i].toLowerCase();
        option.text = Priorities[i];
        document.getElementById("select-priority").appendChild(option);
    }
    
    // Select type button
    let Types = ["College", "Work", "Home", "Other"]; // we could add the other types if we need

    for (let i = 0; i < Types.length; i++) {
        let option = document.createElement("option");
        option.value = Types[i];
        option.text = Types[i];
        document.getElementById("select-type").appendChild(option);
    }

    // add button pTitle, pPriority, pType, pNote,pURL
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        noteArray.push(new NoteObject(noteArray.length,
        document.getElementById("title").value, 
        selectedPriority, 
        selectedType,
        document.getElementById("note").value, 
        document.getElementById("URL").value));
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
        document.getElementById("URL").value = "";

    });

    $(document).bind("change", "#select-priority", function (event, ui) {
        selectedPriority = $('#select-priority').val();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = $('#select-type').val();
    });

console.log(noteArray); // test we can delete
    
});  

