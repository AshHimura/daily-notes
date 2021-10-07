const notes = [
    {
        id: 1,
        subject: "GitHub team coding",
        date: "10/1/2021",
        feeling: "very apprehensive.",
        timeSpent: 240
    },
    {
        id: 2,
        subject: "HTML coding",
        date: "9/29/2021",
        feeling: "somewhat comfortable.",
        timeSpent: 180
    }
    
]

const noteAboutToday = {
    id: 3,
    subject: "Playing around with JS",
    date: "10/6/2021",
    feeling: "pretty chill actually!",
    timeSpent: 360
}

notes.push(noteAboutToday)

/* for (const note of notes) {
  console.log(`Note ${note.id}
${note.date}
I learned about ${note.subject}.
I spent ${note.timeSpent} minutes working on it.
How did I feel you ask? I felt ${note.feeling}

`)  
} */

//console.log(notes)

// find specific feeling 
//const searchTerm = "somewhat"

/* for (const note of notes) {
    if (note.feeling.includes(searchTerm)) {
        console.log(`Note ${note.id}
${note.date}
I learned about ${note.subject}.
I spent ${note.timeSpent} minutes working on it.
How did I feel you ask? I felt ${note.feeling}
 
`)
}
} */

const createNote = (note) => {
    const lastIndex = notes.length -1
    const currentNote = notes[lastIndex]
    const maxId = currentNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    notes.push(note)
}

//define new note
const humpdayNote = {
    subject: "fooling around with JS once again",
    dateCreated: Date(),
    feeling: "At first worried, but for now entertained",
    timeSpent: 300
}

createNote(humpdayNote)

console.log(notes)