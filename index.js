window.addEventListener('load', () => {
    const mainPage = document.querySelector('.main-container');
    const submitBtn = document.querySelector('#submit-btn');
    const qrPage = document.querySelector('.qr-page');
    const downloadBtn = document.querySelector('#download-btn');
    const shareBtn = document.querySelector('#share-btn');
    const searchBar = document.querySelector('.search-bar');
    const warning = document.querySelector('.warning');

    const generateQrCode = (url) => {
        const qrCode = new QRCode(document.querySelector('.qr-code'), {
            text: url,
            width: 183.61,
            height: 183.61,
        });
    };

    submitBtn.addEventListener('click', () => { 
        const url = document.querySelector('#form-data').value;
        if(!url) {
            warning.classList.add('active');
            searchBar.classList.add('warn');
        }
        else {
            mainPage.classList.add('deactive');
            generateQrCode(url);
            qrPage.classList.add('active');
        }
    });

    downloadBtn.addEventListener('click', () => {
        const qrImage = document.querySelector('.qr-img');
        html2canvas(qrImage).then((canvas) => {
            const base64Image = canvas.toDataURL("image/png");
            var anchor = document.createElement('a');
            anchor.setAttribute("href", base64Image);
            anchor.setAttribute("download", "qr-code.png");
            anchor.click();
            anchor.remove();
        });
    });

    shareBtn.addEventListener('click', () => {
        const qrImage = document.querySelector('.qr-img');
        html2canvas(qrImage).then((canvas) => 
            canvas.toBlob(blob => 
                navigator.clipboard.write([
                    new ClipboardItem({'image/png': blob})
                ])
            )
        );
    });

    document.querySelector('#form-data').addEventListener("focus", () => {
        console.log('hola');
        searchBar.classList.remove('warn');
        warning.classList.remove('active');
    });
    
});