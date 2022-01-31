const main = () => {
    console.log(window.document);
    console.dir(window.document);
    const nodeH1 = document.querySelector('h1');
    const nodeDiv = document.querySelector('#initial-div');
    const btnNodes = document.querySelectorAll('button');
    const iNameNode = document.querySelector('[placeholder="Dime tu nombre"]');
    console.dir(nodeH1);
    nodeH1.textContent += ' desde HTML';

    btnNodes[0].addEventListener('click', () => {
        nodeDiv.innerHTML = `
            <p>
                Hola <b>${iNameNode.value}</b>
            </p>`;
        console.log('Hiciste click', iNameNode.value);
    });
};

document.addEventListener('DOMContentLoaded', main);
