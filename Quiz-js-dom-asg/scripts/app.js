
    const boxNumberInput = document.getElementById('boxNumber');
    const colorInput = document.getElementById('changeColor');
    const changeColorBtn = document.querySelector('.btn-primary:first-child');
    const resetColorBtn = document.querySelector('.btn-primary:last-child');

    //Colors Start
    const validColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'brown', 'grey', 'white', 'black'];
    //Colors End

    changeColorBtn.addEventListener('click', () => {
        const boxNumber = boxNumberInput.value;
        const color = colorInput.value.toLowerCase();
        if (!boxNumber || !color) {
            alert('Please enter both box number and color');
            return;
        }
        const targetBox = document.getElementById(`box${boxNumber}`);
        if (!targetBox) {
            alert('Invalid box number. Choose between 1-10');
            return;
        }
        if (!validColors.includes(color)) {
            alert(`Invalid color. Choose from: ${validColors.join(', ')}`);
            return;
        }
        targetBox.style.backgroundColor = color;
    });

    resetColorBtn.addEventListener('click', () => {
        for (let i = 1; i <= 10; i++) {
            const box = document.getElementById(`box${i}`);
            box.style.backgroundColor = '';
        }
    });
