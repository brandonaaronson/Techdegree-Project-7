
// -- notification drop menu -- //
let notifyMenu = document.querySelector('.notify-icon');
// -- closes menu if clicked outside -- //

window.addEventListener('click', (e) => {
  let menu = document.getElementById('notifyLinks');
  

  if (e.target === notifyMenu) {
    menu = document.getElementsByClassName('notification-links');
    let notifyDot = document.querySelector('.notify-icon-new');
    notifyDot.style.display = 'none';

    for (i = 0; i < menu.length; i ++) {
      let openMenu = menu[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      } else if (openMenu.classList.contains('notification-links')) {
        openMenu.classList.add('show');
      } 
    }
  } else if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});
// -- alert banner -- //

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

function newFunction() {
  document.querySelector('.notification-links').classList.toggle('show');
}
