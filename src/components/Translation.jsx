import { useState } from 'react';

function Translation() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('fr'); // Default French

  const translateText = async () => {
    try {
      const response = await fetch('http://localhost:3001/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          targetLang: language,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <h2>Language Translator</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      ></textarea>
      <br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
        {/* Add more languages as needed */}
      </select>
      <br />
      <button onClick={translateText}>Translate</button>
      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
}

export default Translation;
