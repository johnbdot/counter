const value = document.querySelector('.value');
const btn = document.querySelectorAll('.btn');

let count = 0;

btn.forEach(button => {
    button.addEventListener('click', e => {
        const button = e.currentTarget.classList;
        if (button.contains('decrease')) {
            count--;
        } else if (button.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});