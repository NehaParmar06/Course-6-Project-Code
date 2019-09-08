document.getElementById("postUsername1").innerHTML = "Jimi";
document.getElementById("postUsername2").innerHTML = "Jimi";
document.getElementById("postUsername3").innerHTML = "Jimi";
document.getElementById("postUsername4").innerHTML = "Jimi";
document.getElementById("postUsername5").innerHTML = "Jimi";


document.getElementById("postTitle1").innerHTML = "Hello there ! This is Post 1.";
document.getElementById("postTitle2").innerHTML = "Hello there ! This is Post 2.";
document.getElementById("postTitle3").innerHTML = "Hello there ! This is Post 3.";
document.getElementById("postTitle4").innerHTML = "Hello there ! This is Post 4.";
document.getElementById("postTitle5").innerHTML = "Hello there ! This is Post 5.";

document.getElementById("postDesc1").innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";
document.getElementById("postDesc2").innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";
document.getElementById("postDesc3").innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";
document.getElementById("postDesc4").innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";
document.getElementById("postDesc5").innerHTML = "Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.";

function deletePost(){
    var modal = document.getElementById("alertPopup");
    var btn = document.getElementById("deletePostButton");
    document.getElementById("deleteConfirmationText").innerHTML = "Are you sure you want to delete this post?";
    btn.onclick = function() {
        document.getElementById('deletePostButton').style.color = 'indianred';
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            document.getElementById('deletePostButton').style.color = 'black';
            modal.style.display = "none";
        }
    }
    document.getElementById("noButton").onclick = function(){
        document.getElementById('deletePostButton').style.color = 'black';
        modal.style.display = "none";
    }
    document.getElementById("yesButton").onclick = function(){
        //Delete Post logic goes here
    }
}

showMore = function(){
    window.location.href = 'post.html'
}