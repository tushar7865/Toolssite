// Age Calculator
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const tobInput = document.getElementById('tob').value;
  
    if (!dobInput || !tobInput) {
      alert("Please enter both date and time of birth.");
      return;
    }
  
    const birthDateTime = new Date(dobInput + 'T' + tobInput);
    const now = new Date();
  
    let diff = now - birthDateTime;
  
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
    document.getElementById('ageResult').innerHTML = `
      <strong>Age:</strong><br>
      ${years} Years, ${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes
    `;
  }
  
  // Salary Calculator
  function calculateSalary() {
    const packageInput = document.getElementById('package').value;
    const dojInput = document.getElementById('doj').value;
  
    if (!packageInput || !dojInput) {
      alert("Please enter both package and date of joining.");
      return;
    }
  
    const joiningDate = new Date(dojInput);
    const now = new Date();
  
    let diffInMonths = (now.getFullYear() - joiningDate.getFullYear()) * 12 + (now.getMonth() - joiningDate.getMonth());
  
    if (diffInMonths < 0) {
      alert("Date of joining cannot be in the future!");
      return;
    }
  
    const monthlySalary = (packageInput * 100000) / 12; // assuming package is in LPA
    const totalEarned = monthlySalary * diffInMonths;
  
    document.getElementById('salaryResult').innerHTML = `
      <strong>Details:</strong><br>
      Monthly Salary: ₹${monthlySalary.toFixed(2)}<br>
      Total Earned Salary: ₹${totalEarned.toFixed(2)}<br>
      Total Months Worked: ${diffInMonths} months
    `;
  }
  