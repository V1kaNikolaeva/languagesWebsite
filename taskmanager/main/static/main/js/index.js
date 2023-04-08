//Константы того что будем менять
const description = document.querySelector('.hidden');
//Кнопочки
const chButton = document.querySelector('#chFaq');
const enButton = document.querySelector('#enFaq');


const chText = 'Китайский язык набирает популярность и оказывается нужен очень многим людям, работающим в области бизнеса, международной торговли и отношений. Владение этим языком откроет для вас новые горизонты, возможность жить, учиться в одной из самых развитых стран Азии, а также вести бизнес с китайскими партнерами.'
const enText = 'Хотя порой освоить лексику и произношение бывает непросто, грамматика английского – гораздо проще, чем грамматика других европейских языков. Есть только два грамматических рода, по одному определённому и неопределённому артиклю, а падежи вообще не играют роли… овладеть основами английского невероятно просто, а там уже только вопрос времени, когда ты пополнишь свой словарный запас и подтянешь произношение.'

chButton.onclick = showChDescription;

function showChDescription(){
    description.classList.toggle('description');
    if (description.innerText == enText) {
        description.innerText = chText;
    }
    if (description.innerText == '') {
        description.innerText = chText;
    } else if (description.innerText == enText) {
        description.innerText = chText;
    }
}

enButton.onclick = showEnDescription;
function showEnDescription(){
    description.classList.toggle('description');
    if (description.innerText == chText) {
        description.innerText = enText;
    }
    if (description.innerText == '') {
        description.innerText = enText;
    } else if (description.innerText == chText) {
        description.innerText = enText;
    }
}
