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
    },
    {
        id: 6,
        name: "Киев",
        coords: [50.4501, 30.5234],
        description: "Киевская оборонительная операция — одно из крупнейших сражений начального периода войны.",
        overview: "Киевская оборонительная операция (7 июля — 26 сентября 1941) — крупномасштабное сражение Красной Армии и Вермахта в ходе Великой Отечественной войны. Несмотря на поражение, оборона Киева на 2 месяца задержала продвижение немецких войск на московском направлении.",
        heroes: [
            { name: "Михаил Кирпонос", role: "Командующий Юго-Западным фронтом", image: "./img/heroes/6Kirponos.jpg" },
            { name: "Александр Богомолец", role: "Врач, спасший тысячи раненых", image: "./img/heroes/6Bogomolets.jpg" },
            { name: "Иван Баграмян", role: "Начальник оперативного отдела фронта", image: "./img/heroes/6Bagramyan.jpg" }
        ],
        timeline: [
            { date: "7 июля 1941", event: "Начало Киевской оборонительной операции" },
            { date: "11 июля 1941", event: "Войска вермахта вышли к Киевскому укрепрайону" },
            { date: "19 сентября 1941", event: "Приказ оставить Киев" },
            { date: "26 сентября 1941", event: "Завершение операции, окружение основных сил фронта" }
        ],
        stats: [
            { title: "Продолжительность", value: "82 дня" },
            { title: "Потери вермахта", value: "128 тыс. человек" },
            { title: "Потери РККА", value: "700+ тыс. человек" },
            { title: "Задержка наступления", value: "2 месяца" }
        ],
        images: [
            "./img/cities/Kyiv1.jpg",
            "./img/cities/Kyiv2.jpg",
            "./img/cities/Kyiv3.jpg"
        ]
    },
    {
        id: 7,
        name: "Днепр",
        coords: [48.4647, 35.0462],
        description: "Битва за Днепр — одно из крупнейших сражений 1943 года.",
        overview: "Битва за Днепр (26 августа — 23 декабря 1943) — ряд взаимосвязанных стратегических операций Великой Отечественной войны, проведённых во второй половине 1943 года на берегах Днепра. С обеих сторон в битве приняло участие до 4 млн человек.",
        heroes: [
            { name: "Николай Ватутин", role: "Командующий 1-м Украинским фронтом", image: "./img/heroes/7Vatutin.jpg" },
            { name: "Иван Конев", role: "Командующий 2-м Украинским фронтом", image: "./img/heroes/7Konev.jpg" },
            { name: "Алексей Берест", role: "Участник форсирования Днепра", image: "./img/heroes/7Berest.jpg" }
        ],
        timeline: [
            { date: "26 августа 1943", event: "Начало Черниговско-Полтавской операции" },
            { date: "22 сентября 1943", event: "Первые успешные форсирования Днепра" },
            { date: "6 ноября 1943", event: "Освобождение Киева" },
            { date: "23 декабря 1943", event: "Завершение битвы за Днепр" }
        ],
        stats: [
            { title: "Продолжительность", value: "120 дней" },
            { title: "Участников с обеих сторон", value: "4 млн человек" },
            { title: "Потери вермахта", value: "1,2 млн человек" },
            { title: "Потери РККА", value: "1,5 млн человек" }
        ],
        images: [
            "./img/cities/Dnepr1.jpg",
            "./img/cities/Dnepr2.jpg",
            "./img/cities/Dnepr3.jpg"
        ]
    },
    {
        id: 8,
        name: "Висла-Одер",
        coords: [52.2297, 21.0122],
        description: "Висло-Одерская операция — самое стремительное наступление в военной истории.",
        overview: "Висло-Одерская операция (12 января — 3 февраля 1945) — стратегическое наступление 1-го Белорусского и 1-го Украинского фронтов, в ходе которого была освобождена территория Польши к западу от Вислы. Эта битва вошла в историю как самое стремительное наступление — на протяжении 20 суток советские войска продвигались на расстояние от 20 до 30 км в день.",
        heroes: [
            { name: "Георгий Жуков", role: "Командующий 1-м Белорусским фронтом", image: "./img/heroes/1Zhukov.jpg" },
            { name: "Иван Конев", role: "Командующий 1-м Украинским фронтом", image: "./img/heroes/7Konev.jpg" },
            { name: "Василий Чуйков", role: "Командующий 8-й гвардейской армией", image: "./img/heroes/8Chuikov.jpg" }
        ],
        timeline: [
            { date: "12 января 1945", event: "Начало Висло-Одерской операции" },
            { date: "17 января 1945", event: "Освобождение Варшавы" },
            { date: "29 января 1945", event: "Выход к Одеру" },
            { date: "3 февраля 1945", event: "Завершение операции" }
        ],
        stats: [
            { title: "Продолжительность", value: "23 дня" },
            { title: "Потери вермахта", value: "480 тыс. человек" },
            { title: "Потери РККА", value: "43,2 тыс. человек" },
            { title: "Скорость наступления", value: "20-30 км/день" }
        ],
        images: [
            "./img/cities/Vistula1.jpg",
            "./img/cities/Vistula2.jpg",
            "./img/cities/Vistula3.jpg"
        ]
    },
    {
        id: 9,
        name: "Смоленск",
        coords: [54.7826, 32.0453],
        description: "Смоленское сражение — важное оборонительное сражение 1941 года.",
        overview: "Смоленское сражение (10 июля — 10 сентября 1941) — комплекс оборонительных и наступательных действий советских войск против немецкой группы армий 'Центр'. Сражение сорвало план молниеносной войны и задержало наступление на Москву на 2 месяца.",
        heroes: [
            { name: "Семён Тимошенко", role: "Командующий Западным фронтом", image: "./img/heroes/9Timoshenko.jpg" },
            { name: "Георгий Жуков", role: "Командующий Резервным фронтом", image: "./img/heroes/1Zhukov.jpg" },
            { name: "Михаил Ефремов", role: "Командующий 33-й армией", image: "./img/heroes/9Efremov.jpg" }
        ],
        timeline: [
            { date: "10 июля 1941", event: "Начало Смоленского сражения" },
            { date: "16 июля 1941", event: "Падение Смоленска" },
            { date: "30 июля 1941", event: "Контрудар советских войск" },
            { date: "10 сентября 1941", event: "Завершение сражения" }
        ],
        stats: [
            { title: "Продолжительность", value: "60 дней" },
            { title: "Потери вермахта", value: "250 тыс. человек" },
            { title: "Потери РККА", value: "760 тыс. человек" },
            { title: "Задержка на Москву", value: "2 месяца" }
        ],
        images: [
            "./img/cities/Smolensk1.jpg",
            "./img/cities/Smolensk2.jpg",
            "./img/cities/Smolensk3.jpg"
        ]
    },
    {
        id: 10,
        name: "Харьков",
        coords: [49.9935, 36.2304],
        description: "Харьковские операции — серия важных сражений за стратегический город.",
        overview: "Харьковские операции (1941-1943) — серия сражений за важный промышленный и транспортный узел. Включает оборонительную операцию 1941 года, Барвенково-Лозовскую операцию 1942 года и освобождение Харькова в 1943 году после Курской битвы.",
        heroes: [
            { name: "Иван Конев", role: "Командующий войсками при освобождении", image: "./img/heroes/7Konev.jpg" },
            { name: "Филипп Голиков", role: "Командующий в 1942 году", image: "./img/heroes/10Golikov.jpg" },
            { name: "Алексей Ватутин", role: "Участник Харьковских операций", image: "./img/heroes/7Vatutin.jpg" }
        ],
        timeline: [
            { date: "20 октября 1941", event: "Первое падение Харькова" },
            { date: "12 мая 1942", event: "Начало Харьковской операции" },
            { date: "23 августа 1943", event: "Окончательное освобождение Харькова" },
            { date: "30 августа 1943", event: "Салют в Москве в честь освобождения" }
        ],
        stats: [
            { title: "Количество операций", value: "4 основные" },
            { title: "Общие потери", value: "500+ тыс. с обеих сторон" },
            { title: "Дата освобождения", value: "23 августа 1943" },
            { title: "Стратегическое значение", value: "Ключевой промышленный узел" }
        ],
        images: [
            "./img/cities/Kharkiv1.jpg",
            "./img/cities/Kharkiv2.jpg",
            "./img/cities/Kharkiv3.jpg"
        ]
    },
    {
        id: 11,
        name: "Крым",
        coords: [45.0448, 34.1000],
        description: "Крымская наступательная операция — освобождение Крымского полуострова.",
        overview: "Крымская наступательная операция (8 апреля — 12 мая 1944) — стратегическая операция советских войск с целью освобождения Крыма от немецких войск во время Великой Отечественной войны. Завершилась полным разгромом 17-й немецкой армии.",
        heroes: [
            { name: "Фёдор Толбухин", role: "Командующий 4-м Украинским фронтом", image: "./img/heroes/11Tolbukhin.jpg" },
            { name: "Андрей Ерёменко", role: "Командующий Отдельной Приморской армией", image: "./img/heroes/11Eremenko.jpg" },
            { name: "Филипп Октябрьский", role: "Командующий Черноморским флотом", image: "./img/heroes/11Oktyabrsky.jpg" }
        ],
        timeline: [
            { date: "8 апреля 1944", event: "Начало наступления" },
            { date: "11 апреля 1944", event: "Прорыв обороны на Перекопе" },
            { date: "9 мая 1944", event: "Освобождение Севастополя" },
            { date: "12 мая 1944", event: "Капитуляция остатков немецких войск" }
        ],
        stats: [
            { title: "Продолжительность", value: "35 дней" },
            { title: "Потери вермахта", value: "140 тыс. человек" },
            { title: "Потери РККА", value: "84 тыс. человек" },
            { title: "Освобождено городов", value: "Все города Крыма" }
        ],
        images: [
            "./img/cities/Crimea1.jpg",
            "./img/cities/Crimea2.jpg",
            "./img/cities/Crimea3.jpg"
        ]
    }

];




