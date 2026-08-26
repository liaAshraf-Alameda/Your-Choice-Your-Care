// حساب الأغلبية في الجولة: نخرج tag الغالب patient-centered/partial/poor
function evaluateRound() {
  const patient = patients[state.patientIndex];
  const round = patient.rounds[state.roundIndex];
  const votes = state.votes[patient.id]?.[state.roundIndex] || {};

  // Count tags
  let counts = { 'patient-centered': 0, 'partial': 0, 'poor': 0 };
  round.questions.forEach(q => {
    const choice = votes[q.id]?.choiceId;
    if (choice) {
      const opt = q.options.find(o => o.id === choice);
      if (opt) counts[opt.tag]++;
    }
  });

  // Determine majority
  let majorityTag = 'partial';
  if (counts['patient-centered'] >= counts['partial'] && counts['patient-centered'] >= counts['poor']) {
    majorityTag = 'patient-centered';
  } else if (counts['poor'] >= counts['partial'] && counts['poor'] >= counts['patient-centered']) {
    majorityTag = 'poor';
  }

  // Show result with neon style + animated bars
  $roundResult.classList.remove('hidden');
  $roundResult.innerHTML = `<h3>نتائج الجولة</h3>`;

  const $bars = document.createElement('div');
  $bars.id = 'vote-bars';
  $roundResult.appendChild($bars);

  const results = [
    { label:'رعاية متمحورة بالمريض', value:counts['patient-centered'], color:'var(--success)' },
    { label:'رعاية جزئية', value:counts['partial'], color:'var(--warn)' },
    { label:'رعاية ضعيفة', value:counts['poor'], color:'var(--danger)' }
  ];

  results.forEach(r=>{
    const label = document.createElement('div');
    label.className='bar-label';
    label.textContent=`${r.label} — ${r.value}`;
    const bar = document.createElement('div');
    bar.className='bar';
    bar.style.background=r.color;
    bar.style.width='0%';
    $bars.appendChild(label);
    $bars.appendChild(bar);
    setTimeout(()=>{bar.style.width=(r.value/round.questions.length*100)+'%';},100);
  });

  // Highlight majority
  if (majorityTag === 'patient-centered') {
    $roundResult.className = 'result success';
    $roundResult.innerHTML += `<p>🎉 أحسنتم! أغلب اختياراتكم متمحورة بالمريض.</p>`;
  } else if (majorityTag === 'partial') {
    $roundResult.className = 'result warn';
    $roundResult.innerHTML += `<p>⚠️ بعض الاختيارات جيدة لكن تحتاج تحسين.</p>`;
  } else {
    $roundResult.className = 'result danger';
    $roundResult.innerHTML += `<p>❌ أغلب الاختيارات غير متمحورة بالمريض.</p>`;
  }

  $nextRoundBtn.classList.remove('hidden');
}
