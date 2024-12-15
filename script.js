// script.js
function convertNumber() {
    const numberInput = document.getElementById('numberInput').value.trim();
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    const resultElement = document.getElementById('result');

    if (conversionType === 'toBinary') {
        // 10-likdan 2 likga konvertatsiya
        const decimalNumber = parseInt(numberInput, 10);

        if (isNaN(decimalNumber)) {
            resultElement.innerText = "Iltimos, to'g'ri 10-lik son kiriting.";
            return;
        }

        const binaryNumber = decimalNumber.toString(2);
        resultElement.innerText = `${decimalNumber} ning 2 lik sanoq tizimidagi ekvivalenti: ${binaryNumber}`;
    } else if (conversionType === 'toDecimal') {
        // 2 likdan 10 likga konvertatsiya
        // Tekshirish: faqat 0 va 1 lar kiritinganini
        if (!/^[01]+$/.test(numberInput)) {
            resultElement.innerText = "Iltimos, faqat 0 va 1 raqamlarini kiriting.";
            return;
        }

        const decimalNumber = parseInt(numberInput, 2);
        resultElement.innerText = `${numberInput} ning 10 lik sanoq tizimidagi ekvivalenti: ${decimalNumber}`;
    } else {
        resultElement.innerText = "Noto'g'ri konvertatsiya turi tanlandi.";
    }
}
