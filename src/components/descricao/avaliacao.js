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

  const handleImgName = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgName(file);
      setImgNamePreview(URL.createObjectURL(file));
    }
  };

  const handleProductImages = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setImages(files);
    setPreviewUrls(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stars) {
      alert('Por favor, selecione uma quantidade de estrelas.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('estrela', stars);
      formData.append('message', message);
      formData.append('idProduct', '1');

      if (imgName) formData.append('imgName', imgName);

      const imageFields = ['imageUm', 'imageDois', 'imageTres', 'imageQuatro'];
      images.forEach((img, i) => {
        formData.append(imageFields[i], img);
      });

      /*const response = await axios.post('http://localhost:3333/comentario', formData);
      console.log('Resposta:', response.data);
      alert('Avaliação enviada com sucesso!');

      // Reset
      setName('');
      setStars('');
      setMessage('');
      setImages([]);
      setPreviewUrls([]);
      setImgName(null);
      setImgNamePreview('');*/

      console.log(imgName instanceof Blob); // true
      console.log(images[0] instanceof Blob); // true
      console.log(images[0]); // true

      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao enviar avaliação.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Deixe sua Avaliação</h2>
      <form onSubmit={handleSubmit}>
        {/* Imagem do usuário */}
        <div style={styles.section}>
          <label>Imagem do Usuário:</label><br />
          <input type="file" accept="image/*" onChange={handleImgName} />
          {imgNamePreview && (
            <img src={imgNamePreview} alt="preview-user" style={styles.userImage} />
          )}
        </div>

        {/* Nome */}
        <div style={styles.section}>
          <label>Nome:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        {/* Estrelas */}
        <div style={styles.section}>
          <label>Estrelas:</label><br />
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              style={{
                ...styles.star,
                color: n <= stars ? 'gold' : 'gray'
              }}
              onClick={() => setStars(n.toString())}
            >
              ★
            </span>
          ))}
        </div>

        {/* Mensagem */}
        <div style={styles.section}>
          <label>Mensagem:</label><br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            style={styles.textarea}
          />
        </div>

        {/* Imagens do produto */}
        <div style={styles.section}>
          <label>Imagens do Produto (máx. 4):</label><br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleProductImages}
            ref={fileInputRef}
          />
          <div style={styles.imageGrid}>
            {previewUrls.map((url, idx) => (
              <img key={idx} src={url} alt={`preview-${idx}`} style={styles.productImage} />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.button}>Enviar Avaliação</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: '0 auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 10
  },
  section: {
    marginBottom: 16
  },
  input: {
    width: '100%',
    padding: 8
  },
  textarea: {
    width: '100%',
    padding: 8
  },
  star: {
    cursor: 'pointer',
    fontSize: 24,
    marginRight: 4
  },
  userImage: {
    marginTop: 10,
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: '50%'
  },
  productImage: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: 8
  },
  imageGrid: {
    marginTop: 10,
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap'
  },
  button: {
    marginTop: 20,
    padding: '10px 20px',
    cursor: 'pointer'
  }
};
