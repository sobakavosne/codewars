// https://aleph1.io/adventure/start/

const LEGION_NUMBER = 12;
const LEGION = ["USER INTERFACE", "LOGIN", "CAESAR", "GRAPHICS"];
const LINK_TO_TROPHY = 'https://aleph1.io/adventure/SECRET_WORD.png';
const PATH_TO_ROME = {
  12: 14,
  13: 15,
  14: 12,
  15: 13,
};


function getEncryptedWordByEmperor(strings) {
  const result = new Array(strings.length);

  strings.forEach((string, index) => {
    result[PATH_TO_ROME[index + LEGION_NUMBER]] = string[0];
  });

  return result.join("");
}

/**
 You need to find out what algorithm was used and the word that was encrypted
 by result of encrypting in encryptedWord variable

 SECRET WORD => ALGORITM => ENCRYPTED WORD
*/

const encryptedWord = getEncryptedWordByEmperor(LEGION);


/**
 After successul word decrypting you need to pass correct decrypted word to getLinkToTrophy function
*/

function getLinkToTrophy(decryptedWord) {
  return LINK_TO_TROPHY.replace("SECRET_WORD", decryptedWord).toLowerCase();
}
