// var getSubject = () =>{
//     let subjects = document.getElementsByName('subject[]');
//     //console.log(subjects.length);
//     let result = "";
//     for (let i =0 ; i< subjects.length;i++){
//         if(subjects[i].checked){
//             result +=subjects[i].value+" ";
//         }
//     }
//     document.getElementById("result").innerHTML=result;
// }
// document.addEventListener('change',getSubject);

// var quiz = () => {


//     //checkbox
//     let score = 0;
//     let subjects = document.getElementsByName('subject[]');
//     for (let i = 0; i < subjects.length; i++) {
//         if (subjects[i].checked) {
//             if (subjects[i].value == "CSS") {
//                 score += 0;
//                 break;
//             } else {
//                 score = 25;
//             }
//         }
//     }

//     //select
//     let js = document.querySelector("#chosseJS");
//     if (js.value != "best") {
//         score += 0;
//     } else {
//         score += 25;
//     }
//     document.getElementById("result").innerHTML = score;

//     // radio 1
//     let html = document.getElementById("html");
//     let html1 = document.getElementById("html1");
//     let html2 = document.getElementById("html2");
//         if(html.checked){
//             score += 25;
//         } else if (html1.checked){
//             score += 0;
//         } else if (html2.checked){
//             score += 0;
//         }

// }

// var btn = document.querySelector("#answer");
// btn.addEventListener('click', quiz);


var quiz = () => {
    //total score
    //question 1
    let score = 0;
    let html = document.getElementById('html');
    let html1 = document.getElementById('html1');
    let html2 = document.getElementById('html2');
    if(html.checked){
        score += 25;
    } else if (html1.checked){
        score += 0;
    } else if (html2.checked){
        score += 0;
    }

//question 2
    let css = document.getElementById('css');
    let css1 = document.getElementById('css1');
    let css2 = document.getElementById('css2');
    if(css.checked){
        score += 25;
    } else if (css1.checked){
        score +=0;
    } else if (css2.checked){
        score += 0;
    }
    //question 3

    let subjects = document.getElementsByName('subject[]');
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            if (subjects[i].value == "CSS") {
                score += 0;
                break;
            } else {
                score += 25/2;
            }
        }
    }
    //question 4
    let scipt = document.getElementById("chosseJS");
    if(scipt.value != "best"){
        score +=0;
    } else {
        score += 25;
    }

    document.getElementById("result").innerHTML = score;
}
    var btn = document.querySelector("#answer");
    btn.addEventListener('click', quiz);
    