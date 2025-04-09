import React, { useState } from 'react';

function Base64UrlWithName() {
  const [inputUrl, setInputUrl] = useState('');
  const [encodedUrl, setEncodedUrl] = useState('');
  const [urlName, setUrlName] = useState('');
  
  // Função para gerar um nome para a URL base64
  const generateName = (url) => {
    const timestamp = Date.now(); // Timestamp para garantir unicidade
    const baseName = url.slice(0, 10); // Pega os primeiros 10 caracteres da URL
    return `${baseName}-${timestamp}`;
  };

  // Função para codificar a URL em base64
  const encodeUrl = (url) => {
    try {
      // Gera o nome da URL baseado na URL de entrada
      const name = generateName(url);
      setUrlName(name);

      // Codifica a URL em base64
      const encoded = btoa(url);
      setEncodedUrl(encoded);
    } catch (error) {
      console.error('Erro ao codificar a URL:', error);
    }
  };

  return (
    <div>
      <h1>Codificar URL em Base64 com Nome</h1>
      <div>
        <label>Insira a URL:</label>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={() => encodeUrl(inputUrl)}>Codificar</button>
      </div>
      
      <div>
        {encodedUrl && (
          <>
            <h3>Nome Gerado para a URL:</h3>
            <p>{urlName}</p>
            <h3>URL Codificada em Base64:</h3>
            <p>{encodedUrl}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Base64UrlWithName;
