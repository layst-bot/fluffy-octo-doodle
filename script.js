function celebrate() {
  // Mengecek apakah library confetti sudah ter-load dengan benar
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#c9a050', '#ffffff', '#ffd700']
    });
  } else {
    console.error("Library confetti belum ter-load!");
  }
}