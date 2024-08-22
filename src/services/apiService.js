import * as deepl from 'deepl-node';

const authKey = "0d964948-56d9-4443-9ee2-0bed49c25abb:fx"; // Ganti dengan kunci API Anda
const translator = new deepl.Translator(authKey);

export const translateText = async (text, targetLang) => {
  if (!text || !targetLang) {
    throw new Error('Text and target language are required');
  }

  try {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};
