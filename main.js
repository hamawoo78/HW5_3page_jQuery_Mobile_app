// let noteArray = [];

// let NoteObject = function (pTitle, pPriority, pType, pNote,pURL) {
//     this.ID = noteArray.length + 1;
//     this.Title = pTitle;
//     this.Priority = pPriority;
//     this.Type = pType;
//     this.Note = pNote;
//     this.URL = pURL;
// }

// noteArray.push(new NoteObject("testnote", "High", "Home", "testtest", "https://www.youtube.com/watch?v=M01_2CKL6PU"));

// document.addEventListener("DOMContentLoaded", function () {
    
//     // Priority Level button
//     let Priorities = ["High", "Middium", "Low"]; 

//     for (let i = 0; i < Priorities.length; i++) {
//         let option = document.createElement("option");
//         option.value = Priorities[i].toLowerCase();
//         option.text = Priorities[i];
//         document.getElementById("select-priority").appendChild(option);
//     }
    
//     // Select type button
//     let Types = ["College", "Work", "Home", "Other"]; // we could add the other types if we need

//     for (let i = 0; i < Types.length; i++) {
//         let option = document.createElement("option");
//         option.value = Types[i];
//         option.text = Types[i];
//         document.getElementById("select-type").appendChild(option);
//     }

//     // add button pTitle, pPriority, pType, pNote,pURL
    
// // add button
// document.getElementById("buttonAdd").addEventListener("click", function () {
//     let title = document.getElementById("title").value;
//     let note = document.getElementById("note").value;
//     let url = document.getElementById("URL").value;
//     let selectedPriority = document.getElementById("select-priority").value;
//     let selectedType = document.getElementById("select-type").value;
    
//     if (title && note && selectedPriority && selectedType) {
//         noteArray.push(new NoteObject(title, selectedPriority, selectedType, note, url));
//         alert("Note added successfully.");
//     } else {
//         alert("Please fill in all fields.");
//     }
// });

// // clear button
// document.getElementById("buttonClear").addEventListener("click", function () {
//     document.getElementById("title").value = "";
//     document.getElementById("note").value = "";
//     document.getElementById("URL").value = "";
//     document.getElementById("select-priority").selectedIndex = 0;
//     document.getElementById("select-type").selectedIndex = 0;
// });


//     $(document).bind("change", "#select-priority", function (event, ui) {
//         selectedPriority = $('#select-priority').val();
//     });

//     $(document).bind("change", "#select-type", function (event, ui) {
//         selectedType = $('#select-type').val();
//     });

// console.log(noteArray); // test we can delete
    
// });  


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

// Function to update the note list
function updateNoteList() {
    let ul = document.getElementById("myul");
    ul.innerHTML = "";
    for (let i = 0; i < noteArray.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = "<a href='#details' data-transition='slide' data-noteid='" + i + "'><h3>" + noteArray[i].Title + "</h3></a>";
        ul.appendChild(li);
    }
    $("#myul").listview("refresh");
}

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
        noteArray.push(new NoteObject(
            document.getElementById("title").value, 
            selectedPriority, 
            selectedType,
            document.getElementById("note").value, 
            document.getElementById("URL").value));
        updateNoteList();
    });

    //clear button
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
        document.getElementById("URL").value = "";
        document.getElementById("select-priority").value = "";
        document.getElementById("select-type").value = "";
    });

  // Add event listener for clicking on a note
  $(document).on("click", "#myul li a", function () {
        let noteIndex = $(this).attr("data-noteid");
        let note = noteArray[noteIndex];
        document.getElementById("oneTitle").textContent = "TITLE: " + note.Title;
        document.getElementById("oneLevel").textContent = "PRIORITY: " + note.Priority;
        document.getElementById("oneType").textContent = "TYPE: " + note.Type;
        document.getElementById("oneNotes").textContent = "CONTENT: " + note.Note;
        document.getElementById("oneURL").textContent = "URL: " + note.URL;
    });

  // Add event listener for clicking edit note
document.getElementById("buttonEdit").addEventListener("click", function () {
    // Get the ID of the selected note
    let noteID = document.getElementById("noteDetails").getAttribute("data-noteid");
    
    // Get the note object from the noteArray using the noteID
    let noteObj = noteArray[noteID];
    
    // Fill the input fields with the note data
    document.getElementById("title").value = noteObj.Title;
    document.getElementById("note").value = noteObj.Note;
    document.getElementById("URL").value = noteObj.URL;
    document.getElementById("select-priority").value = noteObj.Priority.toLowerCase();
    document.getElementById("select-type").value = noteObj.Type;

    // Redirect the user to the add new note page
    location.href = "#addNotePage";
});

  
    $(document).bind("change", "#select-priority", function (event, ui) {
        selectedPriority = $('#select-priority').val();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = $('#select-type').val();
    });

    updateNoteList(); // Update the note list on page load
}); 
