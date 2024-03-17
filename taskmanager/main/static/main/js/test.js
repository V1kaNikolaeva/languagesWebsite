import { chQuestions } from './chTestQuestions.js'
import { enQuestions } from './enTestQuestions.js'


let currentTest;
if (Object.keys(sessionStorage).length === 1) {
    currentTest = Object.keys(sessionStorage).join('');
}

const questions = currentTest === 'chTest' ? chQuestions : enQuestions;

//Создаем константы с текстами, чтобы в дальнейшем оперировать ими
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

//Переменные теста
let score = 0; //Количество правильных ответов
let questionIndex = 0; //Текущий вопрос

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

//Функция (потом к ней обращаться, чтобы не копировать код) расчищающая разметку страницы
function clearPage(){
    headerContainer.innerHTML = ''; //Расчистили вопрос
    listContainer.innerHTML = ''; //Расчистили ответы
}

//Отображение вопроса
function showQuestion(){
    //Генерируем вопрос с помощью шаблона
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

    headerContainer.innerHTML = title;

    //Выводим элементы массива поочереди, варианты ответов
    let answerNumber = 1; //
    for (let answerText of questions[questionIndex]['answers']){

        const questionTemplate =
        `<li>
            <label>
                <input value="%number%" type="radio" class="answer" name="answer">
                <span>%answer%</span>
            </label>
        </li>`

        let answerHTML = questionTemplate.replace('%answer%', answerText)


        answerHTML = answerHTML.replace('%number%', answerNumber);
        console.log(answerHTML);



        listContainer.innerHTML = listContainer.innerHTML + answerHTML;
        answerNumber ++;

    }
}

function checkAnswer(){
    //выбранная кнопка
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    //Если ответ не выбран, выходим из функции
    if (!checkedRadio){
        submitBtn.blur();
        return
    }

    const userAnswer = parseInt(checkedRadio.value)

    //Если ответ верен увеличиваем счет
    if (userAnswer === questions[questionIndex]['correct']) {
        score++;
    }
    console.log('score =', score);

    //Последний или не последний вопрос
    if (questionIndex !== questions.length - 1) {
        console.log('no last')
        questionIndex++;
        clearPage();
        showQuestion();
        return;
    } else {
         console.log('last')
         clearPage();
         showResults();
    }
}

function showResults() {
    console.log('sdsdfdfs');
    console.log(score)

    const resultsTemplate = `
        <div class="lo">
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
            <p class="result">%result%</p>
        </div>
        `;
    let title, message;



    if (score === questions.length) {
        title = "Поздравляем!";
        message = "Вы ответили правильно на все вопросы";
    } else if ((score * 100) / questions.length >= 50) {
        title = "Неплохо!";
        message = "Вы ответили правильно на более чем половину вопросов";
    } else {
        title = "Вам стоит подучить";
        message = "Вы ответили правильно на менее чем половину вопросов";
    }

    let result = `${score} из ${questions.length} верных ответов`;


    const final = resultsTemplate
        .replace('%title%', title)
        .replace('%message%', message)
        .replace('%result%', result);
    headerContainer.innerHTML = final;


    //играть снова
    submitBtn.blur();
    submitBtn.innerText = 'Начать заново';
    submitBtn.onclick = function() {
        history.go();
    }
}
