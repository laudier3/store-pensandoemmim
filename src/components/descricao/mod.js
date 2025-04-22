import React, { useState, useRef } from 'react';
import axios from 'axios';

export function ProductReviewForm() {
  const [name, setName] = useState('');
  const [stars, setStars] = useState('');
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [imgName, setImgName] = useState(null);
  const [imgNamePreview, setImgNamePreview] = useState('');
  const fileInputRef = useRef(null);

  const handleProductImages = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // no máximo 4
    setImages(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  const handleImgName = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgName(file);
      setImgNamePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (stars === 0) {
      alert('Por favor, selecione uma quantidade de estrelas.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('estrela', stars.toString());
      formData.append('message', message);
      formData.append('idProduct', '1');

      if (imgName) {
        formData.append('imgName', imgName); // Agora enviamos a imagem real
      }

      const campos = ['imageUm', 'imageDois', 'imageTres', 'imageQuatro'];
      images.forEach((img, i) => {
        formData.append(campos[i], img);
      });

      const payload = {
        name: name,
        imgName: imgName,
        estrela: stars,
        message: message,        
        idProduct: "1",
        imageUm: images[0].name,
        imageDois: images[1].name,
        imageTres: images[2].name,
        imageQuatro: images[3].name 
      }

      console.log(images[0].name)

      const res = await axios.post('http://localhost:3333/comentario', formData);
      console.log('Resposta:', res.data);
      alert('Avaliação enviada com sucesso!');

      // Reset
      setName('');
      setStars(0);
      setMessage('');
      setImages([]);
      setPreviewUrls([]);
      setImgName(null);
      setImgNamePreview('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      console.error('Erro ao enviar avaliação:', err);
      alert('Erro ao enviar avaliação.');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2>Deixe sua Avaliação</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imagem do Usuário (imgName):</label><br />
          <input type="file" accept="image/*" onChange={handleImgName} />
          {imgNamePreview && (
            <img
              src={imgNamePreview}
              alt="preview-user"
              style={{ marginTop: 10, width: 80, height: 80, objectFit: 'cover', borderRadius: '50%' }}
            />
          )}
        </div>

        <div>
          <label>Nome:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%' }} />
        </div>

        <div>
          <label>Estrelas:</label><br />
          {['1', '2', '3', '4', '5'].map((n) => (
            <span
              key={n}
              style={{ cursor: 'pointer', color: n <= stars ? 'gold' : 'gray', fontSize: 24 }}
              onClick={() => setStars(n)}
            >
              ★
            </span>
          ))}
        </div>

        <div>
          <label>Mensagem:</label><br />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 20 }}>
          <label>Imagens do Produto (máx. 4):</label><br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleProductImages}
            ref={fileInputRef}
          />
          <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {previewUrls.map((url, idx) => (
              <img key={idx} src={url} alt={`preview-${idx}`} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
            ))}
          </div>
        </div>

        <button type="submit" style={{ marginTop: 20, padding: '10px 20px' }}>Enviar Avaliação</button>
      </form>
    </div>
  );
}


//name"
//imgName"
//image"	
//message"
//estrela"
//idProduct"