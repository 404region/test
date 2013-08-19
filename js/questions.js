//QuestionExample
function Question(question, answer) {
    this.question = question || '';
    this.answer = answer || '<textarea cols="30" rows="4"></textarea>';
    this.npp = Question.prototype.npp++;
};

Question.prototype.npp = 1;

//Данные берутся динамически, значит индивидуальные стили прописываются прямо в question тегами/стилями
var qArr = ['Год рождения.', 'Город, в котором вы живёте.', 'Вуз, факультет, специальность, кафедра.', 'Год окончания вуза.', 'Уровень владения английским языком: <p><input type="checkbox" id="a5_1" value="1" name="q5"><label for="a5_1"> начальный;</label></p><p><input type="checkbox" id="a5_2" value="2" name="q5"><label for="a5_2"> средний;</label></p><p><input type="checkbox" id="a5_3" value="3" name="q5"><label for="a5_3"> свободное владение.</label></p>',
            'Чего вы ожидаете от участия в Школе?', 'Откуда вы о нас узнали?',
            'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?',
            'Расскажите о вашем опыте разработки. Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.',
            'Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.',
            'Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.',
            'Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?',
            'Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа: 4! + 0! + 5! + 8! + 5! = 40585 В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.', 'Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить.Задание<br>Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.<br>Полное условие задачи доступно на<br><a gref="https://github.com/yandex-shri/introtask-space">https://github.com/yandex-shri/introtask-space</a>.<br>В качестве ответа на вопрос пришлите ссылку на <a href="http://jsfiddle.net/">http://jsfiddle.net/</a> с вашим кодом или на ваш репозиторий на <a href="https://github.com/">https://github.com/</a>.', 'Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:<ul><li>проверка полноты и правильности заполнения полей (где это возможно);</li><li>возможность свернуть и развернуть разделы (аккордеон);</li><li>индикатор заполнения анкеты;</li><li>что-нибудь ещё.</li></ul>Подумайте над тем, как эти данные будут отправляться на сервер.<br>Будет плюсом, если вы сверстаете страницу, используя БЭМ.<br>Дополнительные задания<br>1. Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.<br>2. Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.<br>Разработку необходимо вести на <a href="https://github.com/">https://github.com/</a>. В качестве ответа на вопрос пришлите ссылку на проект.'
];

var questionArr = [];

for(var i=0; i<qArr.length; i++) {
    questionArr[i] = new Question(qArr[i]);
}

//questionArr[4].answer = '<p><input type="checkbox" id="a5_1" value="1" name="q5"><label for="a5_1"> начальный;</label></p><p><input type="checkbox" id="a5_2" value="2" name="q5"><label for="a5_2"> средний;</label></p><p><input type="checkbox" id="a5_3" value="3" name="q5"><label for="a5_3"> свободное владение.</label></p><textarea cols="55" rows="4"></textarea>';