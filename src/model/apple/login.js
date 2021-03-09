import path from './path.js';
import JSEncrypt from 'jsencrypt';
import http from '../http';

let priKey = `-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALSruT+f3JiHiuW3
oHnmG7rrG0EINFEiM3Ulz1IpKvfOexiwW6pKvjmhjchaLYRcyvSJRpj0PmYwA4rq
XYDqJh8UHV1XO/AdVLlLIct5UhtCKKV2OwDLGjBl/6BvTxDUnhOCnbz1FiYV9fb3
rQ9mf9PxP8HRR0CezIU5Jri7+4whAgMBAAECgYBQfKAOZB1WJiwOontvUr/PyaVe
l1UXP/FEow91PrnRo77bBNYRSzLrYblUJDha2yvfPLiis0yJIaKyZC47nBRWzFt3
KATGk0b6CTWBN5vFIqI2RC7Cmae+oLoCZhCKK1di6jmJT0kIEtZjJ5aF8nfRExzD
KkKSAzzUSgz9ft8MQQJBANA/lglP2dlsEmiXFjsTHslgDpJIN4xtb3YyWpjNIurp
aTnCebJK0OH4ZcVyeEmpanoHvZNSL/Y1e1DnQOdW3S0CQQDeGU1b6sQ6deFrrrT8
5VUUuaPqrGeY3N8qcFYTgmIcnla50tlnCh6hU9R8Cx9mFxdVW2Kz9rYMYjjzSOgi
9QtFAkBYj+Ifvay40UQW5MIYh24dV9N6lGnDN7siOhHbT8ocuvz8Cl+02ipxHzEw
whizwu+8S9RsdZReEaqK4n3wpDlVAkEAhDDtIVtfRihpbi1DHg7lj/taO9A3rP0x
etH3+Y6uFLiNh/aeXTzhtEXv/5CjNKFjyvMkkVazTjWcDfmD6WKOPQJAIWwjGba5
0ZQHJVNLQ5ZRjQr4GHo3VBDDPn6KEsbtA5KB/zUbVhZZjB2dymSKJbzDEVnvcY7u
H6tHVmBaMyOo+Q==
-----END PRIVATE KEY-----`;//rsa 公钥

let pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0q7k/n9yYh4rlt6B55hu66xtB
CDRRIjN1Jc9SKSr3znsYsFuqSr45oY3IWi2EXMr0iUaY9D5mMAOK6l2A6iYfFB1d
VzvwHVS5SyHLeVIbQiildjsAyxowZf+gb08Q1J4Tgp289RYmFfX2960PZn/T8T/B
0UdAnsyFOSa4u/uMIQIDAQAB
-----END PUBLIC KEY-----`

// eslint-disable-next-line no-unused-vars
function login(user_id, password) {
  let encryptStr = new JSEncrypt();
  encryptStr.setPublicKey(pubKey); // 设置 加密公钥
  encryptStr.setPrivateKey(priKey)

  let data = encryptStr.encrypt(password);  // 进行加密
  console.log("encrypt: " + data);
  let dec = encryptStr.decrypt(data.toString())
  console.log("decrypt: " + dec);

  return http.post(path.login, {id: user_id, password: data}).then(response=>{
    this.$store.commit("setToken", response.data)
  })
}

function logout() {
  return http.post(path.logout, {})
}

export {login, logout}
