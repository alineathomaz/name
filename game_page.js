player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").ineerHTML = player1_name + " : ";
document.getElementById("player1_name").ineerHTML = player1_name + " : "

document.getElementById("player1_score").ineerHTML = player1_score ;
document.getElementById("player2_score").ineerHTML = player2_score ;

document.getElementById("player_question") = "Turno De Pergunta - " + player1_name;
document.getElementById("player_answer") = "Turno De resposta - " + player1_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase ();
    console.log("palavra em letras minusculas = " + word);

    charAt1 = word.charAt1(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.legthe - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1 , "_")
    remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
    remove_charAt3 = remove_charAt2.replace(charAt3 , "_");

    question_word = "<h4 id='word_display'> P "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' oneclick='check()'>verificar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").ineerHTML = row;
    document.getElementById("word").value = "";
}