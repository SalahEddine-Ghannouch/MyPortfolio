let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


/* Sending Email from Contact Section */
(function () {
    emailjs.init("dkGt5Ied211wgnKua");
})();

function sendmail() { 
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            email_id: userEmail,
            message: userMessage,
            subject_id: subject
        };

        emailjs.send('service_9mc11k4', 'template_uimy9g8', contactParams).then(function (res) {
            alert('Success Message !');
        })
}
