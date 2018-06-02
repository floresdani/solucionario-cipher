describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33),'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "12345" para "12345" con offset 3', () => {
      assert.equal(cipher.encode('12345', 3),'12345');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33),'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "12345" para "12345" con offset 3', () => {
      assert.equal(cipher.decode('12345', 3),'12345');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto', () => {
      assert.equal(typeof cipher.createCipherWithOffset(3), 'object');
    });
  
    describe('encode', () => {
      it('debería retornar "defg" para "abcd" cuando offset sea 3', () => {
        assert.equal((cipher.createCipherWithOffset(3)).encode("abcd"), "defg");
      });
      
      it('debería retornar "DEFG" para "ABCD" cuando offset sea 3', () => {
        assert.equal((cipher.createCipherWithOffset(3)).encode("ABCD"), "DEFG");
      });      
    })

    describe('decode', () => {
      it('debería retornar "abcd" para "defg" cuando offset sea 3', () => {
        assert.equal((cipher.createCipherWithOffset(3)).decode("defg"), "abcd");
      });
  
      it('debería retornar "ABCD" para "DEFG" cuando offset sea 3', () => {
        assert.equal((cipher.createCipherWithOffset(3)).decode("DEFG"), "ABCD");
      });
    })

  });
});