
const descriptions = [
    {
        chinese: ["Китайский язык набирает популярность и оказывается нужен очень многим людям, работающим в области бизнеса, международной торговли и отношений. Владение этим языком откроет для вас новые горизонты, возможность жить, учиться в одной из самых развитых стран Азии, а также вести бизнес с китайскими партнерами."],
    },
    {
        english: ["Хотя порой освоить лексику и произношение бывает непросто, грамматика английского – гораздо проще, чем грамматика других европейских языков. Есть только два грамматических рода, по одному определённому и неопределённому артиклю, а падежи вообще не играют роли… овладеть основами английского невероятно просто, а там уже только вопрос времени, когда ты пополнишь свой словарный запас и подтянешь произношение."],
    },
];

//Константы того что будем менять
const description = document.querySelector('#description');
//Кнопочки
const chButton = document.querySelector('#chFaq');
const enButton = document.querySelector('#enFaq');

clearDescription();

function clearDescription(){
    description.innerHTML = '';
}

chButton.onclick = showChDescription;
function showChDescription(){
    description.innerHTML = (descriptions[0]['chinese']);
}

enButton.onclick = showEnDescription;
function showEnDescription(){
    description.innerHTML = descriptions[1]['english'];
}



