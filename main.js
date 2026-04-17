// async function misol() {
//     console.log("1 - Boshladim")

//     await new Promise(resolve => setTimeout(resolve, 2000));

//     console.log("2 - 2 soniyadan keyin yoziladi");

// }

// misol()

// async function tuxumqovur() {
//     console.log(" 🥚 Tuxumni oldi")

//         await new Promise(resolve => setTimeout(resolve, 3 000));

//         console.log("Tuxum tayyor!");
// }

// tuxumqovur()
// console.log("Shu orada choy qaynatmoqda...");

// async function foydalanuvchilarol() {
//     const javob = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const foydalanuvchi = await javob.json();

//     console.log("ism:" , foydalanuvchi.name);
//     console.log("Email", foydalanuvchi.email);
// }

// foydalanuvchilarol()

async function Protext() {
    try {
        const javob = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const malumot = await javob.json();
        console.log("Muvaffaqiyatli:", malumot.name)


    } catch (xato) {
        console.log("Xato yuz berdi:", xato.message)
    }
}

Protext()