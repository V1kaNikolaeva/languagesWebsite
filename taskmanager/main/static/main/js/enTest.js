//Массив с вопросом, вариантами ответов, и правильным вариантом, 1 вопрос = 0, 1 ответ = 1
const questions = [
    {
        question: "Have you ever been ... Russia?",
        answers: ["in", "to", "on", "at"],
        correct: 2,
    },
    {
        question: "I was ...",
        answers: ["shocked", "shock", "shocking", "on shocked"],
        correct: 1,
    },
    {
        question: "椅子上...小猫",
        answers: ["有", "在", "了", "吧"],
        correct: 1,
    },
    {
        question: "去书店...走？",
        answers: ["怎么", "怎么样", "什么", "哪儿"],
        correct: 1,
    },
    {
        question: "他有三...多自行车",
        answers: ["个", "本", "只", "辆"],
        correct: 4,
    },
    {
        question: "他奶奶的房间是粉色...",
        answers: ["过", "了", "吗", "的"],
        correct: 4,
    },
    {
        question: "你最喜欢...个菜？",
        answers: ["怎么", "怎么样", "什么", "哪"],
        correct: 4,
    },
    {
        question: "那...手表三千多块钱",
        answers: ["块", "本", "只", "辆"],
        correct: 1,
    },
    {
        question: "你睡了十几...小时觉",
        answers: ["本", "只", "个", "辆"],
        correct: 3,
    },
    {
        question: "楼...一般都有空调",
        answers: ["了", "里", "外", "上"],
        correct: 2,
    },
];

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
    for (answerText of questions[questionIndex]['answers']){

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