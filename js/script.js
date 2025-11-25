document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const content = document.getElementById('content');
    const introOverlay = document.getElementById('intro-overlay');

    setTimeout(() => {
        if (loaderWrapper) {
            loaderWrapper.style.display = 'none';
        }
        if (content) {
            content.classList.remove('hidden');
        }

        // Now, handle the original intro overlay logic if it exists
        if (introOverlay) {
             setTimeout(() => {
                introOverlay.classList.add('hidden');
            }, 2500); // This was the original timeout
        }

    }, 1500); // Simulate a 1.5-second loading time
});


const studyData = [
    // I. 한자
    { cat: "I. 한자 (음과 뜻)", q: "習", a: "익힐 습" }, { cat: "I. 한자 (음과 뜻)", q: "孝", a: "효도 효" }, { cat: "I. 한자 (음과 뜻)", q: "新", a: "새로울 신" },
    { cat: "I. 한자 (음과 뜻)", q: "童", a: "아이 동" }, { cat: "I. 한자 (음과 뜻)", q: "交", a: "사귈 교" }, { cat: "I. 한자 (음과 뜻)", q: "校", a: "학교 교" },
    { cat: "I. 한자 (음과 뜻)", q: "生", a: "날 생 (살다)" }, { cat: "I. 한자 (음과 뜻)", q: "車", a: "수레 거(차)" }, { cat: "I. 한자 (음과 뜻)", q: "長", a: "길 장" },
    { cat: "I. 한자 (음과 뜻)", q: "多", a: "많을 다" }, { cat: "I. 한자 (음과 뜻)", q: "名", a: "이름 명" }, { cat: "I. 한자 (음과 뜻)", q: "成", a: "이룰 성" },
    { cat: "I. 한자 (음과 뜻)", q: "友", a: "벗 우" }, { cat: "I. 한자 (음과 뜻)", q: "利", a: "이로울 리" }, { cat: "I. 한자 (음과 뜻)", q: "結", a: "맺을 결" },
    { cat: "I. 한자 (음과 뜻)", q: "兄", a: "형 형" }, { cat: "I. 한자 (음과 뜻)", q: "代", a: "대신할 대" }, { cat: "I. 한자 (음과 뜻)", q: "善", a: "착할 선" },
    { cat: "I. 한자 (음과 뜻)", q: "讀", a: "읽을 독" }, { cat: "I. 한자 (음과 뜻)", q: "韓", a: "나라이름 한" }, { cat: "I. 한자 (음과 뜻)", q: "萬", a: "일만 만" },
    { cat: "I. 한자 (음과 뜻)", q: "故", a: "옛 고" }, { cat: "I. 한자 (음과 뜻)", q: "骨", a: "뼈 골" }, { cat: "I. 한자 (음과 뜻)", q: "風", a: "바람 풍" },
    { cat: "I. 한자 (음과 뜻)", q: "寸", a: "마디 촌" }, { cat: "I. 한자 (음과 뜻)", q: "見", a: "볼 견" }, { cat: "I. 한자 (음과 뜻)", q: "授", a: "줄 수" },
    { cat: "I. 한자 (음과 뜻)", q: "止", a: "그칠 지" }, { cat: "I. 한자 (음과 뜻)", q: "聽", a: "들을 청" }, { cat: "I. 한자 (음과 뜻)", q: "遠", a: "멀 원" },
    { cat: "I. 한자 (음과 뜻)", q: "受", a: "받을 수" }, { cat: "I. 한자 (음과 뜻)", q: "走", a: "달릴 주" }, { cat: "I. 한자 (음과 뜻)", q: "學", a: "배울 학" },

    // II. 어휘
    { cat: "II. 어휘 (독음)", q: "生物", a: "생물" }, { cat: "II. 어휘 (독음)", q: "生死", a: "생사" }, { cat: "II. 어휘 (독음)", q: "生存", a: "생존" },
    { cat: "II. 어휘 (독음)", q: "更新", a: "경신, 갱신" }, { cat: "II. 어휘 (독음)", q: "學生", a: "학생" }, { cat: "II. 어휘 (독음)", q: "放學", a: "방학" },
    { cat: "II. 어휘 (독음)", q: "植木", a: "식목" }, { cat: "II. 어휘 (독음)", q: "多讀", a: "다독" }, { cat: "II. 어휘 (독음)", q: "前後", a: "전후" },
    { cat: "II. 어휘 (독음)", q: "見學", a: "견학" }, { cat: "II. 어휘 (독음)", q: "高低", a: "고저" }, { cat: "II. 어휘 (독음)", q: "矛盾", a: "모순" },
    { cat: "II. 어휘 (독음)", q: "獨步", a: "독보" }, { cat: "II. 어휘 (독음)", q: "波及", a: "파급" }, { cat: "II. 어휘 (독음)", q: "鐵面皮", a: "철면피" },
    { cat: "II. 어휘 (독음)", q: "茶飯事", a: "다반사" }, { cat: "II. 어휘 (독음)", q: "如反掌", a: "여반장" }, { cat: "II. 어휘 (독음)", q: "萬里長城", a: "만리장성" },
    { cat: "II. 어휘 (독음)", q: "寒波", a: "한파" }, { cat: "II. 어휘 (독음)", q: "風浪", a: "풍랑" }, { cat: "II. 어휘 (독음)", q: "授受", a: "수수" },
    { cat: "II. 어휘 (독음)", q: "競走", a: "경주" }, { cat: "II. 어휘 (독음)", q: "競步", a: "경보" }, { cat: "II. 어휘 (독음)", q: "國語", a: "국어" },
    { cat: "II. 어휘 (독음)", q: "守門將", a: "수문장" }, { cat: "II. 어휘 (독음)", q: "鄕友", a: "향우" }, { cat: "II. 어휘 (독음)", q: "防止", a: "방지" },
    { cat: "II. 어휘 (독음)", q: "完走", a: "완주" }, { cat: "II. 어휘 (독음)", q: "失足", a: "실족" }, { cat: "II. 어휘 (독음)", q: "初步", a: "초보" },
    { cat: "II. 어휘 (독음)", q: "復習", a: "복습" }, { cat: "II. 어휘 (독음)", q: "復活", a: "부활" }, { cat: "II. 어휘 (독음)", q: "難易", a: "난이" },
    { cat: "II. 어휘 (독음)", q: "交易", a: "교역" }, { cat: "II. 어휘 (독음)", q: "降等", a: "강등" }, { cat: "II. 어휘 (독음)", q: "下降", a: "하강" },
    { cat: "II. 어휘 (독음)", q: "共生", a: "공생" }, { cat: "II. 어휘 (독음)", q: "更紙", a: "갱지" }, { cat: "II. 어휘 (독음)", q: "變更", a: "변경" },
    { cat: "II. 어휘 (독음)", q: "假說", a: "가설" }, { cat: "II. 어휘 (독음)", q: "遊說", a: "유세" }, { cat: "II. 어휘 (독음)", q: "關稅", a: "관세" },
    { cat: "II. 어휘 (독음)", q: "求心力", a: "구심력" }, { cat: "II. 어휘 (독음)", q: "遠心力", a: "원심력" }, { cat: "II. 어휘 (독음)", q: "貯水池", a: "저수지" },

    // III. 성어
    { cat: "III. 성어", q: "門前成市", a: "문전성시" }, { cat: "III. 성어", q: "吾鼻三尺", a: "오비삼척" },
    { cat: "III. 성어", q: "一石二鳥", a: "일석이조" }, { cat: "III. 성어", q: "牛耳讀經", a: "우이독경" },
    { cat: "III. 성어", q: "弱肉强食", a: "약육강식" }, { cat: "III. 성어", q: "去言美來言美", a: "거언미 래언미" },
    { cat: "III. 성어", q: "單刀直入", a: "단도직입" }, { cat: "III. 성어", q: "朋友有信", a: "붕우유신" },
    { cat: "III. 성어", q: "言中有骨", a: "언중유골" }, { cat: "III. 성어", q: "我田引水", a: "아전인수" },
    { cat: "III. 성어", q: "朝三暮四", a: "조삼모사" },

    // IV. 짜임
    { cat: "IV. 짜임", q: "夜深", a: "야심 (주술)" }, { cat: "IV. 짜임", q: "身體", a: "신체 (병렬)" },
    { cat: "IV. 짜임", q: "正直", a: "정직 (병렬)" }, { cat: "IV. 짜임", q: "希望", a: "희망 (병렬)" },
    { cat: "IV. 짜임", q: "巨大", a: "거대 (병렬)" }, { cat: "IV. 짜임", q: "多讀", a: "다독 (수식)" },
    { cat: "IV. 짜임", q: "難解", a: "난해 (술보)" }, { cat: "IV. 짜임", q: "分業", a: "분업 (술목)" }
];

