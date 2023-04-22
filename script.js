const userList=[
    { id:1, name:"john", age:"18", profession:"developer"},
    { id:2, name:"jack", age:"20", profession:"developer"},
    { id:3, name:"karen", age:"19", profession:"admin"}

];
const professionfilter=document.getElementById("profession");
const filterButton=document.getElementById("filter-btn");
const nameUser=document.getElementById("name");
const ageUser=document.getElementById("age");
const professionInput=document.getElementById("profession");
const addBtn=document.getElementById("add-btn");
const userListContainer=document.getElementById("user-list");

function renderUserList(){
    let html= "";
    userList.forEach((user)=>{
        html+= <div class="user-card">
               <p>ID: ${user.id} </p>
               <p>Name: ${user.name}</p>
               <p>Age: ${user.ag}</p>
               <p>Profession: ${user.profession}</p>
            </div>
    });
    userListContainer.innerHTML=html;
}
function filterByProfession(){
    const selectedProfession=professionfilter.value;
    if(selectedProfession==""){
        alert("Please select a profession to filter by");
    return;
    }
    const filteredList=userList.filter(
        (user)=>
        user.profession === selectedProfession
    );
    let html = "";
    filteredList.forEach((user) => {
      html += `<div class="user-card">
                <h3>ID: ${user.id}</h3>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
                <p>Profession: ${user.profession}</p>
              </div>`;
    });
    userListContainer.innerHTML = html;
  }
    function addUserToList(){
        const name=nameUser.value;
        const age=ageUser.value;
        const profession=professionAddInput.value;
        const newUser ={
            id:userList.length+1,
            name,
            age,
            profession,

        };
        userList.push(newUser);
        renderUserList();
    }
        filterButton.addEventListener("click",filterByProfession);
        addBtn.addEventListener("click", addUserToList);

        renderUserList();
