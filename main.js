var images = 
["https://th.bing.com/th/id/OIP.AUftiPwQ8cT-BpMnhyd5-QHaGS?pid=ImgDet&rs=1",
"https://p7.hiclipart.com/preview/8/82/517/cartoon-grandparent-clip-art-grandma-cliparts.jpg",
"https://i.pinimg.com/originals/01/9b/90/019b90b5f8f04e00e0c7b104da92a67a.jpg",
"https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180402977/98700094-father-with-son-characters-vector-illustration-design-.jpg?ver=6",
"https://image.shutterstock.com/image-vector/two-lovely-happy-best-friends-260nw-1396219235.jpg",
"https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",
"https://previews.123rf.com/images/kotorina/kotorina1905/kotorina190500003/126482224-six-member-family-energetic-gathering.jpg"];

var names = 
["Ravinder Kumar Singhal","Madhu Singhal","Heena Singhal","Mohit Singhal","Advika Singhal",
"Adrika Singhal","My Family"];

var i = 0;
function update()
{

   

    var numberoffamilymembersinarray = 6;

    if(i > numberoffamilymembersinarray)
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];

    document.getElementById("dadu").src = updateImage;
    document.getElementById("names_family").innerHTML = updateName;
    i++;
}