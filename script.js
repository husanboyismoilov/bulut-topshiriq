// script.js
function convertNumber() {
    const numberInput = document.getElementById('numberInput').value.trim();
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    const resultElement = document.getElementById('result');

    if (conversionType === 'toOctal') {
        // 10-likdan 8-likga konvertatsiya
        const decimalNumber = parseInt(numberInput, 10);

        if (isNaN(decimalNumber)) {
            resultElement.innerText = "Iltimos, to'g'ri 10-lik son kiriting.";
            resultElement.style.color = "#dc3545"; // Qizil rang
            return;
        }

        const octalNumber = decimalNumber.toString(8);
        resultElement.innerText = `${decimalNumber} ning 8-lik sanoq tizimidagi ekvivalenti: ${octalNumber}`;
        resultElement.style.color = "#28a745"; // Yashil rang
    } else if (conversionType === 'toDecimal') {
        // 8-likdan 10-likga konvertatsiya
        // Tekshirish: faqat 0 dan 7 gacha raqamlar kiritinganini
        if (!/^[0-7]+$/.test(numberInput)) {
            resultElement.innerText = "Iltimos, faqat 0 dan 7 gacha raqamlarini kiriting.";
            resultElement.style.color = "#dc3545"; // Qizil rang
            return;
        }

        const decimalNumber = parseInt(numberInput, 8);
        resultElement.innerText = `${numberInput} ning 10-lik sanoq tizimidagi ekvivalenti: ${decimalNumber}`;
        resultElement.style.color = "#28a745"; // Yashil rang
    } else {
        resultElement.innerText = "Noto'g'ri konvertatsiya turi tanlandi.";
        resultElement.style.color = "#dc3545"; // Qizil rang
    }
}
