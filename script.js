// script.js
function convertNumber() {
    const numberInput = document.getElementById('numberInput').value.trim();
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    const resultElement = document.getElementById('result');

    if (conversionType === 'toHex') {
        // 10-likdan 16-likga konvertatsiya
        const decimalNumber = parseInt(numberInput, 10);

        if (isNaN(decimalNumber)) {
            resultElement.innerText = "Iltimos, to'g'ri 10-lik son kiriting.";
            resultElement.style.color = "#dc3545"; // Qizil rang
            return;
        }

        const hexNumber = decimalNumber.toString(16).toUpperCase();
        resultElement.innerText = `${decimalNumber} ning 16-lik sanoq tizimidagi ekvivalenti: ${hexNumber}`;
        resultElement.style.color = "#28a745"; // Yashil rang
    } else if (conversionType === 'toDecimal') {
        // 16-likdan 10-likga konvertatsiya
        // Tekshirish: faqat 0-9 va A-F / a-f raqamlar va harflar kiritinganini
        if (!/^[0-9A-Fa-f]+$/.test(numberInput)) {
            resultElement.innerText = "Iltimos, faqat 0 dan 9 gacha raqamlar va A-F harflarini kiriting.";
            resultElement.style.color = "#dc3545"; // Qizil rang
            return;
        }

        const decimalNumber = parseInt(numberInput, 16);
        if (isNaN(decimalNumber)) {
            resultElement.innerText = "Noto'g'ri 16-lik son kiriting.";
            resultElement.style.color = "#dc3545"; // Qizil rang
            return;
        }

        resultElement.innerText = `${numberInput.toUpperCase()} ning 10-lik sanoq tizimidagi ekvivalenti: ${decimalNumber}`;
        resultElement.style.color = "#28a745"; // Yashil rang
    } else {
        resultElement.innerText = "Noto'g'ri konvertatsiya turi tanlandi.";
        resultElement.style.color = "#dc3545"; // Qizil rang
    }
}