let currentMode = 'list';
let cardIndex = 0;
let quizScore = 0;
let shuffledData = [];
let quizType = 'hanjaToMeaning';
let timeLimitSetting = 0;
let timerInterval = null;
let waitingForNext = false;
let structureOnly = false;
let initialQuestionCount = 0;
let wrongAnswersList = [];

renderList();

function setMode(mode) {
    currentMode = mode;
    if(timerInterval) clearInterval(timerInterval);
    waitingForNext = false;

    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${mode}`).classList.add('active');

    const content = document.getElementById('app-content');
    content.innerHTML = '';

    if (mode === 'list') {
        renderList();
    } else if (mode === 'card') {
        initCardSetup();
    } else if (mode === 'quiz') {
        initQuizSetup();
    }
}

function initCardSetup() {
    const content = document.getElementById('app-content');
    const categories = [...new Set(studyData.map(item => item.cat))];
    let html = `
        <div class="quiz-container">
            <div class="quiz-setup">
                <h2 style="margin-top:0; margin-bottom:24px; font-weight:500; color:var(--primary-color);">카드 설정</h2>
                <div class="setup-group">
                    <label>학습할 단원을 선택하세요.</label>`;
    categories.forEach(cat => {
        html += `<label class="checkbox-container">${cat}
                    <input type="checkbox" id="cat-${cat}" name="category" value="${cat}" checked>
                    <span class="checkmark"></span>
                </label>`;
    });
    html += `
                </div>
                <button class="btn" style="width:100%; margin-top:12px;" onclick="startCard()">시작하기</button>
            </div>
        </div>`;
    content.innerHTML = html;
}

function startCard() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const filteredData = studyData.filter(item => selectedCategories.includes(item.cat));
    if (filteredData.length === 0) {
        alert("적어도 한 개의 단원을 선택해야 합니다.");
        return;
    }
    initCard(filteredData);
}

function initCard(data) {
    shuffledData = [...data].sort(() => Math.random() - 0.5);
    cardIndex = 0;
    renderCard();
}

function renderList() {
    const content = document.getElementById('app-content');
    const categories = {};
    studyData.forEach(item => {
        if (!categories[item.cat]) categories[item.cat] = [];
        categories[item.cat].push(item);
    });

    let html = '<div class="list-container">';
    for (const [cat, items] of Object.entries(categories)) {
        html += `
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    ${cat} 
                </div>
                <div class="accordion-content">
                    <div class="word-grid">
        `;
        items.forEach(item => {
            html += `
                <div class="word-item">
                    <span class="hanja-text">${item.q}</span>
                    <span class="meaning-text">${item.a}</span>
                </div>`;
        });
        html += `</div></div></div>`;
    }
    html += '</div>';
    content.innerHTML = html;
}

function toggleAccordion(header) {
    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (!content) return;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function renderCard() {
    const content = document.getElementById('app-content');
    if (shuffledData.length === 0) {
        content.innerHTML = `<div class="quiz-container"><div class="quiz-setup" style="text-align:center;"><h2 style="margin-bottom:10px;">카드가 없습니다.</h2><button class="btn" onclick="initCardSetup()">처음으로</button></div></div>`;
        return;
    }
    const item = shuffledData[cardIndex];
    const total = shuffledData.length;

    const html = `
        <div class="flashcard-container">
            <div class="card" id="flashcard" onclick="handleCardClick()">
                <div class="card-hanja">${item.q}</div>
                <div class="card-meaning">${item.a}</div>
                <div class="click-guide" id="click-guide">클릭하여 확인</div>
            </div>
            <div class="controls">
                <button class="btn" onclick="prevCard()" ${cardIndex === 0 ? 'disabled' : ''} style="background:#dadce0; color:#5f6368;">이전</button>
                <span style="font-weight:500; color:#5f6368; font-size:0.9rem;">${cardIndex + 1} / ${total}</span>
                <button class="btn" onclick="nextCard()">다음</button>
                <button class="btn" onclick="initCardSetup()" style="background:#5f6368;">섞기</button>
            </div>
        </div>`;
    content.innerHTML = html;
}

function handleCardClick() {
    const card = document.getElementById('flashcard');
    const guide = document.getElementById('click-guide');
    if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        guide.innerText = "한번 더 클릭하면 다음으로 넘어갑니다";
    } else {
        nextCard();
    }
}

function nextCard() {
    if (cardIndex < shuffledData.length - 1) {
        cardIndex++;
        renderCard();
    } else {
        alert("마지막 카드입니다!");
    }
}

function prevCard() {
    if (cardIndex > 0) { cardIndex--; renderCard(); }
}

function toggleStructureOptionVisibility() {
    const structureOption = document.getElementById('structure-only-option');
    const tzaimCheckbox = document.querySelector('input[value="IV. 짜임"]');
    if (tzaimCheckbox && tzaimCheckbox.checked) {
        structureOption.style.display = 'block';
    } else {
        structureOption.style.display = 'none';
        const structureOnlyCheckbox = document.getElementById('structure-only-checkbox');
        if(structureOnlyCheckbox) structureOnlyCheckbox.checked = false;
    }
}

function initQuizSetup() {
    const content = document.getElementById('app-content');
    const categories = [...new Set(studyData.map(item => item.cat))];
    let html = `
        <div class="quiz-container">
            <div class="quiz-setup">
                <h2 style="margin-top:0; margin-bottom:24px; font-weight:500; color:var(--primary-color);">퀴즈 설정</h2>
                <div class="setup-group">
                    <label>학습할 단원을 선택하세요.</label>`;
    categories.forEach(cat => {
        html += `<label class="checkbox-container">${cat}
                    <input type="checkbox" id="cat-${cat}" name="category" value="${cat}" onchange="toggleStructureOptionVisibility()" checked>
                    <span class="checkmark"></span>
                </label>`;
    });
    html += `
                </div>
                <div class="setup-group" id="structure-only-option" style="display: none;">
                    <label class="checkbox-container" style="font-size:0.9rem">짜임만 보기 (IV. 짜임 전용)
                        <input type="checkbox" id="structure-only-checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="setup-group">
                    <label>문제 유형</label>
                    <div class="segmented-control" id="quiz-type-segment">
                        <button class="btn-segment active" data-value="hanjaToMeaning">한자 보고 뜻/음 맞추기</button>
                        <button class="btn-segment" data-value="meaningToHanja">뜻/음 보고 한자 맞추기</button>
                    </div>
                </div>
                <div class="setup-group">
                    <label>제한 시간 (문제당)</label>
                    <select id="setup-time">
                        <option value="0">제한 없음</option>
                        <option value="5">5초</option>
                        <option value="10">10초</option>
                        <option value="15">15초</option>
                    </select>
                </div>
                <button class="btn" style="width:100%; margin-top:12px;" onclick="startRealQuiz()">시작하기</button>
            </div>
        </div>`;
    content.innerHTML = html;
    toggleStructureOptionVisibility();

    const segmentContainer = document.getElementById('quiz-type-segment');
    if (segmentContainer) {
        const buttons = segmentContainer.querySelectorAll('.btn-segment');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}

function startRealQuiz() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const filteredData = studyData.filter(item => selectedCategories.includes(item.cat));

    if (filteredData.length === 0) {
        alert("적어도 한 개의 단원을 선택해야 합니다.");
        return;
    }

    const activeButton = document.querySelector('#quiz-type-segment .btn-segment.active');
    const timeSelect = document.getElementById('setup-time');
    const structureOnlyCheckbox = document.getElementById('structure-only-checkbox');
    
    quizType = activeButton.dataset.value;
    timeLimitSetting = parseInt(timeSelect.value, 10);
    structureOnly = structureOnlyCheckbox && structureOnlyCheckbox.checked;
    
    shuffledData = [...filteredData].sort(() => Math.random() - 0.5);
    initialQuestionCount = shuffledData.length;
    wrongAnswersList = [];
    quizScore = 0;
    cardIndex = 0;
    renderQuiz();
}

function getStructure(text) {
    const match = text.match(/\(([^)]+)\)/);
    return match ? match[1] : text;
}

function renderQuiz() {
    waitingForNext = false;
    const content = document.getElementById('app-content');
    
    if (cardIndex >= shuffledData.length) {
        quizScore = initialQuestionCount - wrongAnswersList.length;
        const allQuestions = shuffledData.slice(0, initialQuestionCount);
        const correctAnswers = allQuestions.filter(q => !wrongAnswersList.some(wrong => wrong.q === q.q && wrong.a === q.a));

        let resultHTML = `
            <div class="quiz-container">
                <div class="quiz-setup" style="text-align:center;">
                    <h2 style="margin-bottom:10px;">완벽해요!</h2>
                    <p style="font-size:2.5rem; font-weight:700; color:var(--primary-color); margin:20px 0;">${quizScore} / ${initialQuestionCount}</p>
                    <button class="btn" onclick="initQuizSetup()">처음으로</button>
                </div>`;
        
        resultHTML += `<div class="results-list" style="margin-top: 30px; text-align:left;">`;

        // 오답 목록
        if (wrongAnswersList.length > 0) {
            resultHTML += `<h3 style="color: var(--wrong-text);">오답 (${wrongAnswersList.length}개)</h3><div class="word-grid">`;
            wrongAnswersList.forEach(item => {
                resultHTML += `
                    <div class="word-item result-item wrong">
                        <span class="hanja-text">${item.q}</span>
                        <span class="meaning-text">${item.a}</span>
                    </div>`;
            });
            resultHTML += '</div>';
        }

        // 정답 목록
        if (correctAnswers.length > 0) {
             resultHTML += `<h3 style="color: var(--correct-text); margin-top: 30px;">정답 (${correctAnswers.length}개)</h3><div class="word-grid">`;
            correctAnswers.forEach(item => {
                resultHTML += `
                    <div class="word-item result-item correct">
                        <span class="hanja-text">${item.q}</span>
                        <span class="meaning-text">${item.a}</span>
                    </div>`;
            });
            resultHTML += '</div>';
        }
        
        resultHTML += `</div></div>`;
        content.innerHTML = resultHTML;
        return;
    }

    const item = shuffledData[cardIndex];
    let questionText, answerText, correctValue;
    
    if (quizType === 'hanjaToMeaning') {
        questionText = item.q; 
        answerText = item.a; 
        correctValue = (structureOnly && item.cat === "IV. 짜임") ? getStructure(item.a) : item.a;
    } else {
        questionText = item.a; 
        answerText = item.q; 
        correctValue = item.q;
    }

    const sameCatItems = studyData.filter(d => d.cat === item.cat && d.q !== item.q);
    let wrongCandidates = sameCatItems.sort(() => Math.random() - 0.5).slice(0, 3);
    
    if (wrongCandidates.length < 3) {
        const otherItems = studyData.filter(d => d.cat !== item.cat);
        const moreWrong = otherItems.sort(() => Math.random() - 0.5).slice(0, 3 - wrongCandidates.length);
        wrongCandidates = [...wrongCandidates, ...moreWrong];
    }
    
    let wrongAnswersOptions;
    if (quizType === 'hanjaToMeaning') {
        wrongAnswersOptions = wrongCandidates.map(d => (structureOnly && d.cat === "IV. 짜임") ? getStructure(d.a) : d.a);
    } else {
        wrongAnswersOptions = wrongCandidates.map(d => d.q);
    }
    
    const tempOptions = [...new Set([...wrongAnswersOptions, correctValue])];
    while (tempOptions.length < 4 && studyData.length > tempOptions.length) {
         const randomItem = studyData[Math.floor(Math.random() * studyData.length)];
         let randomOption;
         if (quizType === 'hanjaToMeaning') {
            randomOption = (structureOnly && randomItem.cat === "IV. 짜임") ? getStructure(randomItem.a) : randomItem.a;
         } else {
            randomOption = randomItem.q;
         }
         if (!tempOptions.includes(randomOption)) {
             tempOptions.push(randomOption);
         }
    }
    const options = tempOptions.sort(() => Math.random() - 0.5);

    let timerHtml = '';
    if (timeLimitSetting > 0) {
        timerHtml = `
            <div class="timer-wrapper">
                <div class="timer-bar-bg"><div class="timer-bar-fill" id="timer-bar"></div></div>
                <div class="timer-text" id="timer-text">${timeLimitSetting}</div>
            </div>`;
    }

    let html = `
        <div class="quiz-container">
            <div class="quiz-header">
                <span>문제 ${cardIndex + 1} / ${shuffledData.length}</span>
                ${timerHtml}
            </div>
            
            <div class="quiz-question-box" id="question-box">
                <div class="quiz-question ${quizType === 'meaningToHanja' ? 'text-mode' : ''}">${questionText}</div>
                <div class="quiz-answer-display" id="quiz-answer-text">${answerText}</div>
                <div class="click-to-continue-msg" id="continue-msg">여기를 클릭하여 다음으로</div>
            </div>

            <div class="options-grid">
`;

    options.forEach(opt => {
        html += `<button class="option-btn" onclick="checkAnswer(this, '${correctValue}', '${opt}', '${answerText.replace(/'/g, "\'")}')">${opt}</button>`;
    });

    html += `</div></div>`;
    content.innerHTML = html;

    if (timeLimitSetting > 0) startTimer(correctValue, answerText);
}

