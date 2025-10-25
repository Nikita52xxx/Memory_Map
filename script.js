// Данные о городах и сражениях
const citiesData = [
    {
        id: 1,
        name: "Москва",
        coords: [55.7558, 37.6173],
        description: "Битва за Москву — первое крупное поражение немецко-фашистских войск во Второй мировой войне.",
        overview: "Битва за Москву (30 сентября 1941 — 20 апреля 1942) — оборонительные операции и контрнаступление советских войск против немецких войск во Второй мировой войне. Это сражение сорвало план Гитлера на быструю победу и стало переломным моментом в войне.",
        heroes: [
            { name: "Генерал Г.К. Жуков", role: "Командующий Западным фронтом", image: "./img/heroes/1Zhukov.jpg" },
            { name: "28 панфиловцев", role: "Герои-защитники у разъезда Дубосеково", image: "./img/heroes/1ponf.jpg" },
            { name: "Зоя Космодемьянская", role: "Партизанка, первая женщина - Герой Советского Союза", image: "./img/heroes/1zoya.jpg" }
        ],
        timeline: [
            { date: "30 сентября 1941", event: "Начало немецкого наступления на Москву (Операция 'Тайфун')" },
            { date: "7 ноября 1941", event: "Парад на Красной площади, войска отправлялись прямо на фронт" },
            { date: "5-6 декабря 1941", event: "Начало контрнаступления советских войск" },
            { date: "20 апреля 1942", event: "Завершение Московской битвы, отброс немецких войск на 100-250 км" }
        ],
        stats: [
            { title: "Продолжительность", value: "203 дня" },
            { title: "Потери вермахта", value: "500+ тыс. человек" },
            { title: "Потери РККА", value: "1,8 млн человек" },
            { title: "Отброшены на", value: "100-250 км" }
        ],
        images: [
            "./img/cities/M1.jpeg",
            "./img/cities/M2.jpg",
            "./img/cities/M3.webp"
        ]
    },
    {
        id: 2,
        name: "Сталинград",
        coords: [48.708, 44.5133],
        description: "Сталинградская битва — коренной перелом в ходе Великой Отечественной войны.",
        overview: "Сталинградская битва (17 июля 1942 — 2 февраля 1943) — одно из важнейших сражений Второй мировой войны, в котором советские войска одержали крупнейшую победу. Эта битва ознаменовала начало коренного перелома в войне.",
        heroes: [
            { name: "Яков Павлов", role: "Командир группы, защищавшей 'Дом Павлова'", image: "./img/heroes/2Pavlov.jpg" },
            { name: "Василий Зайцев", role: "Легендарный снайпер, уничтожил 225 солдат противника", image: "./img/heroes/2Vasiliy.jpg" },
            { name: "Михаил Паникаха", role: "Матрос, ценой жизни поджег немецкий танк", image: "./img/heroes/2Mikhail.jpg" }
        ],
        timeline: [
            { date: "17 июля 1942", event: "Начало оборонительного этапа Сталинградской битвы" },
            { date: "23 августа 1942", event: "Массированная бомбардировка города немецкой авиацией" },
            { date: "19 ноября 1942", event: "Начало контрнаступления советских войск (Операция 'Уран')" },
            { date: "2 февраля 1943", event: "Капитуляция остатков 6-й немецкой армии" }
        ],
        stats: [
            { title: "Продолжительность", value: "200 дней" },
            { title: "Потери вермахта", value: "1,5 млн человек" },
            { title: "Потери РККА", value: "1,1 млн человек" },
            { title: "Пленные", value: "91 тыс. человек" }
        ],
        images: [
            "./img/cities/S1.jpg",
            "./img/cities/S2.jpg",
            "./img/cities/S3.jpg"
        ]
    },
    {
        id: 3,
        name: "Курск",
        coords: [51.7303, 36.1926],
        description: "Курская битва — крупнейшее танковое сражение в истории.",
        overview: "Курская битва (5 июля — 23 августа 1943) — совокупность стратегических оборонительной и наступательных операций Красной армии с целью сорвать крупное наступление сил вермахта и разгромить его стратегическую группировку.",
        heroes: [
            { name: "Иван Кожедуб", role: "Летчик-ас, сбил 62 немецких самолета", image: "./img/heroes/3Ivan.jpg" },
            { name: "Александр Покрышкин", role: "Второй по результативности летчик-ас", image: "./img/heroes/3alex.jpg" },
            { name: "Георгий Жуков", role: "Координатор действий фронтов", image: "./img/heroes/1Zhukov.jpg" }
        ],
        timeline: [
            { date: "5 июля 1943", event: "Начало немецкого наступления на Курской дуге" },
            { date: "12 июля 1943", event: "Крупнейшее танковое сражение под Прохоровкой" },
            { date: "3 августа 1943", event: "Начало наступления советских войск 'Полководец Румянцев'" },
            { date: "23 августа 1943", event: "Освобождение Харькова, завершение Курской битвы" }
        ],
        stats: [
            { title: "Продолжительность", value: "50 дней" },
            { title: "Танков с обеих сторон", value: "до 6000" },
            { title: "Потери вермахта", value: "500+ тыс. человек" },
            { title: "Потери РККА", value: "860+ тыс. человек" }
        ],
        images: [
            "./img/cities/K1.jpg",
            "./img/cities/K2.png",
            "./img/cities/K3.jpg"
        ]
    },
    {
        id: 4,
        name: "Ленинград",
        coords: [59.9343, 30.3351],
        description: "Блокада Ленинграда — одна из самых трагических страниц войны.",
        overview: "Блокада Ленинграда (8 сентября 1941 — 27 января 1944) — военная блокада города немецкими, финскими и испанскими войсками с участием добровольцев из Северной Африки, Европы и военно-морских сил Италии во время Великой Отечественной войны.",
        heroes: [
            { name: "Ольга Берггольц", role: "Поэтесса, 'голос блокадного Ленинграда'", image: "./img/heroes/4Olga.jpg" },
            { name: "Дмитрий Шостакович", role: "Композитор, автор 'Ленинградской симфонии'", image: "./img/heroes/4Dmitry.jpg" },
            { name: "Таня Савичева", role: "Школьница, автор блокадного дневника", image: "./img/heroes/4Tanya.jpg" }
        ],
        timeline: [
            { date: "8 сентября 1941", event: "Начало блокады Ленинграда" },
            { date: "22 ноября 1941", event: "Начало работы 'Дороги жизни' через Ладожское озеро" },
            { date: "18 января 1943", event: "Прорыв блокады (Операция 'Искра')" },
            { date: "27 января 1944", event: "Полное снятие блокады Ленинграда" }
        ],
        stats: [
            { title: "Продолжительность", value: "872 дня" },
            { title: "Жертвы блокады", value: "1,5+ млн человек" },
            { title: "По 'Дороге жизни'", value: "1,6 млн тонн грузов" },
            { title: "Эвакуировано", value: "1,3 млн человек" }
        ],
        images: [
            "./img/cities/L1.jpg",
            "./img/cities/L2.jpg",
            "./img/cities/L3.jpg"
        ]
    },
    {
        id: 5,
        name: "Берлин",
        coords: [52.5200, 13.4050],
        description: "Берлинская операция — завершающая стратегическая наступательная операция.",
        overview: "Берлинская наступательная операция (16 апреля — 8 мая 1945) — одна из последних стратегических операций советских войск на Европейском театре военных действий, в ходе которой Красная Армия заняла столицу Германии и победно завершила Великую Отечественную войну.",
        heroes: [
            { name: "Мелитон Кантария", role: "Водрузил Знамя Победы над Рейхстагом", image: "./img/heroes/5Meliton.jpg" },
            { name: "Михаил Егоров", role: "Водрузил Знамя Победы над Рейхстагом", image: "./img/heroes/5Mikhail_Yegorov.jpg" },
            { name: "Георгий Жуков", role: "Командующий 1-м Белорусским фронтом", image: "./img/heroes/1Zhukov.jpg" }
        ],
        timeline: [
            { date: "16 апреля 1945", event: "Начало Берлинской наступательной операции" },
            { date: "30 апреля 1945", event: "Водружение Знамени Победы над Рейхстагом" },
            { date: "2 мая 1945", event: "Капитуляция берлинского гарнизона" },
            { date: "8 мая 1945", event: "Подписание акта о безоговорочной капитуляции Германии" }
        ],
        stats: [
            { title: "Продолжительность", value: "23 дня" },
            { title: "Потери вермахта", value: "1 млн человек" },
            { title: "Потери РККА", value: "360+ тыс. человек" },
            { title: "Взято в плен", value: "480+ тыс. человек" }
        ],
        images: [
            "./img/cities/B1.jpg",
            "./img/cities/B2.jpg",
            "./img/cities/B3.jpg"
        ]
    }
];




