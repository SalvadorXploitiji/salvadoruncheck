const randomstring = require("randomstring");
const { namaDepan, namaBelakang } = require("./data");

function generateRandomCredentials() {
    // Pilih nama acak dari data.js
    let firstName = namaDepan[Math.floor(Math.random() * namaDepan.length)];
    let lastName = namaBelakang[Math.floor(Math.random() * namaBelakang.length)];

    // Format email yang lebih realistis
    const emailProviders = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com"];
    let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomstring.generate({ length: 2, charset: 'numeric' })}@${emailProviders[Math.floor(Math.random() * emailProviders.length)]}`;

    // Format password dengan kombinasi angka dan karakter spesial
    const passwordFormats = [
        `${firstName.toLowerCase()}${randomstring.generate({ length: 4, charset: 'numeric' })}`,
        `${lastName}${randomstring.generate({ length: 3, charset: 'alphanumeric' })}`,
        `${firstName}_${randomstring.generate({ length: 2, charset: 'numeric' })}!`,
        `${lastName}@${randomstring.generate({ length: 4, charset: 'numeric' })}`
    ];
    let password = passwordFormats[Math.floor(Math.random() * passwordFormats.length)];

    return { email, password };
}

module.exports = generateRandomCredentials;