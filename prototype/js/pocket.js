let pocket = {
    "members":[
        {
            "name": "Moonsung",
            "title": "CEO",
            "company": "Avocado"
        },
        {
            "name": "Person1",
            "title": "Senior Developer",
            "company": "Apple"
        },
        {
            "name": "Person2",
            "title": "Junior Developer",
            "company": "Orange"
        },
        {
            "name": "Person3",
            "title": "Designer",
            "company": "Mango"
        },
        {
            "name": "Person4",
            "title": "Customer",
            "company": "Mellon"
        },
    ]
}
localStorage.setItem("pocket", JSON.stringify(pocket));


const searchBtn = document.querySelector(".search_btn");
const searchBar = document.querySelector(".search_bar");

searchBtn.addEventListener("click",searchDisplayChange,false);
function searchDisplayChange(){
    const searchWrapper = document.querySelector(".search_bar_wrapper");
    const searchBar = document.querySelector(".search_bar");
    if(searchWrapper.style.display=="" || searchWrapper.style.display=="none"){
        searchWrapper.style.display = "block";
        searchBar.focus();
        return;
    }
    if(searchWrapper.style.display=="block"){
        searchWrapper.style.display="none";
        searchBar.blur();
        return;
    }
}
searchBar.addEventListener("input",searchCard,false);
function searchCard(e){
    const container = document.querySelector(".project-container");
    const data = JSON.parse(localStorage.getItem("pocket")).members;
    const text = e.target.value;
    let list =[];
    let result="";
    let i=0;

    for(i=0; i<data.length; i++){
        if(data[i].name.match(text) || data[i].title.match(text) || data[i].company.match(text)){
            list.push(data[i]);
        }
    }

    for(i=0; i<list.length; i++){
        result+=`
        <a href="#">
            <div class="project-item">
                <div class="project-explanation">
                    <div class="project-info">
                        <div class="project-name">${list[i].name}</div>
                        <div class="project-title">${list[i].title}</div>
                        <div class="project-company">${list[i].company}</div>
                    </div>
                </div>
            </div>
        </a>
        `;
    }
    container.innerHTML=result;
}