// Данные для ленты времени
const timelineData = [
    { date: "22 июня 1941", title: "Начало войны", description: "Нападение Германии на СССР. Начало Великой Отечественной войны.", cityId: 1 },
    { date: "10 июля 1941", title: "Начало битвы за Москву", description: "Начало оборонительного этапа битвы за Москву.", cityId: 1 },
    { date: "8 сентября 1941", title: "Начало блокады Ленинграда", description: "Немецкие войска замкнули кольцо вокруг Ленинграда.", cityId: 4 },
    { date: "5 декабря 1941", title: "Контрнаступление под Москвой", description: "Начало контрнаступления советских войск под Москвой.", cityId: 1 },
    { date: "17 июля 1942", title: "Начало Сталинградской битвы", description: "Начало оборонительного этапа Сталинградской битвы.", cityId: 2 },
    { date: "19 ноября 1942", title: "Операция 'Уран'", description: "Начало контрнаступления советских войск под Сталинградом.", cityId: 2 },
    { date: "18 января 1943", title: "Прорыв блокады Ленинграда", description: "Советские войска прорвали блокаду Ленинграда.", cityId: 4 },
    { date: "5 июля 1943", title: "Курская битва", description: "Начало Курской битвы - крупнейшего танкового сражения.", cityId: 3 },
    { date: "6 июня 1944", title: "Открытие второго фронта", description: "Высадка союзников в Нормандии.", cityId: 5 },
    { date: "23 июня 1944", title: "Операция 'Багратион'", description: "Начало крупномасштабной наступательной операции в Белоруссии.", cityId: 5 },
    { date: "16 апреля 1945", title: "Берлинская операция", description: "Начало Берлинской наступательной операции.", cityId: 5 },
    { date: "30 апреля 1945", title: "Знамя Победы", description: "Водружение Знамени Победы над Рейхстагом.", cityId: 5 },
    { date: "9 мая 1945", title: "День Победы", description: "Подписание акта о безоговорочной капитуляции Германии.", cityId: 5 }
];





