var editButton=document.getElementById("editButton");
var likeButton=document.getElementById("likeButton");
var likeCount=0;
editButton.onclick = editBlogBody;
likeButton.onclick = increaseLikes;

function editBlogBody() {
  if(editButton.innerHTML=="Edit"){
  	editButton.innerHTML="Save";
  	var blogBody=document.getElementById("blogBody");
  	blogBody.contentEditable = "true";
  	blogBody.style.border= "1px solid purple";
  	var blogTitle=document.getElementById("blogTitleNew");
  	blogTitle.contentEditable = "true";
  	blogTitle.style.border= "1px solid red";
  }else{
  	editButton.innerHTML="Edit";
  	var blogBody=document.getElementById("blogBody");
  	blogBody.contentEditable = "false";
  	blogBody.style.border= "none";
  	var blogTitle=document.getElementById("blogTitleNew");
  	blogTitle.contentEditable = "false";
  	blogTitle.style.border= "none";
  }
}

function increaseLikes() {
  if(likeCount==0){
    likeCount++;
    likeButton.innerHTML="Liked!";
    var likeButtonMessage=document.getElementById("likeButtonMessage");
    likeButtonMessage.innerHTML="1 person likes this!";
  }
}