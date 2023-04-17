let question = document.querySelectorAll(".question");

let ans = document.querySelectorAll(".ans");
console.log(ans);

let ques = document.querySelectorAll(".ques-1");

let addBtn = document.querySelectorAll('.btn');
console.log(addBtn);

let closeBtn = document.querySelectorAll('.close');

for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = "none";
    
}


for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', () => {
        ans[i].style.display = "flex";
        addBtn[i].style.display = "none";
    })
    
}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', () => {
        ans[i].style.display = "none";
        addBtn[i].style.display = "block";
    })
    
}




