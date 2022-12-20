
function enterb(){
    var uname = (document.getElementById("name").value).toLowerCase();
    var arr = (uname[0]);
    var arr2 = (uname.substr(0,2));
    console.log(arr2);
    let gpa = ['a','b'];
    let gpb = ['l','m','n','o'];
    let gpc = ['c','d','e','f','g','h','i','j','k'];
    let gpd = ['o','p','e','r','s','t','u','v','w','x','y','z'];
    let allgp = gpa.concat(gpb).concat(gpc).concat(gpd);

    // if(arr2 == 'ok'){
    //     console.log("Group B");
    // }
    // else if(arr2 == 'ol'){
    //     console.log("Group D");
    // }
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
function shout(msg){
    let msgbox = document.getElementById('msg');
    msgbox.innerHTML = "You're in group " + msg.toUpperCase();
}

function nav(){
    var tab = document.querySelector('.tabs');
    var nav = document.getElementById('navi');
    let view = tab.style.visibility;
    nav.style.height = '84px';
    // tab.style.visibility = 'hidden';
   if(view == 'visible'){
    nav.style.height = '84px';
    tab.style.visibility = 'hidden';
    }
    else{
        tab.style.visibility = 'visible';
        nav.style.height = '254px';
    }
}