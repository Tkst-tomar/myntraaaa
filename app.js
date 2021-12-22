var abc = []
var data = [{name:"Blue Denim Shirt", price:600, gender:"male", size:"L", path:"img (1).jpg",color:"Blue", brand:"Allen Solley"},
            {name:"White and Blue Printed Shirt", price:1200, gender:"male", size:"XL", path:"img (2).jpg",color:"Blue", brand:"Van Huesen"},
            {name:"Light Blue Denim Shirt", price:1500, gender:"male", size:"M", path:"img (3).jpg",color:"Blue", brand:"Louis Philippe"},
            {name:"Blue Printed White Shirt", price:800, gender:"male", size:"M", path:"img (4).jpg",color:"Blue", brand:"Peter England"},
            {name:"Baige Plain Shiet", price:450, gender:"male", size:"L", path:"img (5).jpg",color:"Baige", brand:"Calvein Klein"},
            {name:"White Flower Printed Green Colored Shirt", price:700, gender:"female", size:"M", path:"img (6).jpg",color:"Green", brand:"Lee Cooper"},
            {name:"Khakee Colored Shirt", price:750, gender:"male", size:"L", path:"img (7).jpg",color:"Khakee", brand:"J Hampstead"},
            {name:"Dark Blue Printed Shirt", price:500, gender:"male", size:"M", path:"img (8).jpg",color:"Blue", brand:"Allen Solley"},
            {name:"Checkred Shirt", price:400, gender:"male", size:"XL", path:"img (9).jpg",color:"Red Blue Green Yellow", brand:"Van Huesen"},
            {name:"Grey Colored Plain Shirt", price:720, gender:"male", size:"L", path:"img (10).jpg",color:"Grey", brand:"Louis Philippe"},
            {name:"Brown Color Line White Shirt", price:1200, gender:"male", size:"L", path:"img (11).jpg",color:"White", brand:"Peter England"},
            {name:"Soccer Club Blue Shirt", price:2000, gender:"male", size:"XL", path:"img (12).jpg",color:"Blue", brand:"Calvein Klein"},
            {name:"Printed Blue Shirt", price:1500, gender:"male", size:"M", path:"img (13).jpg",color:"Blue", brand:"Lee Cooper"},
            {name:"White Colored Plain Shirt", price:1200, gender:"femlae", size:"M", path:"img (14).jpg",color:"White", brand:"J Hampstead"},
            {name:"White and Blue Shirt", price:2500, gender:"male", size:"XL", path:"img (15).jpg",color:"White", brand:"Allen Solley"},
            {name:"Baige Colored Shirt", price:2800, gender:"male", size:"L", path:"img (16).jpg",color:"Baige", brand:"Van Huesen"},
            {name:"Light colored Checkred Shirt", price:3000, gender:"male", size:"M", path:"img (17).jpg",color:"Red, Blue", brand:"Louis Philippe"},
            {name:"Blue Green Yellow Shirt", price:1200, gender:"male", size:"L", path:"img (18).jpg",color:"Blue", brand:"Peter England"},
            {name:"Black Lining White Shirt", price:4500, gender:"male", size:"L", path:"img (19).jpg",color:"White, Black", brand:"Calvein Klein"},
            {name:"Blue Colored Printed Shirt", price:1450, gender:"male", size:"XL", path:"img (20).jpg",color:"Blue", brand:"Lee Cooper"},
            {name:"White Plain Shirt", price:2540, gender:"female", size:"M", path:"img (21).jpg",color:"White", brand:"J Hampstead"},
            {name:"White and Blue Checkred Black", price:2450, gender:"female", size:"L", path:"img (22).jpg",color:"Blue White Black", brand:"Allen Solley"},
            {name:"Pink Pain Shirt", price:3500, gender:"female", size:"L", path:"img (23).jpg",color:"Pink", brand:"Van Huesen"},
            {name:"Black Designed Shirt", price:3600, gender:"female", size:"S", path:"img (24).jpg",color:"Black", brand:"Louis Philippe"},
            {name:"Pink Embroidred Shirt", price:3850, gender:"female", size:"M", path:"img (25).jpg",color:"Pink", brand:"Peter England"},
            {name:"Black Checkred White Shirt", price:4200, gender:"female", size:"L", path:"img (26).jpg",color:"White Black", brand:"Calvein Klein"},
            {name:"Black Plain Shirt", price:500, gender:"female", size:"M", path:"img (27).jpg",color:"Black", brand:"Lee Cooper"},
            {name:"Black Checkred White Shirt", price:450, gender:"female", size:"L", path:"img (28).jpg",color:"White Black Baige", brand:"J Hampstead"},
            {name:"Green Layred Blue Shirt", price:800, gender:"female", size:"XL", path:"img (29).jpg",color:"Blue Green", brand:"Allen Solley"},
            {name:"Red Plain Shirt", price:2400, gender:"female", size:"L", path:"img (30).jpg",color:"Red", brand:"Van Huesen"},
            {name:"White Dotted Black Shirt", price:1450, gender:"female", size:"M", path:"img (31).jpg",color:"Black white", brand:"Louis Philippe"},
            {name:"Red Checkred Blue Shirt", price:1350, gender:"female", size:"L", path:"img (32).jpg",color:"Red Blue", brand:"Peter England"},
            {name:"White Plain Shirt", price:1840, gender:"female", size:"L", path:"img (33).jpg",color:"White", brand:"Calvein Klein"},
            {name:"White Plain Shirt", price:2100, gender:"female", size:"M", path:"img (34).jpg",color:"White", brand:"Lee Cooper"},
            {name:"Blue Denim Shirt", price:4400, gender:"female", size:"L", path:"img (35).jpg",color:"Blue", brand:"J Hampstead"},
            {name:"Black Plain Shirt", price:2500, gender:"female", size:"L", path:"img (36).jpg",color:"Black", brand:"Allen Solley"},
            {name:"Black Plain Shirt", price:3520, gender:"female", size:"M", path:"img (37).jpg",color:"Black", brand:"Van Huesen"},
            {name:"White Plain Shirt", price:4520, gender:"female", size:"S", path:"img (38).jpg",color:"Black", brand:"Louis Philippe"},
            {name:"Samon Pain Shirt", price:1450, gender:"female", size:"L", path:"img (39).jpg",color:"Salmon", brand:"Calvein Klein"},
            {name:"White Stripped Black Shirt", price:5400, gender:"female", size:"S", path:"img (40).jpg",color:"Black", brand:"Lee Cooper"}]
