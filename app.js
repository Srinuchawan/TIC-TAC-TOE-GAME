let box_btn=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let turno=true;
let newbtn=document.querySelector(".new_game");
let win_msg=document.querySelector(".win_msg");
const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//                        also we can use above by for of loop
// for(box of box_btn){
//     box.addEventListener("click",() =>{
//         console.log("button clicked using for loop");
//     })
// }

//            New game restart function 
const resetg=() =>{
    turno=true;
    win_msg.classList.add("hide");
    newbtn.classList.add("hide");
    enablebox();
    
}

// enble and disable buttons after game over 
const nochnge=() =>{
    for(let box of box_btn){
    box.disabled=true;
    }
}
const enablebox=() =>{
    for(let box of box_btn){
        box.disabled=false;
        box.innerText="";
    }
}
//  ----------------------

box_btn.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked ");
        if(turno){
            console.log(box.innerText="X");
            turno=false;
        }else{
            console.log(box.innerText="O");
            turno=true;
        }
        box.disabled=true;
        checkwin();
    });
    
}); 
const showwin=(winner) =>{
    win_msg.innerText=`🎉 Congratulations! 🎊 Winner is ${winner}`
}
const checkwin=() =>{
    for(let win of wins){

        // below cmt print positioning 
        // console.log(win[0],win[1],win[2]);
        // console.log(box_btn[win[0]],box_btn[win[1]],box_btn[win[2]]);

        let postval1=box_btn[win[0]].innerText;
        let postval2=box_btn[win[1]].innerText;
        let postval3=box_btn[win[2]].innerText;
        if(postval1 !="" && postval2 !="" && postval3 !=""){
            if(postval1 === postval2 && postval2 === postval3){
                console.log("winner"); 
                nochnge();
                showwin(postval1);
                win_msg.classList.remove("hide");
                newbtn.classList.remove("hide");
                
            }
        }
    }
}
newbtn.addEventListener("click",resetg); 
reset_btn.addEventListener("click",resetg);   