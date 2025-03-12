const readline = require('readline-sync');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const cliProgress = require('cli-progress'); // Untuk progress bar
const chalk = require('chalk'); // Untuk warna teks
const { namaDepan, namaBelakang } = require('./handler/data.js');
const generateRandomCredentials = require("./handler/generatePassword.js");

// Bersihkan terminal dan tampilkan banner
console.clear();
console.log(chalk.blueBright.bold("==================================="));
console.log(chalk.greenBright.bold("  Welcome To SalvadorUncheckToolsSender"));
console.log(chalk.blueBright.bold("==================================="));

// Animasi loading awal
function loadingAnimation(message, duration) {
    const frames = ['-', '\\', '|', '/'];
    let i = 0;

    process.stdout.write(chalk.yellowBright(`\n${message} `));

    return new Promise(resolve => {
        const interval = setInterval(() => {
            process.stdout.write(chalk.yellowBright(`\r${message} ${frames[i]}`));
            i = (i + 1) % frames.length;
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            process.stdout.write(chalk.greenBright(" ✅\n"));
            resolve();
        }, duration);
    });
}

// Konfigurasi akun Gmail pengirim
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brenzxgacor@gmail.com', // Ganti dengan email pengirim
        pass: 'hepk yjxk eenn yece'    // App Password Gmail
    }
});

// Fungsi untuk validasi password akses
async function validatePassword() {
    const correctPassword = 'salvador123@'; // Ganti dengan password akses
    let attempts = 3;

    console.log("\n🔐 Autentikasi diperlukan untuk mengakses tools...");

    while (attempts > 0) {
        let inputPassword = readline.question('Masukkan Password Akses: ', { hideEchoBack: true });

        // Tampilkan progress bar saat validasi password
        const bar = new cliProgress.SingleBar({
            format: '🔄 Validating Password [{bar}] {percentage}% | {value}/{total}',
            barCompleteChar: '#',
            barIncompleteChar: '-',
            hideCursor: true
        });

        bar.start(100, 0);
        for (let i = 0; i <= 100; i += 20) {
            await new Promise(resolve => setTimeout(resolve, 300));
            bar.update(i);
        }
        bar.stop();

        if (inputPassword === correctPassword) {
            console.log(chalk.greenBright('\n✅ Akses Diberikan!\n'));
            return true;
        } else {
            attempts--;
            console.log(chalk.redBright(`❌ Password Salah! Sisa Percobaan: ${attempts}\n`));
        }
    }

    console.log(chalk.bgRed.white('🚫 Akses Ditolak!'));
    process.exit();
}

// Fungsi untuk menampilkan list ress dengan kotak ASCII
function selectRess() {
    console.log(chalk.blueBright("\n📌 Pilih Ress yang Tersedia:\n"));
    console.log(chalk.cyan("╔══════════════════════════════╗"));
    console.log(chalk.cyan("║    🛠  Daftar Uncheck RESS   ║"));
    console.log(chalk.cyan("╠══════════════════════════════╣"));
    console.log(chalk.cyan("║ [1] Ress Uncheck Facebook    ║"));
    console.log(chalk.cyan("║ [2] Ress Uncheck TikTok      ║"));
    console.log(chalk.cyan("║ [3] Ress Uncheck Moonton     ║"));
    console.log(chalk.cyan("╚══════════════════════════════╝"));

    let choice;
    do {
        choice = readline.question(chalk.yellow('Masukkan pilihan (1/2/3): '));
        if (!["1", "2", "3"].includes(choice)) {
            console.log(chalk.red("❌ Pilihan tidak valid! Masukkan angka 1, 2, atau 3."));
        }
    } while (!["1", "2", "3"].includes(choice));

    return choice === '1' ? 'Facebook' : choice === '2' ? 'TikTok' : 'Moonton';
}

// Fungsi untuk validasi format email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Eksekusi program
(async () => {
    await loadingAnimation("🔄 Initializing System", 2000);
    await validatePassword();

    let ressType = selectRess();

    let targetEmail;
    do {
        targetEmail = readline.question(chalk.cyan('📩 Masukkan Alamat Email Target: '));
        if (!isValidEmail(targetEmail)) {
            console.log(chalk.red("❌ Format email tidak valid! Masukkan email dengan benar."));
        }
    } while (!isValidEmail(targetEmail));

    let totalRess;
    do {
        totalRess = parseInt(readline.question(chalk.cyan('🔢 Masukkan Total Ress (Max 200): ')));
        if (isNaN(totalRess) || totalRess < 1 || totalRess > 200) {
            console.log(chalk.red("❌ Jumlah ress tidak valid! Masukkan angka antara 1 hingga 200."));
        }
    } while (isNaN(totalRess) || totalRess < 1 || totalRess > 200);

    console.log(chalk.greenBright("\n✅ Semua data telah diterima. Memulai proses..."));
})();