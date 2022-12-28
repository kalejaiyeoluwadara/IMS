//Function for Enter button.
function enterb(){
    var uname = (document.getElementById("name").value).toLowerCase();
    var arr = (uname[0]);
    var arr2 = (uname.substr(0,2));
    let gpa = ['a','b'];
    let gpb = ['l','m','n','o'];
    let gpc = ['c','d','e','f','g','h','i','j','k'];
    let gpd = ['o','p','e','r','s','t','u','v','w','x','y','z'];
    let allgp = gpa.concat(gpb).concat(gpc).concat(gpd);

    for(let i = 0;i<allgp.length;i++){
        if(arr == gpa[i]){
            shout('a');
        }
        else if(arr == gpb[i] && arr2 == 'ok'){
               shout('b') ;   
        }
        else if(arr == gpc[i]){
            shout('c');
        }
        else if(arr == gpd[i] && arr2 == 'ol'){
                shout('D');   
        }
       
      
    }
}


//Menu Animation 
function shout(msg){
    let msgbox = document.getElementById('msg');
    msgbox.innerHTML = "You're in group " + msg.toUpperCase();
}
var bool = true;
var lists = document.getElementsByTagName('li');
function nav(){
    if(bool == true){
        document.getElementById('main').style.height = '300px';
        document.getElementById('links').style.visibility = 'visible';
        document.getElementById('ul').style.transform = "translateX(0%)";
        bool = false;
    }
    else if(bool == false){
        document.getElementById('main').style.height = '90px';
        document.getElementById('links').style.visibility = 'hidden';
        document.getElementById('ul').style.transform = "translateX(-100%)";
        bool = true;
    }
    else{
        console.log('error');
    }
}