'use strict';

var expect = require('chai').expect;
var LoggingUtilities = require('../../src/authentication/logging/LoggingUtilities');

describe('LoggingUtilities', function () {

  describe('redact', function () {
    it('returns "***" for null', function () {
      expect(LoggingUtilities.redact(null)).to.equal('***');
    });

    it('returns "***" for undefined', function () {
      expect(LoggingUtilities.redact(undefined)).to.equal('***');
    });

    it('returns "***" for empty string', function () {
      expect(LoggingUtilities.redact('')).to.equal('***');
    });

    it('appends the full value when shorter than tailLen (no slice underflow)', function () {
      expect(LoggingUtilities.redact('ab', 4)).to.equal('***ab');
    });

    it('appends the full value when length equals tailLen', function () {
      expect(LoggingUtilities.redact('abcd', 4)).to.equal('***abcd');
    });

    it('masks all but the last tailLen chars when longer', function () {
      expect(LoggingUtilities.redact('abcdef', 4)).to.equal('***cdef');
    });

    it('defaults to tailLen=4 when not provided', function () {
      expect(LoggingUtilities.redact('abcdefghij')).to.equal('***ghij');
    });

    it('defaults to tailLen=4 for non-number or non-positive tailLen', function () {
      expect(LoggingUtilities.redact('abcdefghij', 0)).to.equal('***ghij');
      expect(LoggingUtilities.redact('abcdefghij', -1)).to.equal('***ghij');
      expect(LoggingUtilities.redact('abcdefghij', 'x')).to.equal('***ghij');
    });

    it('coerces non-string input to string', function () {
      expect(LoggingUtilities.redact(1234567890, 4)).to.equal('***7890');
    });
  });

  describe('redactJwt', function () {
    it('returns "***" for null/undefined/empty', function () {
      expect(LoggingUtilities.redactJwt(null)).to.equal('***');
      expect(LoggingUtilities.redactJwt(undefined)).to.equal('***');
      expect(LoggingUtilities.redactJwt('')).to.equal('***');
    });

    it('masks all but the last 4 chars of a JWT-shaped string', function () {
      var jwt = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0In0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      var out = LoggingUtilities.redactJwt(jwt);
      expect(out.startsWith('***')).to.be.true;
      expect(out.endsWith('sw5c')).to.be.true;
      expect(out).to.not.contain('eyJhbGciOiJIUzI1NiJ9');
    });

    it('returns full short value prefixed with *** when shorter than 4 chars', function () {
      expect(LoggingUtilities.redactJwt('ab')).to.equal('***ab');
    });
  });

  describe('redactSignature', function () {
    it('returns the input unchanged for null/undefined/empty (falsy passthrough)', function () {
      expect(LoggingUtilities.redactSignature(null)).to.equal(null);
      expect(LoggingUtilities.redactSignature(undefined)).to.equal(undefined);
      expect(LoggingUtilities.redactSignature('')).to.equal('');
    });

    it('preserves algorithm and headers; masks opaque values', function () {
      var sig = 'keyid="abcdef12345", algorithm="HmacSHA256", headers="host date digest", signature="VGhpc0lzQVNlY3JldFNpZ25hdHVyZQ=="';
      var out = LoggingUtilities.redactSignature(sig);
      expect(out).to.contain('algorithm="HmacSHA256"');
      expect(out).to.contain('headers="host date digest"');
      expect(out).to.contain('keyid="***2345"');
      expect(out).to.contain('signature="***ZQ=="');
      expect(out).to.not.contain('abcdef12345');
      expect(out).to.not.contain('VGhpc0lzQVNlY3JldFNpZ25hdHVyZQ==');
    });

    it('matches algorithm/headers case-insensitively', function () {
      var sig = 'ALGORITHM="HmacSHA256", Headers="host date"';
      var out = LoggingUtilities.redactSignature(sig);
      expect(out).to.contain('ALGORITHM="HmacSHA256"');
      expect(out).to.contain('Headers="host date"');
    });

    it('handles a short opaque value (length <= tailLen) without underflow', function () {
      var sig = 'keyid="ab", algorithm="HmacSHA256"';
      var out = LoggingUtilities.redactSignature(sig);
      expect(out).to.contain('keyid="***ab"');
      expect(out).to.contain('algorithm="HmacSHA256"');
    });

    it('falls back to full redact when no key="value" pair matches (no plaintext passthrough)', function () {
      var raw = 'this-is-an-unexpected-signature-format-without-quotes';
      var out = LoggingUtilities.redactSignature(raw);
      expect(out.startsWith('***')).to.be.true;
      expect(out).to.not.equal(raw);
      expect(out).to.not.contain('unexpected-signature-format');
      expect(out.endsWith('otes')).to.be.true;
    });
  });
});
