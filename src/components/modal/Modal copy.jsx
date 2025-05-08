/* eslint-disable no-use-before-define */
/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { CFontainerImageProduct, ConatinerModal } from './modal';
import api from '../../api/api';
import { toast } from 'react-toastify';

export const Modal = () => {

  let url = window.location.pathname;
  let parts = url.split("/");
  let localId = parts.pop() || parts.pop();

  //const localId = localStorage.getItem("id")

  const [images, setImages] = useState("");
  const [imagesLista1, setLista1] = useState("");
  const [imageUm, setImageUm] = useState("")
  //const [imageDois, setImageDois] = useState("")
  const [name, setName] = useState("");
  const [estrela, setEstrela] = useState("");
  const [message, setMessage] = useState("");
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    
    setImages(imageList);
  };

  const onChange0 = (imageList, addUpdateIndex) => {
    // data for submit
  
    setImageUm(imageList[0].data_url);
    
    setLista1(imageList);

    //console.log(imageList)
  };

  const onChange4 = (e) => {
    // data for submit
    
    setName(e);
  };
  const onChange5 = (e) => {
    // data for submit
    
    setEstrela(e);
  };
  const onChange6 = (e) => {
    // data for submit
    
    setMessage(e);
  };

  /*const dataList = {
    imgName: images,
    name: name,
    estrela: estrela,
    message: message,
    idProduct: localId
  }*/

  const listmap = imagesLista1 ? imagesLista1.map((res) => res.data_url) : ""

  const handleProcess = async (e) => {

    e.preventDefault()

    if(imageUm){

      const dataListPronto = {
        image: listmap,
        ts: listmap,
        imgName: images[0].data_url,
        name: name,
        estrela: estrela,
        message: message,
        idProduct: localId
      }

      console.log(dataListPronto)
    
      /*await api.post("/comentario", dataListPronto).then((response) => {

      try {
        setTimeout(() => {
        }, 10000)
 
       toast.success(`Obrigado por da sua opinião!`)
 
         const dataRelations2 = {
           id_comentario: `${response.data.comentario.id}`,
           id_product: `${localId}`
         }
     
         api.post("/comentariorelation", dataRelations2).then((catego) => {
           toast.success(`O relacionamento foi feito!`)
         })
        } catch (error) {
          throw error
          //console.log(error.response.data)
        }
      })*/
    }
  }

  return (
    <ConatinerModal>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <h5>Sua Imagem</h5>
          <li className='liImageName'>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div>
                {imageList == "" ?
                <>
                   <button
                      style={{marginLeft: "-10px", border: "none"}}
                      className='btn-outline-warning btn-block'
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                    <div>
                      <ImCloudUpload style={{width: 210, height: 80, cursor: "pointer", margin: "auto", display: "flex"}}/>
                    </div>
                    </button>
                    &nbsp;
                </>
                : 
               
                imageList.map((image, index) => (
                  <div style={{display: "inline-block", margin: 5}}>
                    <div key={index} >
                    <button style={
                      {width: 30, fontSize: 15, fontWeight: "bold", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px", margin: "auto", background: "#F62D2D", border: "none", padding: "5px", borderRadius: "6px"}
                      } onClick={() => onImageRemove(index)}>
                      X
                    </button>
                      <img src={image['data_url']} alt="" width="200" height="200" style={
                        {borderRadius: "100px", border: "solid 1px", padding: "10px", margin: "5px"}
                      }/>
                    </div>
                    
                    <div>
                  </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
            </li>
            <li>
              {' '}
              <input type="text" placeholder='Seu nome' name='name' onChange={(e) => onChange4(e.target.value)} />
            </li>
            <li>
              <input type="text" placeholder='quantas estrelas' name='estrela' onChange={(e) => onChange5(e.target.value)} />
            </li>
            <li>
              <textarea type="text" maxlength="200" placeholder='Sua message' name='message' onChange={(e) => onChange6(e.target.value)} />
            </li>
          </ul>
          <CFontainerImageProduct>
          <div className='imageName'>
          <h5>Imagem do produto</h5>
          <ImageUploading
          multiple
          onChange={onChange0}
          value={imagesLista1}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
             
              {imageList.map((image, index) => (
                <div key={index} className="image-item" style={{display: "inline-block", margin: 1, marginTop: 5}}>
                  <img src={image['data_url']} alt="" width="70" height="70"/>
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}><GrUpdate style={{width: 30, color: "red",}}/></button>
                    <button onClick={() => onImageRemove(index)}><RiDeleteBin6Line style={{width: 30, color: "red",}}/></button>
                  </div>
                </div>
              ))}
              <br />
              <br />
               <button
                style={{border: "none", borderRadius: 8, color: "aqua", backgroundColor: "#716b6bf", display: "inline-blocks", margin: 5, padding: 5, backgroundColor: "gray"}}
                onClick={onImageUpload}
                {...dragProps}
              >
                Add Image
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll} style={{border: "none", borderRadius: 8, color: "aqua", backgroundColor: "#fffff", display: "inline-blocks", margin: 5, padding: 5, backgroundColor: "gray"}}>Remove Tudo</button>
            </div>
          )}
        </ImageUploading>
          </div>
          
        </CFontainerImageProduct>
      </div>
      <button type="submit" className='btn btn-info btn-block' onClick={handleProcess}>Enviar</button>
    </ConatinerModal>
  );
};
