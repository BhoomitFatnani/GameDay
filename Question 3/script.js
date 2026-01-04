const displayList = document.getElementById("list")
let btn = document.getElementById("btn")
let sortedlist = document.getElementById("sortedlist")
const ip = document.getElementById("ip")
const search = document.getElementById("search")
const searchedName = document.getElementById("searchedName")
let studentsList =[
    {
        name:"Bhoomit",
        marks:40
    },
    {
        name:"Piyush",
        marks:90
    },
    {
        name:"Manav",
        marks:10
    },
    {
        name:"Sahil",
        marks:70
    },
    {
        name:"Allen",
        marks:89
    },
    {
        name:"Aakash",
        marks:9
    }
]

console.log(studentsList)

// for(let elem of studentsList){
//     const listStudent = document.createElement('li')
// listStudent.textContent=  `Name:${elem.name} Marks:${elem.marks}`
// displayList.appendChild(listStudent)   
// }


btn.addEventListener("click",Sorting)

function Sorting(){

    studentsList.sort((a,b)=>b.marks-a.marks)
    console.log(studentsList)
    for(let elem of studentsList){
    const listStudent = document.createElement('li')
listStudent.textContent=  `Name:${elem.name} Marks:${elem.marks}`
sortedlist.appendChild(listStudent)   
}
}

function Suggest(){
    let text = ip.value.toLowerCase(); 

    let result = studentsList.filter(elem =>
        elem.name.toLowerCase().includes(text)
    )

    searchedName.innerHTML = "";

   for(let elem of result) {
    const li = document.createElement("li");
        li.textContent = `Name:${elem.name} Marks:${elem.marks}`;
        searchedName.appendChild(li);
   }
}