// Данные для викторины
const quizData = [
    {
        question: "Какое сражение стало коренным переломом в ходе Великой Отечественной войны?",
        options: [
            "Битва за Москву",
            "Сталинградская битва",
            "Курская битва",
            "Берлинская операция"
        ],
        correct: 1
    },
    {
        question: "Кто командовал обороной Сталинграда?",
        options: [
            "Г.К. Жуков",
            "К.К. Рокоссовский",
            "В.И. Чуйков",
            "И.С. Конев"
        ],
        correct: 2
    },
    {
        question: "Сколько дней длилась блокада Ленинграда?",
        options: [
            "500 дней",
            "672 дня",
            "872 дня",
            "900 дней"
        ],
        correct: 2
    },
    {
        question: "Какое кодовое название носила операция по освобождению Белоруссии в 1944 году?",
        options: [
            "'Уран'",
            "'Багратион'",
            "'Цитадель'",
            "'Искра'"
        ],
        correct: 1
    },
    {
        question: "Кто водрузил Знамя Победы над Рейхстагом?",
        options: [
            "Жуков и Рокоссовский",
            "Егоров и Кантария",
            "Василевский и Конев",
            "Чуйков и Зайцев"
        ],
        correct: 1
    }
];



// Инициализация карты
let map;
let markers = [];




function initMap() {
    // Создаем карту с центром на европейской части СССР
    map = L.map('map').setView([55.0, 40.0], 4);

    // Добавляем слой карты (используем OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    // Добавляем маркеры для каждого города
    citiesData.forEach(city => {
        const marker = L.marker(city.coords)
            .addTo(map)
            .bindPopup(`<b>${city.name}</b><br>${city.description}`)
            .on('click', () => {
                showCityPopup(city);
            });

        markers.push(marker);
    });
}



// Показ попапа с информацией о городе
function showCityPopup(city) {
    document.getElementById('popup-title').textContent = city.name;
    document.getElementById('overview-content').textContent = city.overview;



    // Заполняем вкладку с героями
    const heroesContent = document.getElementById('heroes-content');
    heroesContent.innerHTML = '';
    city.heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        heroCard.innerHTML = `
                    <img src="${hero.image}" alt="${hero.name}">
                    <h4>${hero.name}</h4>
                    <p>${hero.role}</p>
                `;
        heroesContent.appendChild(heroCard);
    });



    // Заполняем вкладку с хронологией
    const cityTimeline = document.getElementById('city-timeline');
    cityTimeline.innerHTML = '';
    city.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item-small';
        timelineItem.innerHTML = `
                    <div class="timeline-date">${item.date}</div>
                    <p>${item.event}</p>
                `;
        cityTimeline.appendChild(timelineItem);
    });



    // Заполняем вкладку со статистикой
    const statsContent = document.getElementById('stats-content');
    statsContent.innerHTML = '';
    city.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
                    <div class="stat-title">${stat.title}</div>
                    <div class="stat-value">${stat.value}</div>
                `;
        statsContent.appendChild(statItem);
    });



    // Заполняем вкладку с галереей
    const galleryContent = document.getElementById('gallery-content');
    galleryContent.innerHTML = '';
    city.images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image}" alt="${city.name}">`;
        galleryContent.appendChild(galleryItem);
    });


    // Показываем попап
    document.getElementById('city-popup').classList.add('active');
}



// Закрытие попапа
document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('city-popup').classList.remove('active');
});




