
const elements = [
    {tag:'p', text: 'phrase 1'},
    {tag:'div', text: 'phrase 2'},
    {tag:'footer', text: 'phrase 3'},
    {tag:'section', text: 'phrase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++){
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    createdTag.innerText = text;
    div.appendChild(createdTag);
}

container.appendChild(div);