function startTimer(correctAnswer, fullAnswer) {
    let timeLeft = timeLimitSetting;
    const bar = document.getElementById('timer-bar');
    const text = document.getElementById('timer-text');
    
    if(timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / timeLimitSetting) * 100;
        
        if (bar) bar.style.width = percentage + "%" ;
        if (text) text.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (bar) bar.style.width = "0%";
            checkAnswer(null, correctAnswer, null, fullAnswer);
        }
    }, 1000);
}

function checkAnswer(btn, correct, selected, fullAnswer) {
    if (waitingForNext) return;
    if (timerInterval) clearInterval(timerInterval);

    const buttons = document.querySelectorAll('.option-btn');
    const answerDisplay = document.getElementById('quiz-answer-text');
    const questionBox = document.getElementById('question-box');
    const continueMsg = document.getElementById('continue-msg');
    const currentItem = shuffledData[cardIndex];

    buttons.forEach(b => b.disabled = true);
    answerDisplay.classList.add('show');

    let isCorrect = selected === correct;
    if (structureOnly && currentItem.cat === 'IV. 짜임' && quizType === 'hanjaToMeaning') {
         isCorrect = getStructure(fullAnswer) === selected;
    }

    if (btn && isCorrect) {
        btn.classList.add('correct');
        questionBox.classList.add('box-correct');
        
        setTimeout(() => {
            cardIndex++;
            renderQuiz();
        }, 700);
    } else {
        waitingForNext = true;
        if (btn) btn.classList.add('wrong');
        questionBox.classList.add('box-wrong');
        
        if (!wrongAnswersList.some(item => item.q === currentItem.q)) {
            wrongAnswersList.push(currentItem);
        }
        
        shuffledData.push(currentItem);

        buttons.forEach(b => {
             let correctOptionText = correct;
             if (structureOnly && currentItem.cat === 'IV. 짜임' && quizType === 'hanjaToMeaning') {
                 correctOptionText = getStructure(fullAnswer);
             }
            if (b.innerText === correctOptionText) b.classList.add('correct');
        });

        continueMsg.style.display = 'block';
        questionBox.onclick = function() {
            cardIndex++;
            renderQuiz();
        };
    }
}

// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable dragging
document.addEventListener('dragstart', event => event.preventDefault());

// Disable developer tools
document.addEventListener('keydown', function(e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key === "U") {
        e.preventDefault();
    }
});