// Переключение вкладок в попапе
document.querySelectorAll('.popup-tab').forEach(tab => {
    tab.addEventListener('click', () => {


        // Убираем активный класс у всех вкладок
        document.querySelectorAll('.popup-tab').forEach(t => {
            t.classList.remove('active');
        });


        // Добавляем активный класс текущей вкладке
        tab.classList.add('active');


        // Скрываем все содержимое вкладок
        document.querySelectorAll('.popup-tab-content').forEach(content => {
            content.classList.remove('active');
        });


        // Показываем содержимое текущей вкладки
        const tabId = tab.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});




// Заполнение списка городов
function populateCityList() {
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = '';

    citiesData.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.className = 'city-card';
        cityCard.innerHTML = `
                    <h3>${city.name}</h3>
                    <p>${city.description}</p>
                `;


        cityCard.addEventListener('click', () => {
            // Центрируем карту на выбранном городе
            map.setView(city.coords, 8);

            // Открываем попап с информацией о городе
            showCityPopup(city);
        });

        cityList.appendChild(cityCard);
    });
}



// Заполнение ленты времени
function populateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    timelineData.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

        timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-date">${event.date}</div>
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                `;


        // Добавляем обработчик клика для перехода к городу на карте
        timelineItem.addEventListener('click', () => {
            // Переключаемся на вкладку карты
            switchSection('map-section');

            // Находим город по ID
            const city = citiesData.find(c => c.id === event.cityId);
            if (city) {
                // Центрируем карту на городе
                map.setView(city.coords, 8);

                // Открываем попап с информацией о городе
                showCityPopup(city);
            }
        });

        timeline.appendChild(timelineItem);
    });
}




// Инициализация викторины
let currentQuestion = 0;
let userAnswers = [];

function initQuiz() {
    showQuestion(0);

    // Обработчики для кнопок навигации
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentQuestion > 0) {
            showQuestion(currentQuestion - 1);
        }
    });



    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentQuestion < quizData.length - 1) {
            showQuestion(currentQuestion + 1);
        } else {
            showResults();
        }
    });

}

function showQuestion(index) {
    currentQuestion = index;
    const question = quizData[index];
    const questionContainer = document.getElementById('question-container');

    // Обновляем прогресс-бар
    const progress = ((index + 1) / quizData.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;



    // Создаем HTML для вопроса
    let optionsHtml = '';
    question.options.forEach((option, i) => {
        const isSelected = userAnswers[index] === i;
        optionsHtml += `
                    <div class="option ${isSelected ? 'selected' : ''}" data-index="${i}">
                        ${option}
                    </div>
                `;
    });



    questionContainer.innerHTML = `
                <div class="question-text">${question.question}</div>
                <div class="options-container">
                    ${optionsHtml}
                </div>
            `;



    // Добавляем обработчики для вариантов ответа
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            // Убираем выделение у всех вариантов
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Выделяем выбранный вариант
            option.classList.add('selected');

            // Сохраняем ответ пользователя
            userAnswers[index] = parseInt(option.getAttribute('data-index'));

            // Активируем кнопку "Далее"
            document.getElementById('next-btn').disabled = false;
        });
    });

    // Обновляем состояние кнопок навигации
    document.getElementById('prev-btn').disabled = index === 0;

    if (index === quizData.length - 1) {
        document.getElementById('next-btn').textContent = 'Завершить';
    } else {
        document.getElementById('next-btn').textContent = 'Далее';
    }

    // Если ответ уже выбран, активируем кнопку "Далее"
    if (userAnswers[index] !== undefined) {
        document.getElementById('next-btn').disabled = false;
    } else {
        document.getElementById('next-btn').disabled = true;
    }
}



function showResults() {
    // Подсчитываем правильные ответы
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / quizData.length) * 100);

    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
                <div class="result-container">
                    <h3>Викторина завершена!</h3>
                    <div class="result-score">${score}%</div>
                    <p>Вы правильно ответили на ${correctCount} из ${quizData.length} вопросов</p>
                    <button class="quiz-btn" id="restart-btn">Пройти еще раз</button>
                </div>
            `;


    // Скрываем кнопки навигации
    document.querySelector('.quiz-controls').style.display = 'none';


    // Обработчик для кнопки перезапуска
    document.getElementById('restart-btn').addEventListener('click', () => {
        // Сбрасываем викторину
        currentQuestion = 0;
        userAnswers = [];
        document.querySelector('.quiz-controls').style.display = 'flex';
        initQuiz();
    });
}




// Переключение между разделами
function switchSection(sectionId) {
    // Скрываем все разделы
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Показываем выбранный раздел
    document.getElementById(sectionId).classList.add('active');

    // Обновляем активную кнопку в навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelector(`.nav-btn[data-section="${sectionId}"]`).classList.add('active');
}



// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    populateCityList();
    populateTimeline();
    initQuiz();

    // Обработчики для кнопок навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
});