const englishToRussian = {
    "access": "доступ",
    "adjust": "регулировать",
    "amount": "количество",
    "angle": "угол",
    "application": "приложение",
    "arrow": "стрела",
    "board": "доска",
    "button": "кнопка",
    "case": "случай",
    "character": "персонаж",
    "compatible": "совместимый",
    "computer": "компьютер",
    "contents": "содержание",
    "display": "дисплей",
    "dot": "точка",
    "drive": "двигать",
    "driver": "водитель",
    "earphone": "наушник",
    "file": "файл",
    "game": "игра",
    "hardware": "аппаратное обеспечение",
    "idle": "бездействовать",
    "key": "ключ",
    "keyboard": "клавиатура",
    "manual": "руководство",
    "mouse": "мышь",
    "power": "мощность",
    "processor": "процессор",
    "process": "процесс",
    "pointer": "указатель",
    "plug": "вилка",
    "reduce": "уменьшать",
    "refer": "ссылаться",
    "remote": "отдаленный",
    "resolution": "разрешение",
    "rough": "грубый",
    "screen": "экран",
    "screen_saver": "заставка",
    "sharp": "острый",
    "strain": "напряжение",
    "slide": "слайд",
    "software": "программное обеспечение",
    "type": "тип",
    "wear": "носить",
};

const wordElement = document.getElementById("word");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");

function getRandomWord() {
    const words = Object.keys(englishToRussian);
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const word = getRandomWord();
    wordElement.textContent = word;
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = englishToRussian[wordElement.textContent];

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Incorrect. The correct translation is: ${correctAnswer}`;
    }

    answerElement.value = "";
    displayWord();
}

displayWord();