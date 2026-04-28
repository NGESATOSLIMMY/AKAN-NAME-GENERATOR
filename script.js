// ===== FLOATING PETALS BACKGROUND =====

// Get container
var petalBg = document.getElementById('petal-bg');

// Colors for petals
var colours = ['pink','gold','purple'];

// Create multiple petals
for (var i = 0; i < 10; i++) {
  var p = document.createElement('div');
  p.className = 'petal';

  // Random position
  p.style.left = Math.random() * 100 + '%';

  petalBg.appendChild(p);
}

// ===== AKAN NAME DATA =====
var AKAN_NAMES = {
  Sunday: { male: "Kwasi", female: "Akosua" },
  Monday: { male: "Kwadwo", female: "Adwoa" }
  // (rest of days)
};

// Days array
var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// Store selected gender
var selectedGender = null;

// ===== GENDER BUTTONS =====
document.getElementById('btn-male').onclick = function() {
  selectedGender = 'male';
};

document.getElementById('btn-female').onclick = function() {
  selectedGender = 'female';
};

// ===== GENERATE BUTTON =====
document.getElementById('btn-generate').onclick = function() {

  // Get input values
  var day = parseInt(document.getElementById('birth-day').value);
  var month = parseInt(document.getElementById('birth-month').value);
  var year = parseInt(document.getElementById('birth-year').value);

  // Check if everything is filled
  if (!day || !month || !year || !selectedGender) {
    alert("Please fill everything");
    return;
  }

  // Create date
  var date = new Date(year, month - 1, day);

  // Get day of week
  var dayName = DAYS[date.getDay()];

  // Get Akan name
  var name = AKAN_NAMES[dayName][selectedGender];

  // Display result
  document.getElementById('result-name').textContent = name;
  document.getElementById('result-panel').style.display = 'block';
};

// ===== RESET BUTTON =====
document.getElementById('btn-reset').onclick = function() {
  location.reload();
};

// ===== FOOTER YEAR =====
document.getElementById('footer-year').textContent = new Date().getFullYear();