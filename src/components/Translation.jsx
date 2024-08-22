import { useState } from 'react';
// import './Translation.css'; // Pastikan import CSS jika menggunakan file CSS terpisah

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
    <div className='container'>
      <div className="card">
        <h2 className='header'>Turbo Translate</h2>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
        ></textarea>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
        <option value="zh">Chinese (Simplified)</option>
        <option value="ru">Russian</option>
        <option value="pt">Portuguese</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="pl">Polish</option>
        <option value="tr">Turkish</option>
        <option value="ar">Arabic</option>
        <option value="ko">Korean</option>
        <option value="sv">Swedish</option>
        <option value="da">Danish</option>
        <option value="no">Norwegian</option>
        <option value="fi">Finnish</option>
        <option value="cs">Czech</option>
        <option value="hu">Hungarian</option>
        <option value="ro">Romanian</option>
        <option value="bg">Bulgarian</option>
        <option value="el">Greek</option>
        <option value="he">Hebrew</option>
        <option value="id">Indonesia</option>
          
        </select>
        <button onClick={translateText}>Translate</button>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default Translation;
