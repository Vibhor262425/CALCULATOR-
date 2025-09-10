const input = document.getElementById('expression');
const resultSpan = document.getElementById('result');

function appendValue(val) {
    input.value += val;
    calculate();
}

function clearInput() {
    input.value = '';
    resultSpan.textContent = '0';
}

function calculate() {
    try {
        let expression = input.value.replace('√', 'Math.sqrt').replace('^', '**');
        if(expression) {
            let res = eval(expression);
            resultSpan.textContent = res;
        } else {
            resultSpan.textContent = '0';
        }
    } catch {
        resultSpan.textContent = 'Error';
    }
}

input.addEventListener('input', calculate);
