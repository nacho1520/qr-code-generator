window.addEventListener('load', () => {
    const mainPage = document.querySelector('.main-container');
    const submitBtn = document.querySelector('#submit-btn');
    const qrPage = document.querySelector('.qr-page');

    const generateQrCode = (url) => {
        const qrCode = new QRCode(document.querySelector('.qr-code'), {
            text: url,
            width: 183.61,
            height: 183.61,
        });
    };

    submitBtn.addEventListener('click', () => {
        mainPage.classList.add('deactive');
        const url = document.querySelector('#form-data').value;
        generateQrCode(url);
        qrPage.classList.add('active');
    });
    
});