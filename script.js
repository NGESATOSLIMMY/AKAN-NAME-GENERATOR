/* FLOATING PETALS */
var petalBg  = document.getElementById('petal-bg');
var colours  = ['#F9A8C0','#D4A853','#C4A0D8','#F0C0D0','#A8C4E0','#F0CC80'];

for (var i = 0; i < 18; i++) {
  var p = document.createElement('div');
  var size = 10 + Math.random() * 18;

  p.className = 'petal';
  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${Math.random()*100}%;
    top:${-Math.random()*20}%;
    background:${colours[Math.floor(Math.random()*colours.length)]};
    animation-duration:${8+Math.random()*12}s;
    animation-delay:${Math.random()*10}s;
  `;
  petalBg.appendChild(p);
}

/* DATA */
var AKAN_NAMES = {
  Sunday:{male:{name:'Kwasi'},female:{name:'Akosua'}},
  Monday:{male:{name:'Kwadwo'},female:{name:'Adwoa'}},
  Tuesday:{male:{name:'Kwabena'},female:{name:'Abena'}},
  Wednesday:{male:{name:'Kwaku'},female:{name:'Akua'}},
  Thursday:{male:{name:'Yaw'},female:{name:'Yaa'}},
  Friday:{male:{name:'Kofi'},female:{name:'Afua'}},
  Saturday:{male:{name:'Kwame'},female:{name:'Ama'}}
};

var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var selectedGender = null;

/* GENDER */
document.getElementById('btn-male').onclick = () => {
  selectedGender = 'male';
};
document.getElementById('btn-female').onclick = () => {
  selectedGender = 'female';
};

/* GENERATE */
document.getElementById('btn-generate').onclick = () => {

  var day   = parseInt(document.getElementById('birth-day').value);
  var month = parseInt(document.getElementById('birth-month').value);
  var year  = parseInt(document.getElementById('birth-year').value);

  if (!day || !month || !year || !selectedGender) {
    alert('Fill everything');
    return;
  }

  var date = new Date(year, month-1, day);
  var dayName = DAYS[date.getDay()];
  var result = AKAN_NAMES[dayName][selectedGender];

  document.getElementById('result-name').textContent = result.name;
  document.getElementById('result-day').textContent = dayName;
  document.getElementById('result-panel').style.display = 'block';
};

/* RESET */
document.getElementById('btn-reset').onclick = () => {
  location.reload();
};

/* FOOTER YEAR */
document.getElementById('footer-year').textContent = new Date().getFullYear();