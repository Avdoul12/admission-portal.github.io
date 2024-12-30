// JavaScript don Gudanar da Fom
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Hana aikawa da fom din (don duba shi kawai)

    // Samu bayanan fom
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const statement = document.getElementById('statement').value;

    // Ajiye ko aika bayanan zuwa sabar ko ajiyewa
    console.log('Application Submitted');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Course:', course);
    console.log('Statement of Purpose:', statement);

    // Show Success Message (Optional)
    alert('Your application has been successfully submitted!');
});
