
const alertNotification = document.getElementById('alert');

// -- creates the html for the banner --//

alertNotification.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> Lorem ipsum dolor sit amet, perfecto honestatis at usu, te.</p>
<p class="alert-banner-close">X</p>
</div>
`
alertNotification.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alertNotification.style.display = 'none';
    return false;
  }
});

// -- Messaging -- //

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', e => {
  e.preventDefault();
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert('Please fill out user field before sending');
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});