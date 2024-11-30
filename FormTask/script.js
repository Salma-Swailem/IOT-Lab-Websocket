const socket = io();

// Listen for the 'update-list' event to update the list when data is received
socket.on('update-list', function(data) {
    console.log('Received updated list:', data); // Debugging log for incoming data
    const dataList = document.getElementById('submissionList');
    dataList.innerHTML = ''; // Clear the old list

    data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div><strong>Name:</strong> ${item.userName}</div>   
        <div><strong>Phone:</strong> ${item.number}</div>
        <div><strong>Email:</strong> ${item.email}</div>  
        <div><strong>Gender:</strong> ${item.gender}</div>
        `;
        dataList.appendChild(li);
    });
});

// Send data when the form is submitted
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        userName: document.getElementById('userName').value.trim(),
        number: document.getElementById('number').value.trim(),
        email: document.getElementById('email').value.trim(),
        gender: document.querySelector('input[name="gender"]:checked')?.value
    };

    socket.emit('new-data', formData); // Emit the data to the server

    alert('Data has been successfully submitted!');
    form.reset(); // Reset the form after submission
});
