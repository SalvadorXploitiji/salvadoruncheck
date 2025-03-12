const readline = require('readline-sync');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const { namaDepan, namaBelakang } = require('./handler/data.js');
const generateRandomCredentials = require("./handler/generatePassword.js");

// Konfigurasi akun Gmail pengirim
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brenzxgacor@gmail.com', // Ganti dengan email pengirim
        pass: 'hepk yjxk eenn yece'    // App Password Gmail
    }
});

// Fungsi untuk validasi password akses
function validatePassword() {
    const correctPassword = 'salvador123@'; // Ganti dengan password akses
    let attempts = 3;

    while (attempts > 0) {
        let inputPassword = readline.question('Masukkan Password Akses: ', { hideEchoBack: true });
        if (inputPassword === correctPassword) {
            console.log('\n✅ Akses Diberikan!\n');
            return true;
        } else {
            attempts--;
            console.log(`❌ Password Salah! Sisa Percobaan: ${attempts}\n`);
        }
    }

    console.log('🚫 Akses Ditolak!');
    process.exit();
}

// Fungsi untuk memilih jenis ress
function selectRess() {
    console.log("\n📌 Pilih Ress:");
    console.log("1. Ress Uncheck Facebook");
    console.log("2. Ress Uncheck TikTok");
    console.log("3. Ress Uncheck Moonton");

    let choice;
    do {
        choice = readline.question('Masukkan pilihan (1/2/3): ');
        if (!["1", "2", "3"].includes(choice)) {
            console.log("❌ Pilihan tidak valid! Masukkan angka 1, 2, atau 3.");
        }
    } while (!["1", "2", "3"].includes(choice));

    return choice === '1' ? 'facebook' : choice === '2' ? 'tiktok' : 'moonton';
}

// Fungsi untuk mendapatkan nama acak dari data.js
function getRandomName() {
    let firstName = namaDepan[Math.floor(Math.random() * namaDepan.length)];
    let lastName = namaBelakang[Math.floor(Math.random() * namaBelakang.length)];
    return `${firstName} ${lastName}`;
}

// Fungsi untuk mendapatkan email acak berdasarkan nama
function generateEmail(name) {
    let emailProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    let provider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
    let username = name.toLowerCase().replace(/ /g, '') + randomstring.generate({ length: 3, charset: 'numeric' });
    return `${username}@${provider}`;
}

// Fungsi untuk mengirim email
async function sendEmail(targetEmail, totalRess) {
    console.log(`\n📨 Mengirim ${totalRess} ress ke ${targetEmail}...\n`);

    for (let i = 0; i < totalRess; i++) {
        const { email, password } = generateRandomCredentials();

        let htmlContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background-color: #f4f4f4;">
                <center>
                    <h2 style="color: #333;">🔥 Informasi Akun 🔥</h2>
                </center>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr>
                        <td style="background-color: #007bff; color: white; padding: 10px;"><strong>Email</strong></td>
                        <td style="background-color: #e9ecef; padding: 10px;">${email}</td>
                    </tr>
                    <tr>
                        <td style="background-color: #007bff; color: white; padding: 10px;"><strong>Password</strong></td>
                        <td style="background-color: #e9ecef; padding: 10px;">${password}</td>
                    </tr>
                </table>
                <p style="text-align: center; font-size: 12px; color: #555; margin-top: 20px;">
                    © <strong>SalvadorHosting</strong> 2025 - Semua Hak Dilindungi
                </p>
            </div>
        `;

        let mailOptions = {
            from: '"SalvadorHosting || RESS" <brenzxgacor@gmail.com>',
            to: targetEmail,
            subject: "Informasi Akun Anda",
            html: htmlContent
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`✅ Ress ${i + 1} terkirim ke ${targetEmail}`);
        } catch (error) {
            console.error(`❌ Gagal mengirim ress ${i + 1}:`, error.message);
        }
    }

    console.log('\n✅ Semua email berhasil dikirim!');
}

// Eksekusi program
(async () => {
    validatePassword();

    let ressType = selectRess();

    // Validasi input email target
    let targetEmail;
    do {
        targetEmail = readline.question('Masukkan Alamat Gmail Target: ');
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(targetEmail)) {
            console.log("❌ Email tidak valid! Gunakan format yang benar (contoh: example@gmail.com)");
        }
    } while (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(targetEmail));

    // Validasi jumlah ress
    let totalRess;
    do {
        totalRess = parseInt(readline.question('Masukkan Total Ress (Max 200): '));
        if (isNaN(totalRess) || totalRess < 1 || totalRess > 200) {
            console.log("❌ Jumlah ress tidak valid! Harus antara 1 - 200.");
        }
    } while (isNaN(totalRess) || totalRess < 1 || totalRess > 200);

    await sendEmail(targetEmail, totalRess);
})();