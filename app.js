const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`${btn.dataset.view}-view`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const priority = document.getElementById('priority');
const quote = document.getElementById('quote');

priority.addEventListener('change', () => {
  const prices = {
    standard: 'R 245.00',
    urgent: 'R 348.00',
    scheduled: 'R 210.00'
  };
  quote.textContent = prices[priority.value];
});

const booking = document.getElementById('bookJob');
const trackingPanel = document.getElementById('trackingPanel');
const proofPanel = document.getElementById('proofPanel');
const matter = document.getElementById('matter');
const jobTitle = document.getElementById('jobTitle');

booking.addEventListener('click', () => {
  trackingPanel.classList.remove('hidden');
  proofPanel.classList.add('hidden');
  jobTitle.textContent = `PSP-000184 · ${matter.value || 'MAT-2026-1842'}`;
  trackingPanel.scrollIntoView({behavior:'smooth', block:'start'});
});

let stage = 0;
const bike = document.getElementById('bike');
const timeline = document.querySelectorAll('.timeline-item');
const advance = document.getElementById('advanceDemo');

const stages = [
  { left:'26%', top:'58%', text:'DOCUMENTS COLLECTED' },
  { left:'49%', top:'43%', text:'EN ROUTE TO COURT' },
  { left:'72%', top:'26%', text:'ARRIVED AT COURT' },
  { left:'80%', top:'21%', text:'FILED & COMPLETE' }
];

advance.addEventListener('click', () => {
  if(stage >= stages.length) stage = 0;
  const s = stages[stage];
  bike.style.left = s.left;
  bike.style.top = s.top;

  timeline.forEach((item, index) => {
    item.classList.remove('active');
    if(index <= stage + 1) item.classList.add('complete');
  });

  if(stage + 2 < timeline.length) {
    timeline[stage + 2].classList.add('active');
  }

  advance.textContent = s.text;

  if(stage === 3){
    proofPanel.classList.remove('hidden');
    advance.textContent = 'RESTART DEMO';
    proofPanel.scrollIntoView({behavior:'smooth', block:'center'});
  }
  stage++;
});

const riderAction = document.getElementById('riderAction');
const riderStates = ['DOCUMENTS COLLECTED','ARRIVED AT COURT','UPLOAD FILING PROOF','COMPLETE JOB','JOB COMPLETE'];
let riderStage = 0;
riderAction.addEventListener('click',()=>{
  riderAction.textContent = riderStates[Math.min(riderStage, riderStates.length-1)];
  riderStage++;
});
