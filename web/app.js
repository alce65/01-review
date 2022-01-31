const main = () => {
    console.log(window.document);
    console.dir(window.document);
    const nodeH1 = document.querySelector('h1');
    const nodeDiv = document.querySelector('#initial-div');
    const btnNodes = document.querySelectorAll('button');
    console.dir(nodeH1);
    nodeH1.textContent += ' desde HTML';

    btnNodes[0].addEventListener('click', () => {
        nodeDiv.innerHTML = '<p>Hola <b>mundo</b></p>';
        console.log('Hiciste click');
    });
};

document.addEventListener('DOMContentLoaded', main);
