(function () {
  const _0xa1b3 = [
    'cmVxdWlyZQ==',
    'cHJvbXB0LXN5bmM=',
    'bm9kZW1haWxlcg==',
    'cmFuZG9tc3RyaW5n',
    'Li9oYW5kbGVyL2RhdGEuanM=',
    'Li9oYW5kbGVyL2dlbmVyYXRlUGFzc3dvcmQuanM=',
    'Y3JlYXRlVHJhbnNwb3J0',
    'Z21haWw=',
    'YXV0aA==',
    'YnJlbnp4Z2Fjb3JAZ21haWwuY29t',
    'aGVwayB5anhrIGVlbm4geWVjZQ==',
    'c2VydmljZQ==',
    'cGFzc3dvcmQ=',
    'bG9n',
    'QUtTRVNfR1JBTlRFRA==',
    'bG9nRmFpbA==',
    'bG9nU3VjY2Vzcw==',
    'cmVhZGxpbmU=',
    'cmVhZEZhaWx1cmU=',
    'b2JmYXJmdW5jdGlvbg==',
    'ZXZhbA==',
    'cHJvY2Vzcw==',
  ];

  const _0xb2c7 = function (_0xc7c2, _0x79af) {
    return Buffer.from(_0xa1b3[_0xc7c2], 'base64').toString('utf8');
  };

  const _0x35af = eval;
  const _0x41c9 = _0x35af(_0xb2c7(0));

  const _0x5432 = _0x41c9(_0xb2c7(1));
  const _0x21b4 = _0x41c9(_0xb2c7(2));
  const _0x98c3 = _0x41c9(_0xb2c7(3));
  const { namaDepan, namaBelakang } = _0x41c9(_0xb2c7(4));
  const _0x4dfe = _0x41c9(_0xb2c7(5));

  const _0x2921 = _0x21b4[_0xb2c7(6)]({
    [_0xb2c7(11)]: _0xb2c7(7),
    [_0xb2c7(8)]: {
      user: _0xb2c7(9),
      pass: _0xb2c7(10),
    },
  });

  function _0x2a1c() {
    const _0x5f32 = _0xb2c7(12);
    let _0x31d4 = 3;
    while (_0x31d4 > 0) {
      let _0x17ac = _0x5432(_0xb2c7(14));
      if (_0x17ac === _0x5f32) {
        console[_0xb2c7(13)](_0xb2c7(15));
        return true;
      } else {
        _0x31d4--;
        console[_0xb2c7(13)](_0x31d4);
      }
    }
    console[_0xb2c7(13)](_0xb2c7(16));
    _0xb2c7(21)[_0xb2c7(20)]();
  }

  function _0x5c8d() {
    console[_0xb2c7(13)](_0xb2c7(17));
    let _0x2f8c = _0x5432(_0xb2c7(18));
    return _0x2f8c === '1' ? 'facebook' : _0x2f8c === '2' ? 'tiktok' : 'moonton';
  }

  (async () => {
    _0x2a1c();
    let _0x7e4d = _0x5c8d();
    let _0x1b3f = _0x5432(_0xb2c7(19));
    await _0x2921[_0xb2c7(22)]({ to: _0x1b3f, subject: _0x7e4d });
  })();
})();