// Данные для ленты времени
const timelineData = [
    { date: "22 июня 1941", title: "Начало войны", description: "Нападение Германии на СССР. Начало Великой Отечественной войны.", cityId: 1 },
    { date: "10 июля 1941", title: "Смоленское сражение", description: "Начало одного из крупнейших оборонительных сражений 1941 года.", cityId: 9 },
    { date: "11 июля 1941", title: "Оборона Киева", description: "Начало героической обороны Киева.", cityId: 6 },
    { date: "8 сентября 1941", title: "Начало блокады Ленинграда", description: "Немецкие войска замкнули кольцо вокруг Ленинграда.", cityId: 4 },
    { date: "30 сентября 1941", title: "Начало битвы за Москву", description: "Начало оборонительного этапа битвы за Москву.", cityId: 1 },
    { date: "5 декабря 1941", title: "Контрнаступление под Москвой", description: "Начало контрнаступления советских войск под Москвой.", cityId: 1 },
    { date: "12 мая 1942", title: "Харьковская операция", description: "Начало наступления под Харьковом.", cityId: 10 },
    { date: "17 июля 1942", title: "Начало Сталинградской битвы", description: "Начало оборонительного этапа Сталинградской битвы.", cityId: 2 },
    { date: "19 ноября 1942", title: "Операция 'Уран'", description: "Начало контрнаступления советских войск под Сталинградом.", cityId: 2 },
    { date: "18 января 1943", title: "Прорыв блокады Ленинграда", description: "Советские войска прорвали блокаду Ленинграда.", cityId: 4 },
    { date: "5 июля 1943", title: "Курская битва", description: "Начало Курской битвы - крупнейшего танкового сражения.", cityId: 3 },
    { date: "24 августа 1943", title: "Битва за Днепр", description: "Начало масштабной битвы за Днепр.", cityId: 7 },
    { date: "8 апреля 1944", title: "Освобождение Крыма", description: "Начало Крымской наступательной операции.", cityId: 11 },
    { date: "6 июня 1944", title: "Открытие второго фронта", description: "Высадка союзников в Нормандии.", cityId: 5 },
    { date: "23 июня 1944", title: "Операция 'Багратион'", description: "Начало крупномасштабной наступательной операции в Белоруссии.", cityId: 5 },
    { date: "12 января 1945", title: "Висло-Одерская операция", description: "Начало самого стремительного наступления в истории.", cityId: 8 },
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



// Функция для инициализации раздела аналитики
function initAnalytics() {
    populateBattleSelectors();

    document.getElementById('compare-btn').addEventListener('click', compareBattles);

    document.querySelectorAll('.battle-select').forEach(select => {
        select.addEventListener('change', checkAutoCompare);
    });
}

// Заполнение селекторов сражениями
function populateBattleSelectors() {
    const select1 = document.getElementById('battle1');
    const select2 = document.getElementById('battle2');

    citiesData.forEach(city => {
        const option1 = new Option(city.name, city.id);
        const option2 = new Option(city.name, city.id);

        select1.add(option1);
        select2.add(option2);
    });
}

// Проверка возможности автоматического сравнения
function checkAutoCompare() {
    const battle1 = document.getElementById('battle1').value;
    const battle2 = document.getElementById('battle2').value;

    if (battle1 && battle2 && battle1 !== battle2) {
        compareBattles();
    }
}

// Основная функция сравнения
function compareBattles() {
    const battle1Id = parseInt(document.getElementById('battle1').value);
    const battle2Id = parseInt(document.getElementById('battle2').value);

    if (!battle1Id || !battle2Id) {
        alert('Пожалуйста, выберите два сражения для сравнения');
        return;
    }

    if (battle1Id === battle2Id) {
        alert('Пожалуйста, выберите разные сражения для сравнения');
        return;
    }

    const battle1 = citiesData.find(city => city.id === battle1Id);
    const battle2 = citiesData.find(city => city.id === battle2Id);

    if (!battle1 || !battle2) {
        alert('Ошибка: сражения не найдены');
        return;
    }

    displayComparison(battle1, battle2);
}

// Отображение результатов сравнения
function displayComparison(battle1, battle2) {
    const resultsContainer = document.getElementById('comparison-results');

    // Получаем числовые значения для статистики
    const stats1 = extractNumericStats(battle1);
    const stats2 = extractNumericStats(battle2);

    resultsContainer.innerHTML = `
        <div class="comparison-grid">
            <!-- Первое сражение -->
            <div class="comparison-battle">
                <div class="battle-header">
                    <h3 class="battle-title">${battle1.name}</h3>
                    <div class="battle-period">${getBattlePeriod(battle1)}</div>
                </div>
                <div class="comparison-stats">
                    ${renderBattleStats(battle1, stats1)}
                </div>
            </div>
            
            <!-- Второе сражение -->
            <div class="comparison-battle">
                <div class="battle-header">
                    <h3 class="battle-title">${battle2.name}</h3>
                    <div class="battle-period">${getBattlePeriod(battle2)}</div>
                </div>
                <div class="comparison-stats">
                    ${renderBattleStats(battle2, stats2)}
                </div>
            </div>
            
            <!-- Графики сравнения -->
            <div class="comparison-charts">
                <div class="chart-container">
                    <div class="chart-title">Сравнение потерь (тыс. человек)</div>
                    ${renderLossesChart(stats1, stats2, battle1.name, battle2.name)}
                </div>
                
                <div class="chart-container">
                    <div class="chart-title">Продолжительность сражений (дни)</div>
                    ${renderDurationChart(stats1, stats2, battle1.name, battle2.name)}
                </div>
            </div>
            
            <!-- Аналитические выводы -->
            <div class="analysis-conclusion">
                <h4 class="conclusion-title">Аналитические выводы</h4>
                <div class="conclusion-text">
                    ${generateAnalysis(battle1, battle2, stats1, stats2)}
                </div>
            </div>
        </div>
    `;

    setTimeout(animateCharts, 100);
}

// Извлечение числовой статистики
function extractNumericStats(battle) {
    const stats = {
        duration: 0,
        losses: 0,
        germanLosses: 0
    };

    // Извлекаем продолжительность
    const durationStat = battle.stats.find(stat => stat.title.includes('Продолжительность'));
    if (durationStat) {
        stats.duration = parseFloat(durationStat.value);
    }

    // Извлекаем потери РККА
    const lossesStat = battle.stats.find(stat =>
        stat.title.includes('Потери РККА') ||
        stat.title.includes('Потери СССР')
    );
    if (lossesStat) {
        stats.losses = parseFloat(lossesStat.value.replace(/[^\d.]/g, ''));
    }

    // Извлекаем потери вермахта
    const germanLossesStat = battle.stats.find(stat =>
        stat.title.includes('Потери вермахта') ||
        stat.title.includes('Потери Германии')
    );
    if (germanLossesStat) {
        stats.germanLosses = parseFloat(germanLossesStat.value.replace(/[^\d.]/g, ''));
    }

    return stats;
}

// Получение периода сражения
function getBattlePeriod(battle) {
    const firstDate = battle.timeline[0]?.date || '';
    const lastDate = battle.timeline[battle.timeline.length - 1]?.date || '';
    return `${firstDate} - ${lastDate}`;
}

// Рендеринг статистики сражения
function renderBattleStats(battle, numericStats) {
    return battle.stats.map(stat => `
        <div class="stat-row">
            <span class="stat-label">${stat.title}:</span>
            <span class="stat-value">${stat.value}</span>
        </div>
    `).join('');
}

// Рендеринг графика потерь
function renderLossesChart(stats1, stats2, name1, name2) {
    const maxLosses = Math.max(stats1.losses, stats2.losses, stats1.germanLosses, stats2.germanLosses);

    return `
        <div class="chart-bar">
            <div class="chart-label">${name1} (РККА)</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats1.losses}" style="width: 0%; background: #8B0000;">
                    <span class="chart-bar-value">${stats1.losses} тыс.</span>
                </div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-label">${name2} (РККА)</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats2.losses}" style="width: 0%; background: #8B0000;">
                    <span class="chart-bar-value">${stats2.losses} тыс.</span>
                </div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-label">${name1} (вермахт)</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats1.germanLosses}" style="width: 0%; background: #2F4F4F;">
                    <span class="chart-bar-value">${stats1.germanLosses} тыс.</span>
                </div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-label">${name2} (вермахт)</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats2.germanLosses}" style="width: 0%; background: #2F4F4F;">
                    <span class="chart-bar-value">${stats2.germanLosses} тыс.</span>
                </div>
            </div>
        </div>
    `;
}

// Рендеринг графика продолжительности
function renderDurationChart(stats1, stats2, name1, name2) {
    const maxDuration = Math.max(stats1.duration, stats2.duration);

    return `
        <div class="chart-bar">
            <div class="chart-label">${name1}</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats1.duration}" style="width: 0%; background: #DAA520;">
                    <span class="chart-bar-value">${stats1.duration} дн.</span>
                </div>
            </div>
        </div>
        <div class="chart-bar">
            <div class="chart-label">${name2}</div>
            <div class="chart-bar-container">
                <div class="chart-bar-fill" data-value="${stats2.duration}" style="width: 0%; background: #DAA520;">
                    <span class="chart-bar-value">${stats2.duration} дн.</span>
                </div>
            </div>
        </div>
    `;
}

// Генерация аналитических выводов
function generateAnalysis(battle1, battle2, stats1, stats2) {
    const conclusions = [];

    // Сравнение продолжительности
    if (stats1.duration > stats2.duration) {
        conclusions.push(`<strong>${battle1.name}</strong> было более продолжительным сражением (${stats1.duration} дней против ${stats2.duration} дней)`);
    } else {
        conclusions.push(`<strong>${battle2.name}</strong> было более продолжительным сражением (${stats2.duration} дней против ${stats1.duration} дней)`);
    }

    // Сравнение потерь РККА
    if (stats1.losses > stats2.losses) {
        conclusions.push(`<strong>${battle1.name}</strong> потребовало больших жертв от Красной Армии (${stats1.losses} тыс. против ${stats2.losses} тыс. человек)`);
    } else {
        conclusions.push(`<strong>${battle2.name}</strong> потребовало больших жертв от Красной Армии (${stats2.losses} тыс. против ${stats1.losses} тыс. человек)`);
    }

    // Сравнение эффективности (соотношение потерь)
    const efficiency1 = stats1.germanLosses / stats1.losses;
    const efficiency2 = stats2.germanLosses / stats2.losses;

    if (efficiency1 > efficiency2) {
        conclusions.push(`<strong>${battle1.name}</strong> было более эффективным с точки зрения соотношения потерь (${efficiency1.toFixed(2)}:1 против ${efficiency2.toFixed(2)}:1)`);
    } else {
        conclusions.push(`<strong>${battle2.name}</strong> было более эффективным с точки зрения соотношения потерь (${efficiency2.toFixed(2)}:1 против ${efficiency1.toFixed(2)}:1)`);
    }

    // Стратегическое значение
    conclusions.push(`Оба сражения имели важное стратегическое значение в ходе Великой Отечественной войны, определив дальнейший ход боевых действий на соответствующих направлениях.`);

    return conclusions.map(conclusion => `<p>${conclusion}</p>`).join('');
}

// Анимация графиков
function animateCharts() {
    const chartBars = document.querySelectorAll('.chart-bar-fill');

    chartBars.forEach(bar => {
        const value = parseFloat(bar.getAttribute('data-value'));
        const maxValue = getMaxValueForChart(bar);
        const percentage = (value / maxValue) * 100;

        setTimeout(() => {
            bar.style.width = `${percentage}%`;
        }, 100);
    });
}

function getMaxValueForChart(barElement) {
    const chartContainer = barElement.closest('.chart-container');
    const bars = chartContainer.querySelectorAll('.chart-bar-fill');
    let maxValue = 0;

    bars.forEach(bar => {
        const value = parseFloat(bar.getAttribute('data-value'));
        if (value > maxValue) maxValue = value;
    });

    return maxValue * 1.1; // Добавляем 10% для лучшей визуализации
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
    initAnalytics();
    initQuiz();

    // Обработчики для кнопок навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
});