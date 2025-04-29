// Salary Calculator
document.getElementById("calculateBtn").addEventListener("click", function () {
  const packageInput = parseFloat(document.getElementById('package').value);

  if (!packageInput || packageInput < 0) {
    alert("Please enter a valid annual package in INR.");
    return;
  }

  const monthlySalary = packageInput / 12;

  document.getElementById('salaryResult').innerHTML = `
    <strong>Monthly Salary:</strong> ₹${monthlySalary.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}
  `;
});