const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

// for (let p of ps) {
//     console.log(p);
// }

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
};