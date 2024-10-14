function calculate() {
    let name = document.getElementById('name').value;
    let subject1 = parseFloat(prompt("Enter marks for Subject 1"));
    let subject2 = parseFloat(prompt("Enter marks for Subject 2"));
    let subject3 = parseFloat(prompt("Enter marks for Subject 3"));
    let subject4 = parseFloat(prompt("Enter marks for Subject 4"));
    let subject5 = parseFloat(prompt("Enter marks for Subject 5"));

    // Calculate percentage
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let percentage = (totalMarks / 500) * 100;

    // Find grade
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Scholarship discount logic
    let scholarship;
    if (percentage >= 90) {
        scholarship = '50%';
    } else if (percentage >= 80) {
        scholarship = '30%';
    } else {
        scholarship = 'No Scholarship';
    }

    // Render data into table
    document.getElementById('userNameHeading').textContent = `Student: ${name}`;
    document.getElementById('subject1').textContent = subject1;
    document.getElementById('subject2').textContent = subject2;
    document.getElementById('subject3').textContent = subject3;
    document.getElementById('subject4').textContent = subject4;
    document.getElementById('subject5').textContent = subject5;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
    document.getElementById('grade').textContent = grade;
    document.getElementById('scholarship').textContent = scholarship;

    // Show the table
    document.getElementById('resultTable').classList.remove('hidden');
}
