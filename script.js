// ===============================
//  FLOATING PETALS BACKGROUND
// ===============================

// Get the container where petals will appear
var petalBg = document.getElementById('petal-bg');

// Colors used for petals
var colours = ['pink', 'gold', 'purple'];

// Create 15 petals
for (var i = 0; i < 15; i++) {

  // Create a new div element (this is one petal)
  var p = document.createElement('div');
  p.className = 'petal';

  // Random horizontal position (0% to 100%)
  p.style.left = Math.random() * 100 + '%';

  // Pick a random color from the list
  p.style.background = colours[Math.floor(Math.random() * colours.length)];

  // Random size (makes petals look natural)
  var size = 8 + Math.random() * 10;
  p.style.width = size + 'px';
  p.style.height = size + 'px';

  // Random falling speed
  p.style.animationDuration = (4 + Math.random() * 4) + 's';

  // Random delay so they don’t all fall together
  p.style.animationDelay = Math.random() * 5 + 's';

  // Add petal to screen
  petalBg.appendChild(p);
}


// ===============================
// 🇬🇭 AKAN NAME DATA
// ===============================

var AKAN_NAMES = {
  Sunday:    { male: "Kwasi",   female: "Akosua" },
  Monday:    { male: "Kwadwo",  female: "Adwoa" },
  Tuesday:   { male: "Kwabena", female: "Abenaa" },
  Wednesday: { male: "Kwaku",   female: "Akua" },
  Thursday:  { male: "Yaw",     female: "Yaa" },
  Friday:    { male: "Kofi",    female: "Afua" },
  Saturday:  { male: "Kwame",   female: "Ama" }
};

// Days of the week (used for mapping numbers → names)
var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


// ===============================
// 👤 USER GENDER SELECTION
// ===============================

// Stores selected gender (male or female)
var selectedGender = null;

// When male button is clicked
document.getElementById('btn-male').onclick = function() {
  selectedGender = 'male'; // save selection

  // Add visual highlight
  this.classList.add('active');
  document.getElementById('btn-female').classList.remove('active');
};

// When female button is clicked
document.getElementById('btn-female').onclick = function() {
  selectedGender = 'female';

  this.classList.add('active');
  document.getElementById('btn-male').classList.remove('active');
};


// ===============================
//  GENERATE AKAN NAME
// ===============================

document.getElementById('btn-generate').onclick = function() {

  // Step 1: Get input values from user
  var day = parseInt(document.getElementById('birth-day').value);
  var month = parseInt(document.getElementById('birth-month').value);
  var year = parseInt(document.getElementById('birth-year').value);

  // Step 2: Check if anything is missing
  if (!day || !month || !year || !selectedGender) {
    alert("Please fill everything");
    return; // stop here
  }

  // Step 3: Validate day and month
  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12");
    return;
  }

  // ===============================
  //  STEP 4: SPLIT YEAR
  // ===============================
  // Example: 2005
  // CC = 20 (century)
  // YY = 05 (year part)

  var CC = Math.floor(year / 100);
  var YY = year % 100;

  var MM = month;
  var DD = day;


  // ===============================
  // STEP 5: FORMULA CALCULATION
  // ===============================
  // This formula converts date → weekday number (0–6)

  var d = Math.floor(
    ((4 * CC - 2 * CC - 1) +     // century part
    (5 * YY / 4) +              // year part
    (26 * (MM + 1) / 10) +      // month part
    DD) % 7                    // day part
  );

  // Fix negative results
  if (d < 0) {
    d = (d + 7) % 7;
  }


  // ===============================
  // STEP 6: GET DAY NAME
  // ===============================
  var dayName = DAYS[d];


  // ===============================
  //  STEP 7: GET AKAN NAME
  // ===============================
  var name = AKAN_NAMES[dayName][selectedGender];


  // Safety check
  if (!name) {
    alert("Something went wrong");
    return;
  }


  // ===============================
  //  STEP 8: DISPLAY RESULT
  // ===============================
  document.getElementById('result-name').textContent = name;
  document.getElementById('result-day').textContent = dayName;

  // Show result box
  document.getElementById('result-panel').style.display = 'block';
};


// ===============================
//  RESET BUTTON
// ===============================

document.getElementById('btn-reset').onclick = function() {
  location.reload(); // refresh page
};


// ===============================
// FOOTER YEAR
// ===============================

document.getElementById('footer-year').textContent =
  new Date().getFullYear();