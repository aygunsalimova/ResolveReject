let h2 = document.querySelector("h2");
let ul = document.querySelector("ul");

function getUser(id) {
    console.log(`${id} - nin datalarini al..`)
    return new Promise((resolve, reject) => {
        resolve({
            name: "Aygun",
            surname: "Salimova"
        });
    })
}

function getCourse(id) {
    console.log(`${id}-nin kurslarini al`);

    return new Promise((resolve, reject) => {
        resolve(["Kainat", "Yuptech", "Khazar LC"])
    })
}

function getComment(number) {
    console.log(`${number}-ci kurs haqqinda melumat`);

    return new Promise((resolve, reject) => {
        resolve([
            "kainat ali mektebe hazirliq kursudur",
            "Yuptech proqramlashdirma dersleri veren bir kursdur",
            "Khazar Language Center xarici diller tedris eden bir kursdur"
        ])

    })
}

getUser(1)
    .then((userName) => {
        h2.innerHTML = `Telebe: ${userName.name} ${userName.surname}
    <input type='button' id='input' value='${userName.name}  kurslarını gör'>`;
    })
    .catch((err) => {
        alert(err);
    });

getCourse(1)
    .then((courses) => {
        let input = document.querySelector('#input');

        input.addEventListener('click', () => {
            let course = "";
            courses.forEach((element) => {
                course += `<li>${element}
            <buton>${element} kursunun aciqlamasini gor </button>
            <p></p>
            </li>`
            });

            ul.innerHTML = course;

            getComment(1)
                .then((comment) => {

                    let button = document.querySelectorAll('button');

                    console.log(button);

                    let p = documrnt.querySelectorAll('p');

                    for (let i = 0; i < comment.length; i++) {
                        button[i].addEventListener("click", () => {
                            setTimeout(() => {
                                p[i].style.display = "block";
                                p[i].innerHTML = comment[i];
                            }, 500)
                        })
                    }
                })
                .catch((error) => {
                    alert(error)
                });
        })
    })
    .catch((error) => {
        alert(error)
    })