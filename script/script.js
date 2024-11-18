"use strict";
console.clear();

/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const generateMailBtn = document.getElementById('mailBtn');
console.log(generateMailBtn);
const emailsUl = document.getElementById('mailsList');

generateMailBtn.addEventListener("click", generateMails);



function generateMails() {
    const emailsList = [];

    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((mails) => {
                console.log(mails.data);
                emailsList.push(mails.data.response);

                if (emailsList.length === 10) {
                    let emailLi = "";
                    emailsList.forEach(element => {
                        emailLi += `<li class="text-bg-secondary p-2 my-1">${element}</li>`;
                    });

                    emailsUl.innerHTML = emailLi;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}