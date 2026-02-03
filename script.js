 
        const phoneNumber = "9931182115";
        const whatsappNumber = "919931182115";

        function makeCall() {
            window.location.href = `tel:${phoneNumber}`;
        }

        function openWhatsApp() {
            const message = "नमस्ते न्यू सद्दीक़ बैंड, मुझे बुकिंग के बारे में जानकारी चाहिए।";
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        function toggleMenu() {
            const nav = document.querySelector('.nav-menu');
            if (window.innerWidth <= 768) {
                nav.classList.toggle('active');
            }
        }
    