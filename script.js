document.addEventListener("DOMContentLoaded", function(){
    const btns = document.querySelectorAll(".toggleBtn")
    const lists = document.querySelectorAll(".menuList")
    
    btns.forEach((btn,index) =>{
        btn.addEventListener("click", function(){
            const list = lists[index]
            
            if(list.style.display === "flex"){
                list.style.display = "none"
                list.style.maxHeight = "0";
                btn.style.fontWeight = "400";

            }else{
                list.style.display = "flex" 
                list.style.maxHeight = list.scrollHeight + "px"; 
                btn.style.fontWeight = "700";
            }
        })
        

    })
})
