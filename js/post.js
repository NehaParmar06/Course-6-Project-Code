var editButton=document.getElementById("editButton");
var likeButton=document.getElementById("likeButton");
var commentButton=document.getElementById("commentButton");

var likeCount=0;
editButton.onclick = editBlogBody;
likeButton.onclick = increaseLikes;
commentButton.onclick=addNewComment;

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

function addNewComment(){
  var comment=document.getElementById("commentBody").value;
  var commentList=document.getElementById("commentList");
  commentList.innerHTML+='<div class="commentHolder"><p class="para" id="commentDetails">'+comment+'</p></div>';

}