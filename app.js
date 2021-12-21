var abc = []
var data = [{name:"Blue Denim Shirt", price:600, gender:"male", size:"L", path:"img (1).jpg",color:"Blue", brand:""},
            {name:"White and Blue Printed Shirt", price:1200, gender:"male", size:"XL", path:"img (2).jpg",color:"Blue", brand:""},
            {name:"Light Blue Denim Shirt", price:1500, gender:"male", size:"M", path:"img (3).jpg",color:"Blue", brand:""},
            {name:"Blue Printed White Shirt", price:800, gender:"male", size:"M", path:"img (4).jpg",color:"Blue", brand:""},
            {name:"White Line Printed Shirt", price:450, gender:"male", size:"L", path:"img (5).jpg",color:"White", brand:""},
            {name:"White Flower Printed Green Colored Shirt", price:700, gender:"female", size:"M", path:"img (6).jpg",color:"Green", brand:""},
            {name:"Khakee Colored Shirt", price:750, gender:"male", size:"L", path:"img (7).jpg",color:"Khakee", brand:""},
            {name:"Dark Blue Printed Shirt", price:500, gender:"male", size:"M", path:"img (8).jpg",color:"Blue", brand:""},
            {name:"Checkred Shirt", price:400, gender:"male", size:"XL", path:"img (9).jpg",color:"Red", brand:""},
            {name:"Grey Colored Plain Shirt", price:720, gender:"male", size:"L", path:"img (10).jpg",color:"Grey", brand:""},
            {name:"Brown Color Line White Shirt", price:1200, gender:"male", size:"L", path:"img (11).jpg",color:"White", brand:""},
            {name:"Soccer Club Blue Shirt", price:2000, gender:"male", size:"XL", path:"img (12).jpg",color:"Blue", brand:""},
            {name:"Printed Blue Shirt", price:1500, gender:"male", size:"M", path:"img (13).jpg",color:"Blue", brand:""},
            {name:"White Colored Plain Shirt", price:1200, gender:"femlae", size:"M", path:"img (14).jpg",color:"White", brand:""},
            {name:"White and Blue Shirt", price:2500, gender:"male", size:"XL", path:"img (15).jpg",color:"White", brand:""},
            {name:"Baige Colored Shirt", price:2800, gender:"male", size:"L", path:"img (16).jpg",color:"Baige", brand:""},
            {name:"Light colored Checkred Shirt", price:3000, gender:"male", size:"M", path:"img (17).jpg",color:"Red, Blue", brand:""},
            {name:"Blue Green Yellow Shirt", price:1200, gender:"male", size:"L", path:"img (18).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (19).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (20).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (21).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (22).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (23).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (24).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (25).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (26).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (27).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (28).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (29).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (30).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (31).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (32).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (33).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (34).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (35).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (36).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (37).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (38).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (39).jpg",color:"Blue", brand:""},
            {name:"Shirt 1", price:1200, gender:"male", size:"L", path:"img (40).jpg",color:"Blue", brand:""}]
function getvalue(value){
    var a1=0
    var a=0
    let list = []
    if(value == "Brand" && a1==0){
        document.getElementById("list2").style.display = "block"
        a1=1
    }
    else{
        document.getElementById("list2").style.display = "none"
        a1=0
        abc[abc.length]=value
    }
    if(value == "Price" && a==0){
        document.getElementById("list3").style.display = "block"
        a=1
    }
    else{
        document.getElementById("list3").style.display = "none"
        a=0
        abc[abc.length]=value
        
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
    for(i=0;i<abc.length;i++){
        if(abc[i]=="Brand" || abc[i]=="Price"){
            abc.splice(i,1)
        }
    }
    console.log(abc)
    abc.forEach(element => {
        console.log(element)
    });
}



document.getElementById("btn").onclick = function(){
    let string = document.getElementById("name").value

}
