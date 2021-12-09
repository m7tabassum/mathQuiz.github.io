function send() {
    word = document.getElementById("word").value;
    question_word = "<h4 id='word_display'>Q."+word+"</h4>";
    input_box= "<br>answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    Document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
answer=document.getElementById("input_check_box").value;
if(answer == word)
{
    if(answer_turn == "player1")
    {
        player1_score=player1_score +1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score +1;
        document.getElementById("player2_score").innerHTMl = player2_score;

    }
}
if (question_turn=="player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question_Turn - " + player2_name ;
}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
}
if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
}
else
{
answer_turn="player1"
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ; 
}

document.getElementById("output").innerHTMl = "";
} 