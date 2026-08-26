// Neon Patient Care Game (fixed and completed)

// Full dataset: 4 patients (diabetes, cardio, ckd, epilepsy).
const patients = [
  {
    id: 'diabetes',
    title: 'عم علي — داء السكري',
    desc: 'مريض مصاب بالسكري، يعاني من تعب عام وندرة المتابعة الذاتية. تقييم كيفية التركيز على احتياجاته وتفضيلاته.',
    rounds: [
      {
        title: 'تاريخ المرض وإدارة الأدوية',
        questions: [
          {
            id: 'd_r1_q1',
            text: 'كيف تتعامل مع استفساره عن جرعات الدواء؟',
            options: [
              { id: 'd_r1_q1_a', text: 'أشرح أسباب الجرعة وأستفسر عن تفضيلاته ونمط حياته.', tag: 'patient-centered' },
              { id: 'd_r1_q1_b', text: 'أذكر الجرعة بدون مناقشة تأثيرات الحياة اليومية.', tag: 'partial' },
              { id: 'd_r1_q1_c', text: 'أعطي تعليمات سريعة وأتحكم بالقرارات وحدي.', tag: 'poor' }
            ]
          },
          {
            id: 'd_r1_q2',
            text: 'عندما يسأل عن تغيّر مستوى السكر، ماذا تفعل؟',
            options: [
              { id: 'd_r1_q2_a', text: 'أطلب وصفاً يومياً من المريض وأعلمه كيف يتكيف مع نمط حياته.', tag: 'patient-centered' },
              { id: 'd_r1_q2_b', text: 'أعطي نصائح عامة بدون خطة متكاملة.', tag: 'partial' },
              { id: 'd_r1_q2_c', text: 'أتهرب من التفاصيل وأخطط فقط زيارات متابعة روتينية.', tag: 'poor' }
            ]
          },
          {
            id: 'd_r1_q3',
            text: 'كيف تشرك المريض في قرار تغيير العلاج؟',
            options: [
              { id: 'd_r1_q3_a', text: 'أشرح البدائل وأشارك المريض في اتخاذ القرار.', tag: 'patient-centered' },
              { id: 'd_r1_q3_b', text: 'أبلغ المريض بالقرار وأطلب توقيعه فقط.', tag: 'partial' },
              { id: 'd_r1_q3_c', text: 'أقرر بنفسي دون مناقشة.', tag: 'poor' }
            ]
          }
        ]
      },
      {
        title: 'التثقيف والدعم الذاتي',
        questions: [
          {
            id: 'd_r2_q1',
            text: 'كيف تعلّم المريض فحص السكر؟',
            options: [
              { id: 'd_r2_q1_a', text: 'أراقب المريض أثناء الفحص وأعطي نصائح عملية تناسب حياته.', tag: 'patient-centered' },
              { id: 'd_r2_q1_b', text: 'أعرض خطوات الفحص دون مراعاة الظروف المنزلية.', tag: 'partial' },
              { id: 'd_r2_q1_c', text: 'أخبر المريض فقط أن يفحص يوميًا دون مزيد من الشرح.', tag: 'poor' }
            ]
          },
          {
            id: 'd_r2_q2',
            text: 'هل تضع له خطة غذائية؟',
            options: [
              { id: 'd_r2_q2_a', text: 'أبني خطة مع المريض تأخذ عاداته الغذائية بعين الاعتبار.', tag: 'patient-centered' },
              { id: 'd_r2_q2_b', text: 'أعطي نصائح عامة عن الأكل الصحي.', tag: 'partial' },
              { id: 'd_r2_q2_c', text: 'أحيل المريض لقائمة قياسية دون تخصيص.', tag: 'poor' }
            ]
          },
          {
            id: 'd_r2_q3',
            text: 'كيف تتابع الالتزام بالعلاج؟',
            options: [
              { id: 'd_r2_q3_a', text: 'أحدد مواعيد مرنة وأطلب تواصلًا حول العقبات.', tag: 'patient-centered' },
              { id: 'd_r2_q3_b', text: 'أطلب الالتزام وأوضح العواقب.', tag: 'partial' },
              { id: 'd_r2_q3_c', text: 'أعاقب أو أوبّخ على عدم الالتزام.', tag: 'poor' }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'cardio',
    title: 'مدام فاطمة — أمراض القلب',
    desc: 'مريضة تشكو من ضيق نفس متقطع ولديها تاريخ ضغط مرتفع. تركيز على إعطاء خيارات مهنية وإشراكها.',
    rounds: [
      {
        title: 'الأعراض وعلاقتها بنمط الحياة',
        questions: [
          {
            id: 'c_r1_q1',
            text: 'كيف تسأل عن نشاطها اليومي وتأثير الأعراض؟',
            options: [
              { id: 'c_r1_q1_a', text: 'أسأل بتفصيل عن نشاطاتها وأعدل الخطة حسب قدراتها.', tag: 'patient-centered' },
              { id: 'c_r1_q1_b', text: 'أذكر توصيات عامة لزيادة النشاط.', tag: 'partial' },
              { id: 'c_r1_q1_c', text: 'أتجاهل الوضع المعيشي وأركز على وصف دواء فقط.', tag: 'poor' }
            ]
          },
          {
            id: 'c_r1_q2',
            text: 'كيف تشرح خطر حالة طوارئ؟',
            options: [
              { id: 'c_r1_q2_a', text: 'أشرح الأعراض التحذيرية وأضع خطة طوارئ واضحة ومناسبة لها.', tag: 'patient-centered' },
              { id: 'c_r1_q2_b', text: 'أذكر الأعراض التحذيرية دون خطة محددة.', tag: 'partial' },
              { id: 'c_r1_q2_c', text: 'أقول \"راجع المستشفى إذا ساءت الأمور\" فقط.', tag: 'poor' }
            ]
          },
          {
            id: 'c_r1_q3',
            text: 'هل تناقش الأهداف العلاجية معها؟',
            options: [
              { id: 'c_r1_q3_a', text: 'نحدد أهدافًا واقعية معًا ونقيس التقدم.', tag: 'patient-centered' },
              { id: 'c_r1_q3_b', text: 'أضع أهدافًا عامة دون مشاركة.', tag: 'partial' },
              { id: 'c_r1_q3_c', text: 'أضع خطة طبية دون إشراكها.', tag: 'poor' }
            ]
          }
        ]
      },
      {
        title: 'الأدوية والتداخلات',
        questions: [
          {
            id: 'c_r2_q1',
            text: 'عند مناقشة أدوية القلب، كيف تتصرف؟',
            options: [
              { id: 'c_r2_q1_a', text: 'أشرح الفوائد والمخاطر وأستمع لقلقها.', tag: 'patient-centered' },
              { id: 'c_r2_q1_b', text: 'أذكر الفوائد فقط.', tag: 'partial' },
              { id: 'c_r2_q1_c', text: 'أفرض الدواء مع إهمال الشرح.', tag: 'poor' }
            ]
          },
          {
            id: 'c_r2_q2',
            text: 'هل تتطرق لتداخلات الأدوية؟',
            options: [
              { id: 'c_r2_q2_a', text: 'أتحقق من أدويتها الأخرى وأوضح مخاطر التفاعل.', tag: 'patient-centered' },
              { id: 'c_r2_q2_b', text: 'أذكر بعض المخاطر العامة.', tag: 'partial' },
              { id: 'c_r2_q2_c', text: 'أتجاهل التداخلات المحتملة.', tag: 'poor' }
            ]
          },
          {
            id: 'c_r2_q3',
            text: 'كيف تدعم المداومة على العلاج؟',
            options: [
              { id: 'c_r2_q3_a', text: 'أبني خطة دعم تناسب جدولها وقدراتها.', tag: 'patient-centered' },
              { id: 'c_r2_q3_b', text: 'أطلب الالتزام دون دعم عملي.', tag: 'partial' },
              { id: 'c_r2_q3_c', text: 'أتهمها بالإهمال إذا لم تلتزم.', tag: 'poor' }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ckd',
    title: 'أبو عمر — مرض الكلى المزمن',
    desc: 'مريض مع تقدم بسيط في اعتلال الكلى، يحتاج توجيهًا حول مواعيد الفحوص ونوعية الحياة.',
    rounds: [
      {
        title: 'الرعاية الوقائية والمتابعة',
        questions: [
          {
            id: 'k_r1_q1',
            text: 'كيف تنظم مواعيد الفحص والمتابعة؟',
            options: [
              { id: 'k_r1_q1_a', text: 'أضع خطة متابعة مخصصة مع تذكيرات مرنة.', tag: 'patient-centered' },
              { id: 'k_r1_q1_b', text: 'أذكر مواعيد قياسية للمراجعة.', tag: 'partial' },
              { id: 'k_r1_q1_c', text: 'أعتمد على المريض لحجز المواعيد بنفسه دون مساعدة.', tag: 'poor' }
            ]
          },
          {
            id: 'k_r1_q2',
            text: 'هل تتحدث عن تغييرات النظام الغذائي؟',
            options: [
              { id: 'k_r1_q2_a', text: 'أناقش بدائل قابلة للتطبيق مع مراعاة ثقافته.', tag: 'patient-centered' },
              { id: 'k_r1_q2_b', text: 'أعطي قواعد غذائية عامة.', tag: 'partial' },
              { id: 'k_r1_q2_c', text: 'أصدر قوائم صارمة دون مرونة.', tag: 'poor' }
            ]
          },
          {
            id: 'k_r1_q3',
            text: 'كيف تتعامل مع قلقه من فقدان الكلى؟',
            options: [
              { id: 'k_r1_q3_a', text: 'أستمع لمخاوفه وأشرح خيارات إبطاء التقدّم.', tag: 'patient-centered' },
              { id: 'k_r1_q3_b', text: 'أذكر بعض الحقائق الطبية دون دعم عاطفي.', tag: 'partial' },
              { id: 'k_r1_q3_c', text: 'أخفي المعلومات لأقلق المريض أقل.', tag: 'poor' }
            ]
          }
        ]
      },
      {
        title: 'التحويل والخدمات المجتمعية',
        questions: [
          {
            id: 'k_r2_q1',
            text: 'هل تناقش الدعم المجتمعي أو الموارد؟',
            options: [
              { id: 'k_r2_q1_a', text: 'أوجهه إلى موارد ومجموعات دعم مناسبة.', tag: 'patient-centered' },
              { id: 'k_r2_q1_b', text: 'أذكر بعض الموارد العامة.', tag: 'partial' },
              { id: 'k_r2_q1_c', text: 'لا أذكر أي موارد.', tag: 'poor' }
            ]
          },
          {
            id: 'k_r2_q2',
            text: 'كيف تقيم حاجته لتحويل لمتخصص؟',
            options: [
              { id: 'k_r2_q2_a', text: 'أناقش الفوائد والأضرار معه قبل التحويل.', tag: 'patient-centered' },
              { id: 'k_r2_q2_b', text: 'أحيل سريعًا كإجراء روتيني.', tag: 'partial' },
              { id: 'k_r2_q2_c', text: 'أحول دون شرح واضح.', tag: 'poor' }
            ]
          },
          {
            id: 'k_r2_q3',
            text: 'ماذا بشأن خطة الطوارئ؟',
            options: [
              { id: 'k_r2_q3_a', text: 'أعطي خطة واضحة خطوة بخطوة ومتى يتصل بالطوارئ.', tag: 'patient-centered' },
              { id: 'k_r2_q3_b', text: 'أذكر علامات التحذير العامة.', tag: 'partial' },
              { id: 'k_r2_q3_c', text: 'أقدم تعليمات عامة وغير محددة.', tag: 'poor' }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'epilepsy',
    title: 'آية — الصرع',
    desc: 'مريضة شابة تعاني نوبات متقطعة وتخشى آثار الدواء على عملها وحياتها الاجتماعية.',
    rounds: [
      {
        title: 'نمط النوبات وتأثيرها',
        questions: [
          {
            id: 'e_r1_q1',
            text: 'كيف تسأل عن تكرار النوبات وتأثيرها على عملها؟',
            options: [
              { id: 'e_r1_q1_a', text: 'أسأل بتعاطف عن نمط النوبات وأثرها على واقعها الوظيفي.', tag: 'patient-centered' },
              { id: 'e_r1_q1_b', text: 'أجمع بيانات طبية فقط دون مناقشة الوظيفة.', tag: 'partial' },
              { id: 'e_r1_q1_c', text: 'أتجاهل القلق الوظيفي لأن \"الطب أهم\".', tag: 'poor' }
            ]
          },
          {
            id: 'e_r1_q2',
            text: 'هل تناقش مخاطر القيادة والعمل؟',
            options: [
              { id: 'e_r1_q2_a', text: 'أناقش المخاطر وأساعدها في وضع خطة عملية تحمي السلامة.', tag: 'patient-centered' },
              { id: 'e_r1_q2_b', text: 'أذكر بعض المخاطر العامة فقط.', tag: 'partial' },
              { id: 'e_r1_q2_c', text: 'أمنعها من العمل دون شرح أو بدائل.', tag: 'poor' }
            ]
          },
          {
            id: 'e_r1_q3',
            text: 'كيف تتفحص آثار الأدوية على حياتها؟',
            options: [
              { id: 'e_r1_q3_a', text: 'أناقش الآثار الجانبية الممكنة وأوازنها مع فوائد العلاج.', tag: 'patient-centered' },
              { id: 'e_r1_q3_b', text: 'أذكر الآثار الجانبية دون تخفيف مخاوفها.', tag: 'partial' },
              { id: 'e_r1_q3_c', text: 'أفرض الدواء وأتجاهل مخاوفها.', tag: 'poor' }
            ]
          }
        ]
      },
      {
        title: 'التعايش والدعم النفسي',
        questions: [
          {
            id: 'e_r2_q1',
            text: 'كيف تدعم صحتها النفسية بعد النوبات؟',
            options: [
              { id: 'e_r2_q1_a', text: 'أوفر موارد للدعم النفسي مع المتابعة.', tag: 'patient-centered' },
              { id: 'e_r2_q1_b', text: 'أذكر إمكانية الإحالة بدون متابعة.', tag: 'partial' },
              { id: 'e_r2_q1_c', text: 'أهمل الجوانب النفسية للتركيز على الطبي.', tag: 'poor' }
            ]
          },
          {
            id: 'e_r2_q2',
            text: 'هل تناقش تأثير المرض على علاقاتها الشخصية؟',
            options: [
              { id: 'e_r2_q2_a', text: 'أفتح حوارًا حساسًا عن العلاقات والدعم الاجتماعي.', tag: 'patient-centered' },
              { id: 'e_r2_q2_b', text: 'أعطي نصائح عامة عن التكيف.', tag: 'partial' },
              { id: 'e_r2_q2_c', text: 'أبتعد عن الموضوع لأنه \"خاصة بالمريض\".', tag: 'poor' }
            ]
          },
          {
            id: 'e_r2_q3',
            text: 'كيف تشارك المريض في الخطة الطويلة؟',
            options: [
              { id: 'e_r2_q3_a', text: 'نضع خطة قابلّة للتعديل بمشاركته وتقويم دوري.', tag: 'patient-centered' },
              { id: 'e_r2_q3_b', text: 'أحدد خطة عامة دون مراجعات دورية.', tag: 'partial' },
              { id: 'e_r2_q3_c', text: 'أضع تعليمات طويلة الأمد دون إشراكه.', tag: 'poor' }
            ]
          }
        ]
      }
    ]
  }
];

// State
let state = {
  patientIndex: 0,
  roundIndex: 0,
  votes: {} // structure: votes[patientId] = { [roundIndex]: { [questionId]: { voter, choiceId } } }
};

// DOM elements
const $story = document.getElementById('story');
const $roundArea = document.getElementById('round-area');
const $patientTitle = document.getElementById('patient-title');
const $patientDesc = document.getElementById('patient-desc');
const $questionList = document.getElementById('question-list');
const $submitVotes = document.getElementById('submit-votes');
const $nextRoundBtn = document.getElementById('next-round');
const $roundResult = document.getElementById('round-result');
const $finalArea = document.getElementById('final-area');
const $finalSummary = document.getElementById('final-summary');
const $scoreboard = document.getElementById('scoreboard');
const $audienceName = document.getElementById('audience-name');
const $patientImage = document.getElementById('patient-image');
const $voteBars = document.getElementById('vote-bars');
const $roundNote = document.getElementById('round-note');

// Intro screen
function showIntro() {
  $story.innerHTML = `
    <h2>حكايتي مع المرض</h2>
    <p>أنا عم علي، سأعرض عليكم الحالات ونصوت معًا لنتعلم كيف نكون أكثر متمحورين بالمريض.</p>
    <button id="start-game" class="btn primary">ابدأ الجولة</button>
  `;
  document.getElementById('start-game').addEventListener('click', startGame);
  $roundArea.classList.add('hidden');
  $finalArea.classList.add('hidden');
}
showIntro(); // initial render

// Start game
function startGame() {
  state.patientIndex = 0;
  state.roundIndex = 0;
  state.votes = {};
  $story.classList.add('hidden');
  $roundArea.classList.remove('hidden');
  $finalArea.classList.add('hidden');
  renderCurrentRound();
}

// Render current round
function renderCurrentRound() {
  $roundResult.classList.add('hidden');
  $nextRoundBtn.classList.add('hidden');
  $roundNote.textContent = '';
  $voteBars.innerHTML = '';
  $questionList.innerHTML = '';

  const patient = patients[state.patientIndex];
  const round = patient.rounds[state.roundIndex];

  $patientTitle.textContent = `${patient.title} — ${round.title}`;
  $patientDesc.textContent = patient.desc;
  // If you have images use images/{patient.id}.png; otherwise placeholder
  $patientImage.src = `images/${patient.id}.png`;
  $patientImage.alt = patient.title;

  // Render questions
  round.questions.forEach((q, qIdx) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question';
    const qTitle = document.createElement('h4');
    qTitle.textContent = `${qIdx + 1}. ${q.text}`;
    qDiv.appendChild(qTitle);

    q.options.forEach(opt => {
      const optDiv = document.createElement('label');
      optDiv.className = 'option';
      optDiv.setAttribute('tabindex', '0');
      const input = document.createElement('input');
      input.type = 'radio';
      // radio name must be unique per question instance -> include patient+round index
      input.name = `${patient.id}_r${state.roundIndex}_${q.id}`;
      input.value = opt.id;
      input.dataset.tag = opt.tag;
      optDiv.appendChild(input);
      const span = document.createElement('span');
      span.textContent = opt.text;
      optDiv.appendChild(span);
      qDiv.appendChild(optDiv);
    });

    $questionList.appendChild(qDiv);
  });

  $submitVotes.disabled = false;
}

// Collect votes from DOM; returns object with allAnswered and votes map
function collectVotesFromDOM() {
  const patient = patients[state.patientIndex];
  const round = patient.rounds[state.roundIndex];
  const voter = $audienceName.value?.trim() || 'جمهور';
  const result = {};
  let allAnswered = true;

  round.questions.forEach(q => {
    const name = `${patient.id}_r${state.roundIndex}_${q.id}`;
    const radios = document.getElementsByName(name);
    let selected = null;
    Array.from(radios).forEach(r => { if (r.checked) selected = r.value; });
    if (!selected) allAnswered = false;
    result[q.id] = { voter, choiceId: selected };
  });

  return { allAnswered, votes: result };
}

// Save votes to state
function saveVotesToState(patientId, roundIndex, roundVotes) {
  if (!state.votes[patientId]) state.votes[patientId] = {};
  state.votes[patientId][roundIndex] = roundVotes;
}

// Evaluate the round and show animated bars & message
function evaluateRound() {
  const patient = patients[state.patientIndex];
  const round = patient.rounds[state.roundIndex];
  const votesForRound = state.votes[patient.id]?.[state.roundIndex] || {};

  // Count tags
  const counts = { 'patient-centered': 0, 'partial': 0, 'poor': 0 };
  Object.keys(votesForRound).forEach(qid => {
    const choiceId = votesForRound[qid].choiceId;
    if (!choiceId) return;
    const q = round.questions.find(qq => qq.id === qid);
    if (!q) return;
    const opt = q.options.find(o => o.id === choiceId);
    if (!opt) return;
    counts[opt.tag] = (counts[opt.tag] || 0) + 1;
  });

  // Determine majority
  let majorityTag = 'partial';
  if (counts['patient-centered'] >= counts['partial'] && counts['patient-centered'] >= counts['poor']) {
    majorityTag = 'patient-centered';
  } else if (counts['poor'] >= counts['partial'] && counts['poor'] >= counts['patient-centered']) {
    majorityTag = 'poor';
  }

  // Render bars
  $voteBars.innerHTML = '';
  const totalQ = round.questions.length;
  const results = [
    { label: 'رعاية متمحورة بالمريض', value: counts['patient-centered'], color: 'var(--success)' },
    { label: 'رعاية جزئية', value: counts['partial'], color: 'var(--warn)' },
    { label: 'رعاية ضعيفة', value: counts['poor'], color: 'var(--danger)' }
  ];
  results.forEach(r => {
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = `${r.label} — ${r.value} من ${totalQ}`;
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.background = r.color;
    // append then animate width
    $voteBars.appendChild(label);
    $voteBars.appendChild(bar);
    // animate after a short delay to trigger transition
    setTimeout(() => {
      const percent = totalQ > 0 ? Math.round((r.value / totalQ) * 100) : 0;
      bar.style.width = percent + '%';
    }, 100);
  });

  // Message & styling
  $roundResult.classList.remove('hidden');
  $roundResult.classList.remove('success', 'warn', 'danger');
  if (majorityTag === 'patient-centered') {
    $roundResult.classList.add('result', 'success');
    $roundNote.textContent = '🎉 أحسنتم! أغلب اختياراتكم متمحورة بالمريض.';
  } else if (majorityTag === 'partial') {
    $roundResult.classList.add('result', 'warn');
    $roundNote.textContent = '⚠️ بعض الاختيارات جيدة لكن تحتاج تحسين.';
  } else {
    $roundResult.classList.add('result', 'danger');
    $roundNote.textContent = '❌ أغلب الاختيارات غير متمحورة بالمريض.';
  }

  // Show next button to proceed
  $nextRoundBtn.classList.remove('hidden');
}

// Compute final scoreboard across all patients & rounds
function computeFinalResults() {
  const summary = [];
  const aggregate = { 'patient-centered': 0, 'partial': 0, 'poor': 0, questionsTotal: 0 };

  patients.forEach(patient => {
    const patientVotes = state.votes[patient.id] || {};
    let pCounts = { 'patient-centered': 0, 'partial': 0, 'poor': 0, questionsTotal: 0 };

    patient.rounds.forEach((round, rIndex) => {
      const rVotes = patientVotes[rIndex] || {};
      round.questions.forEach(q => {
        pCounts.questionsTotal += 1;
        aggregate.questionsTotal += 1;
        const choiceId = rVotes[q.id]?.choiceId;
        if (!choiceId) return;
        const opt = q.options.find(o => o.id === choiceId);
        if (!opt) return;
        pCounts[opt.tag] = (pCounts[opt.tag] || 0) + 1;
        aggregate[opt.tag] = (aggregate[opt.tag] || 0) + 1;
      });
    });

    // Determine patient-level classification
    let patientLabel = 'جزئي';
    if (pCounts['patient-centered'] >= pCounts['partial'] && pCounts['patient-centered'] >= pCounts['poor']) {
      patientLabel = 'متمحور بالمريض';
    } else if (pCounts['poor'] >= pCounts['partial'] && pCounts['poor'] >= pCounts['patient-centered']) {
      patientLabel = 'ضعيف';
    }

    summary.push({
      id: patient.id,
      title: patient.title,
      counts: pCounts,
      label: patientLabel
    });
  });

  // Determine overall label
  let overallLabel = 'جزئي';
  if (aggregate['patient-centered'] >= aggregate['partial'] && aggregate['patient-centered'] >= aggregate['poor']) {
    overallLabel = 'متمحور بالمريض';
  } else if (aggregate['poor'] >= aggregate['partial'] && aggregate['poor'] >= aggregate['patient-centered']) {
    overallLabel = 'ضعيف';
  }

  return { summary, aggregate, overallLabel };
}

// Display final scoreboard
function showFinalScreen() {
  const { summary, aggregate, overallLabel } = computeFinalResults();

  $roundArea.classList.add('hidden');
  $finalArea.classList.remove('hidden');

  $finalSummary.innerHTML = `
    <p>شكرًا لمشاركتكم! التصنيف العام: <strong>${overallLabel}</strong></p>
    <p>مجموع الأسئلة المجيبة: ${aggregate.questionsTotal}</p>
  `;

  $scoreboard.innerHTML = '';
  // overall aggregate card
  const aggCard = document.createElement('div');
  aggCard.className = 'score-card';
  aggCard.innerHTML = `
    <div>
      <h4>النتيجة الإجمالية</h4>
      <div style="color:var(--muted)">رعاية متمحورة: ${aggregate['patient-centered']} — جزئية: ${aggregate['partial']} — ضعيفة: ${aggregate['poor']}</div>
    </div>
    <div style="font-weight:700">${overallLabel}</div>
  `;
  $scoreboard.appendChild(aggCard);

  // per-patient cards
  summary.forEach(s => {
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `
      <div>
        <h4>${s.title}</h4>
        <div style="color:var(--muted)">رعاية متمحورة: ${s.counts['patient-centered']} — جزئية: ${s.counts['partial']} — ضعيفة: ${s.counts['poor']}</div>
      </div>
      <div style="font-weight:700">${s.label}</div>
    `;
    $scoreboard.appendChild(card);
  });
}

// Button handlers
$submitVotes.addEventListener('click', () => {
  const { allAnswered, votes } = collectVotesFromDOM();
  if (!allAnswered) {
    alert('يرجى الإجابة على كل الأسئلة قبل الإرسال.');
    return;
  }
  const patient = patients[state.patientIndex];
  saveVotesToState(patient.id, state.roundIndex, votes);
  $submitVotes.disabled = true;
  evaluateRound();
});

$nextRoundBtn.addEventListener('click', () => {
  // advance round or patient
  const patient = patients[state.patientIndex];
  if (state.roundIndex + 1 < patient.rounds.length) {
    state.roundIndex += 1;
  } else {
    // move to next patient
    if (state.patientIndex + 1 < patients.length) {
      state.patientIndex += 1;
      state.roundIndex = 0;
    } else {
      // finished all patients -> final
      showFinalScreen();
      return;
    }
  }
  // prepare next round
  $submitVotes.disabled = false;
  renderCurrentRound();
});

// Restart button
document.getElementById('restart').addEventListener('click', () => {
  $audienceName.value = '';
  startGame();
});

// Keyboard accessibility: allow Enter on option labels to toggle radio
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const active = document.activeElement;
    if (active && active.classList && active.classList.contains('option')) {
      const input = active.querySelector('input[type="radio"]');
      if (input) input.checked = true;
    }
  }
});
