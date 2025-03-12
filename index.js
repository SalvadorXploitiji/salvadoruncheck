(function () {
    const _0x4a3b = [
        'require', 'prompt-sync', 'nodemailer', 'randomstring',
        './handler/data.js', './handler/generatePassword.js',
        'createTransport', 'gmail', 'auth',
        'brenzxgacor@gmail.com', 'hepk yjxk eenn yec', 'service',
        'password', 'log', 'AKSES_GRANTED', 'logFail',
        'logSuccess', 'readline', 'readFailure', 'obfartfunction', 'eval',
        'process', 'sendMail'
    ];

    function _0x123a(_0x11c3) {
        return _0x4a3b[_0x11c3];
    }

    const _0x59c3 = require; // Menggunakan require langsung tanpa eval
    const _0x842b = _0x59c3(_0x123a(1)); // prompt-sync
    const _0x29d1 = _0x59c3(_0x123a(2)); // nodemailer
    const _0x49fa = _0x59c3(_0x123a(3)); // randomstring
    const { namaDepan, namaBelakang } = _0x59c3(_0x123a(4)); // data.js
    const _0x74f2 = _0x59c3(_0x123a(5)); // generatePassword.js

    const _0x6789 = _0x29d1[_0x123a(6)]({
        [_0x123a(11)]: _0x123a(7),
        [_0x123a(8)]: {
            user: _0x123a(9),
            pass: _0x123a(10),
        },
    });

    function _0x512f() {
        const _0x1a3d = _0x123a(12);
        let _0x2e79 = 3;
        while (_0x2e79 > 0) {
            let _0x35a1 = _0x842b(_0x123a(14))();
            if (_0x35a1 === _0x1a3d) {
                console[_0x123a(13)](_0x123a(15));
                return true;
            } else {
                _0x2e79--;
                console[_0x123a(13)](_0x2e79);
            }
        }
        console[_0x123a(13)](_0x123a(16));
        process.exit(); // Menghentikan eksekusi program
    }

    function _0x5c8d() {
        console[_0x123a(13)](_0x123a(17));
        let _0x4d2c = _0x842b(_0x123a(18))();
        return _0x4d2c === '1' ? 'facebook' : _0x4d2c === '2' ? 'tiktok' : 'moonton';
    }

    (async () => {
        _0x512f();
        let _0x97cb = _0x5c8d();
        let _0x1b3f = _0x842b(_0x123a(19))();
        await _0x6789[_0x123a(22)]({ to: _0x1b3f, subject: _0x97cb });
    })();
})();