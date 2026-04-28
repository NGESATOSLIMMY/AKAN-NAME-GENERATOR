<script>

  // ── 1. The Akan names data ──
  const AKAN = {
    Sunday:    { male: { name: 'Kwasi',   meaning: 'Born on Sunday — radiant and full of divine grace.' },
                 female: { name: 'Akosua', meaning: 'Born on Sunday — a bearer of light and warmth.' } },
    Monday:    { male: { name: 'Kwadwo',  meaning: 'Born on Monday — peaceful and gentle in spirit.' },
                 female: { name: 'Adwoa',  meaning: 'Born on Monday — she brings calm and harmony.' } },
    Tuesday:   { male: { name: 'Kwabena', meaning: 'Born on Tuesday — restless and resilient like the ocean.' },
                 female: { name: 'Abena',  meaning: 'Born on Tuesday — spirited and determined.' } },
    Wednesday: { male: { name: 'Kwaku',   meaning: 'Born on Wednesday — lively, quick-witted and bold.' },
                 female: { name: 'Akua',   meaning: 'Born on Wednesday — warm, creative and vivacious.' } },
    Thursday:  { male: { name: 'Yaw',     meaning: 'Born on Thursday — courageous, a natural leader.' },
                 female: { name: 'Yaa',    meaning: 'Born on Thursday — strong-willed and driven.' } },
    Friday:    { male: { name: 'Kofi',    meaning: 'Born on Friday — adventurous and full of wanderlust.' },
                 female: { name: 'Afua',   meaning: 'Born on Friday — free-spirited and full of joy.' } },
    Saturday:  { male: { name: 'Kwame',   meaning: 'Born on Saturday — grounded, wise, and dependable.' },
                 female: { name: 'Ama',    meaning: 'Born on Saturday — nurturing and deeply caring.' } },
  };

  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  // ── 2. Track which gender the user picked ──
  let selectedGender = null;

  document.getElementById('btn-male').addEventListener('click', function() {
    selectedGender = 'male';
    document.getElementById('btn-male').classList.add('active');
    document.getElementById('btn-female').classList.remove('active');
  });

  document.getElementById('btn-female').addEventListener('click', function() {
    selectedGender = 'female';
    document.getElementById('btn-female').classList.add('active');
    document.getElementById('btn-male').classList.remove('active');
  });

  // ── 3. The generate button ──
  document.getElementById('btn-generate').addEventListener('click', function() {

    // Get values from form
    var day   = parseInt(document.getElementById('birth-day').value);
    var month = parseInt(document.getElementById('birth-month').value);
    var year  = parseInt(document.getElementById('birth-year').value);

    // Validation — check for empty or bad input
    if (!document.getElementById('birth-day').value ||
        !document.getElementById('birth-month').value ||
        !document.getElementById('birth-year').value) {
      alert('Please fill in all fields!');
      return;
    }

    if (isNaN(day) || day < 1 || day > 31) {
      alert('Please enter a valid day between 1 and 31.');
      return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      alert('Please select a valid month.');
      return;
    }

    // Check the date actually exists (e.g. no Feb 30)
    var testDate = new Date(year, month - 1, day);
    if (testDate.getDate() !== day || testDate.getMonth() !== month - 1) {
      alert('That date does not exist! Please check your entry.');
      return;
    }

    if (!selectedGender) {
      alert('Please select your gender.');
      return;
    }

    // ── 4. Calculate the day of the week ──
    var birthday = new Date(year, month - 1, day);
    var dayName  = DAYS[birthday.getDay()];  // e.g. "Friday"

    // ── 5. Look up the Akan name ──
    var akanData = AKAN[dayName][selectedGender];

    // ── 6. Display the result ──
    document.getElementById('result-name').textContent    = akanData.name;
    document.getElementById('result-meaning').textContent = akanData.meaning;
    document.getElementById('result-day').textContent     = 'You were born on a ' + dayName + '.';
    document.getElementById('result').style.display       = 'block';
  });

  // ── 7. Reset button ──
  document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('birth-day').value   = '';
    document.getElementById('birth-month').value = '';
    document.getElementById('birth-year').value  = '';
    document.getElementById('btn-male').classList.remove('active');
    document.getElementById('btn-female').classList.remove('active');
    selectedGender = null;
    document.getElementById('result').style.display = 'none';
  });

</script>