// Neon Patient Care Game
const app = (function(){

  // Demo patient data (add full dataset later)
  const patients = [
    {
      id:'diabetes',
      title:'السكري — عم علي',
      desc:'مريض سكري نوع 2 منذ عشر سنوات.',
      rounds:[
        {
          title:'الجولة 1: الأدوية',
          questions:[
            {
              id:'1A',
              text:'عم علي ينسى أقراص الصبح. ماذا تفعل؟',
              options:[
                {id:'1', text:'نضع خطة تذكير مع إشراكه.', tag:'patient-centered'},
                {id:'2', text:'نزيد الجرعة بسرعة.', tag:'partial'},
                {id:'3', text:'نلومه ونغير الدواء.', tag:'poor'}
              ]
            }
          ]
        }
      ]
    }
  ];

  let state = { patientIndex:0, roundIndex:0, votes:{} };

  // DOM elements
  const $story=document.getElementById('story');
  const $roundArea=document.getElementById('round-area');
  const $patientTitle=document.getElementById('patient-title');
  const $patientDesc=document.getElementById('patient-desc');
  const $questionList=document.getElementById('question-list');
  const $submitVotes=document.getElementById('submit-votes');
  const $nextRoundBtn=document.getElementById('next-round');
  const $roundResult=document.getElementById('round-result');
  const $finalArea=document.getElementById('final-area');
  const $finalSummary=document.getElementById('final-summary');
  const $scoreboard=document.getElementById('scoreboard');
  const $audienceName=document.getElementById('audience-name');
  const $patientImage=document.getElementById('patient-image');

  // Intro
  function showIntro(){
    $story.innerHTML = `
      <h2>حكايتي مع المرض</h2>
      <p>أنا عم علي، سأعرض عليكم الحالات ونصوت معًا.</p>
      <button id="start-game" class="btn">ابدأ الجولة</button>`;
    document.getElementById('start-game').addEventListener('click', startGame);
    $roundArea.classList.add('hidden');
    $finalArea.classList.add('hidden');
  }

  // Start game
  function startGame(){
    state.patientIndex=0;
    state.roundIndex=0;
    state.votes={};
    $story.classList.add('hidden');
    $roundArea.classList.remove('hidden');
    renderCurrentRound();
  }

  // Render round
  function renderCurrentRound(){
    $roundResult.classList.add('hidden');
    $nextRoundBtn.classList.add('hidden');

    const patient=patients[state.patientIndex];
    const round=patient.rounds[state.roundIndex];

    $patientTitle.textContent=`${patient.title} — ${round.title}`;
    $patientDesc.textContent=patient.desc;
    $patientImage.src=`images/${patient.id}.png`;

    $questionList.innerHTML='';
    round.questions.forEach(q=>{
      const qDiv=document.createElement('div');
      qDiv.className='question';
      const qTitle=document.createElement('h4');
      qTitle.textContent=q.text;
      qDiv.appendChild(qTitle);

      q.options.forEach(opt=>{
        const optDiv=document.createElement('label');
        optDiv.className='option';
        const input=document.createElement('input');
        input.type='radio';
        input.name=q.id;
        input.value=opt.id;
        optDiv.appendChild(input);
        const span=document.createElement('span');
        span.textContent=opt.text;
        optDiv.appendChild(span);
        qDiv.appendChild(optDiv);
      });

      $questionList.appendChild(qDiv);
    });

    $submitVotes.disabled=false;
  }

  // Collect votes
  function collectVotes(){
    const patient=patients[state.patientIndex];
    const round=patient.rounds[state.roundIndex];
    const voter=$audienceName.value||'جمهور';
    const result={};
    let allAnswered=true;

    round.questions.forEach(q=>{
      const radios=document.getElementsByName(q.id);
      let selected=null;
      Array.from(radios).forEach(r=>{ if(r.checked) selected=r.value; });
      if(!selected) allAnswered=false;
      result[q.id]={voter, choiceId:selected};
    });

    return {allAnswered, votes:result};
  }

  // Evaluate round
  function evaluateRound(){
    const patient=patients[state.patientIndex];
    const round=patient.rounds[state.roundIndex];
    const votes=state.votes[patient.id]?.[state.roundIndex]||{};
    let counts={'patient-centered':0,'partial':0,'poor':0};

    round.questions.forEach(q=>{
      const choice=votes[q.id]?.choiceId;
      if(choice){
        const opt=q.options.find(o=>o.id===choice);
        if(opt) counts[opt.tag]++;
      }
    });

    let majorityTag='partial';
    if(counts['patient-centered']>=counts['partial'] && counts['patient-centered']>=counts['poor']){
      majorityTag='patient-centered';
    } else if(counts['poor']>=counts['partial'] && counts['poor']>=counts['patient-centered']){
      majorityTag='poor';
    }

    $roundResult.classList.remove('hidden');
    $roundResult.innerHTML='<h3>نتائج الجولة</h3>';
    const $bars=document.getElementById('vote-bars');
    $bars.innerHTML='';
    const results=[
      {label:'رعاية متمحورة بالمريض',value:counts['patient-centered'],color:'var(--success)'},
      {label:'رعاية جزئية',value:counts['partial'],color:'var(--warn)'},
      {label:'رعاية ضعيفة',value:counts['poor'],color:'var(--danger)'}
    ];
    results.forEach(r=>{
      const label=document.createElement('div');
      label.className='bar-label';
      label.textContent=`${r.label} — ${r.value}`;
      const bar=document.createElement('div');
      bar.className='bar';
      bar.style.background=r.color;
      bar.style.width='0%';
      $bars.appendChild(label);
      $bars.appendChild(bar);
      setTimeout(()=>{bar.style.width=(r.value/round.questions.length*100)+'%';},100);
    });

    if(majorityTag==='patient-centered'){
      $roundResult.className='result success';
      $roundResult.innerHTML+='<p>🎉 أحسنتم! أغلب اختياراتكم متمحورة بالمريض.</p>';
    } else if(majorityTag==='partial'){
      $roundResult.className='result warn';
      $roundResult.innerHTML+='<p>⚠️ بعض الاختيارات جيدة لكن تحتاج تحسين.</p>';
    } else {
      $roundResult.className='result danger';
      $roundResult.innerHTML+='<p>❌ أغلب الاختيارات غير متمحورة بالمريض.</p>';
    }

    $nextRoundBtn.classList.remove('hidden');
  }

  // Event listeners
  $submitVotes.addEventListener('click',()=>{
    const {allAnswered,votes}=collectVotes();
    if(!allAnswered){alert('أجب على كل الأسئلة');return;}
    const patient=patients[state.patientIndex];
    if(!state.votes[patient.id]) state.votes[patient.id]={};
    state.votes[patient.id][state.roundIndex]=votes;
    evaluateRound();
  });

  $nextRoundBtn.addEventListener('click',()=>{
    state.roundIndex++;
    const patient=patients[state.patientIndex];
    if(state.roundIndex>=patient.rounds.length){
      showFinalSummary();
    } else {
      renderCurrentRound();
    }
  });

  function showFinalSummary(){
    $roundArea.classList.add('hidden');
    $finalArea.classList.remove('hidden');
    $finalSummary.innerHTML='<p>🎇 انتهت اللعبة! هذا ملخص اختياراتكم.</p>';
    $scoreboard.innerHTML='';
    patients.forEach((p,idx)=>{
      const scoreItem=document.createElement('div');
      scoreItem.className='score-item';
      scoreItem.textContent=`${p.title}: ${calculatePatientScore(p.id)} نقاط`;
      $scoreboard.appendChild(scoreItem);
      setTimeout(()=>{scoreItem.classList.add('visible');},idx*800);
    });
  }

  function calculatePatientScore(patientId){
    let score=0;
    const patientVotes=state.votes[patientId]||{};
    Object.values(patientVotes).forEach(roundVotes=>{
      Object.values(roundVotes).forEach(v=>{
        if(v.choiceId==='1') score++;
      });
    });
    return score;
  }

  // Music toggle
  const music=document.getElementById('bg-music');
  const toggle=document.getElementById('music-toggle');
  toggle.addEventListener('click',()=>{
    if(music.paused){music.play();toggle.textContent='🔊 إيقاف الموسيقى';}
    else{music.pause();toggle.textContent='🎵 تشغيل الموسيقى';}
  });

  // Show intro on load
