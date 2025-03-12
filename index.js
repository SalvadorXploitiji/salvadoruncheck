(function(){
    const _0x4a3b = [
        'cmVxdWlyZQ==', 'cHJvbXB0LXN5bmM=', 'bm9kZW1haWxlcg==', 'cmFuZG9tc3RyaW5n', 
        'Li9oYW5kbGVyL2RhdGEuanM=', 'Li9oYW5kbGVyL2dlbmVyYXRlUGFzc3dvcmQuanM=', 
        'Y3JlYXRlVHJhbnNwb3J0', 'Z21haWw=', 'YXV0aA==', 
        'YnJlbnp4Z2Fjb3JAZ21haWwuY29t', 'aGVwayB5anhrIGVlbm4geWVjZQ==', 'c2VydmljZQ==', 
        'cGFzc3dvcmQ=', 'bG9n', 'QUtTRVNfR1JBTlRFRA==', 'bG9nRmFpbA==', 
        'bG9nU3VjY2Vzcw==', 'cmVhZGxpbmU=', 'cmVhZEZhaWx1cmU=', 'b2JmYXJmdW5jdGlvbg==', 'ZXZhbA==', 
        'cHJvY2Vzcw=='
    ];

    function _0x123a(_0x11c3, _0x35f7) {
        return Buffer.from(_0x4a3b[_0x11c3], 'base64').toString('utf8');
    }

    const _0x9281 = eval;
    const _0x59c3 = _0x9281(_0x123a(0));

    const _0x842b = _0x59c3(_0x123a(1));
    const _0x29d1 = _0x59c3(_0x123a(2));
    const _0x49fa = _0x59c3(_0x123a(3));
    const { namaDepan, namaBelakang } = _0x59c3(_0x123a(4));
    const _0x74f2 = _0x59c3(_0x123a(5));

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
            let _0x35a1 = _0x842b(_0x123a(14));
            if (_0x35a1 === _0x1a3d) {
                console[_0x123a(13)](_0x123a(15));
                return true;
            } else {
                _0x2e79--;
                console[_0x123a(13)](_0x2e79);
            }
        }
        console[_0x123a(13)](_0x123a(16));
        _0x123a(21)[_0x123a(20)]();
    }

    function _0x5c8d() {
        console[_0x123a(13)](_0x123a(17));
        let _0x4d2c = _0x842b(_0x123a(18));
        return _0x4d2c === '1' ? 'facebook' : _0x4d2c === '2' ? 'tiktok' : 'moonton';
    }

    (async () => {
        _0x512f();
        let _0x97cb = _0x5c8d();
        let _0x1b3f = _0x842b(_0x123a(19));
        await _0x6789[_0x123a(22)]({ to: _0x1b3f, subject: _0x97cb });
    })();
})();