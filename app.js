// Simplified core logic with neon enhancements
const app = (function(){
  // Patients data (shortened for demo, include full dataset in your project)
  const patients = [
    { id:'diabetes', title:'السكري — عم علي', desc:'مريض سكري نوع 2...', rounds:[ /* ... */ ] },
    { id:'cardio', title:'أمراض القلب — الحاجة فاطمة', desc:'...', rounds:[ /* ... */ ] },
    { id:'ckd', title:'مرض كلوي مزمن — أبو حسن', desc:'...', rounds:[ /* ... */ ] },
    { id:'epilepsy', title:'الصرع — سعاد', desc:'...', rounds:[ /* ... */ ] }
  ];

  let state = { patientIndex:0, roundIndex:0, votes:{} };

  const $story=document.getElementById('story');
  const $roundArea=document.getElementById('round-area');
  const $patientTitle=document.getElementById('patient-title');
  const