var a1=0
document.getElementById("brandList").onclick=function(){
        if(a1==0){
            document.getElementById("list2").style.display = "block"
            a1=1
        }
        else{
            document.getElementById("list2").style.display = "none"
            a1=0
        }
            
}    
var a=0
document.getElementById("PriceList").onclick=function(){
        if(a==0){
            document.getElementById("list3").style.display = "block"
            a=1
        }
        else{
            document.getElementById("list3").style.display = "none"
            a=0
        }
            
}    
var a2=0
document.getElementById("colorList").onclick=function(){
        if(a2==0){
            document.getElementById("list4").style.display = "block"
            a2=1
        }
        else{
            document.getElementById("list4").style.display = "none"
            a2=0
        }
            
}    





function getvalue(value){


        if(value.firstChild.style.backgroundColor == "white"){
            value.firstChild.style.backgroundColor = "blue"
            abc[abc.length]=value.innerText
        }else{
            value.firstChild.style.backgroundColor = "white"
            for ( x in abc) {
                if (abc[x] == value.innerText) {
                    abc.splice(x,1)
                }
            }   
        }

        for(i=0;i<abc.length;i++)
        {   
            for(j=i+1;j<abc.length;j++)
            {
                if(abc[i]==abc[j])
                {
                
                    abc.splice(j,1)
                }
            }
        }
    

}



document.getElementById("btn").onclick = function(){
    let string = document.getElementById("name").value
   
}
