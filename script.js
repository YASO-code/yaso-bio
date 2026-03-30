function startBio() {
    document.getElementById('overlay').style.display = 'none';
    const bgVideo = document.getElementById('bg-video');
    const miniVideo = document.getElementById('mini-video');
    const content = document.getElementById('main-content');
    
    bgVideo.style.display = 'block';
    content.style.display = 'flex';
    
    bgVideo.play();
    miniVideo.play();

    // MÜZİK ÇALAR SİMÜLASYONU
    const progressBar = document.getElementById('progress-bar');
    const currentTimeText = document.getElementById('current-time');
    let time = 0;
    const duration = 187; // 3:07 saniye

    setInterval(() => {
        if (time < duration) {
            time++;
            let mins = Math.floor(time / 60);
            let secs = time % 60;
            currentTimeText.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            progressBar.style.width = `${(time / duration) * 100}%`;
        }
    }, 1000);
}

function resetMusic() {
    // Sadece görsellik için reset fonksiyonu
    location.reload();
}