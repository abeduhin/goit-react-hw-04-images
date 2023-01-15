import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../ApiRequest/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

// прописуємо початковий стан, де largeImage - велике зображення, isLoading - індикатор загрузки, isModalOpen - індикатор модального вікна. 

  
  export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleSubmit = query => {
  setImages([]);
  setSearch(query);
  setPage(1);    
   
  };
  // описуємо функцію для пошука в (Submit) (змінює стан, в параметри передаємо (пустий масив, те, що ввів юзер та початковий номер сторінки) )
  
  const handleEnlargeImage = id => {
  const element = images.filter(image => {
      return image.id === id;
    });
    const click = element[0];
    setIsModalOpen(true);
    setLargeImage(click);
    };

  //  описуємо функцію для великого зображення модального вікна 

    const loadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1 );    
  };

  //  описуємо функцію для додавання зображень (кнопка loadMore)  
    
  const closeModal = () => {
  setIsModalOpen(false);
  };
  // описуємо функцію закриття модального вікна 
  

  
    useEffect(() => {
      if(!search) {
      return
      }
      const fetchMore = async () => {
        setIsLoading(true);
        try {
          const fetch = await fetchImg(search, page);
          console.log(fetch)
          setImages(( prevImages ) => ([...prevImages, ...fetch.hits] ));
  
    
        } catch (error) {
          console.log('Error loading');
        } finally {
          setIsLoading(false);
        };
      };
      fetchMore();
      
      }, [page, search]);
    

  useEffect(() => {
    document.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        closeModal();
      };
    })
  }, []);


    // якщо змінюється сторінка або повідомлення пошуку то запускаємо загрузку
  // робимо HTTP-запит з 2 параметрами (повідомлення для пошуку, номер сторінки, )
  // добавляємо зображення
  // оброблюємо подію - кнопка Escape закриває модальне вікно
  
  useEffect(() => {
    document.removeEventListener('keyup', e => {
      if (e.key === 'Escape') {
        closeModal();
      };
    });
  }, []);
   // описуємо життєвий цикл componentWillUnmount (розмонтування)
  //  видаляємо обробчика події
  

   return (
      <div className={css.wrapper}>
        {isModalOpen ? (
          <Modal clickImage={largeImage}  />
        ) : null}
        <Searchbar handleSubmit={handleSubmit} />
        {isLoading && (page <= 1) ? <Loader /> : null}
        <ImageGallery>
          <ImageGalleryItem 
            images={images}
            onClick={handleEnlargeImage}
            loading={isLoading}
          />
        </ImageGallery>
        {isLoading && (page > 2) ? <Loader /> : null}
        {images.length === 0 ? null : (
         <Button handleClick={loadMore} />
        )}
      </div>
    );
  };

// описуємо розмітку сторінки