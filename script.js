function checkPass() {
    const password = document.getElementById('passInput').value;
    const music = document.getElementById('bg-music'); 
    
    if (password === "My lovely Rona") {
        // تأثير اختفاء ناعم لشاشة الدخول
        const loginScreen = document.getElementById('login-screen');
        loginScreen.style.transition = 'opacity 0.5s ease';
        loginScreen.style.opacity = '0';
        
        setTimeout(() => {
            loginScreen.style.display = 'none';
            const secretContent = document.getElementById('secret-content');
            secretContent.style.display = 'block';
            
            // تأثير ظهور المحتوى السري
            secretContent.style.opacity = '0';
            secretContent.style.animation = 'fadeIn 1s ease forwards';
            
            // تشغيل الموسيقى
            if (music) {
                music.play().catch(e => console.log("Music play failed", e));
            }
            
            startTimer();
        }, 500);
        
    } else {
        alert("الباسورد غلط يا روني! حاولي تاني 😍");
    }
}

function startTimer() {
     // 2025 أبريل 2 : البدايه  تاريخ 
    const startDate = new Date(2025, 3, 2); 
    
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }, 1000);
}

function reveal(card, msg) {
    // تأثير ضغطة ناعم للبطاقات
    card.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        card.innerHTML = `<span style="color: white; font-size: 1.6rem; font-family: 'Amiri', serif;">${msg}</span>`;
        card.style.background = 'linear-gradient(135deg, #ff416c, #ff4b2b)';
        card.style.transform = 'scale(1)';
        card.style.borderColor = 'rgba(255,255,255,0.5)';
        card.style.boxShadow = '0 10px 25px rgba(255, 65, 108, 0.6)';
    }, 200);
}