// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../ApiRequest/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

// const INITIAL_STATE = {
//   images: [],
//   search: '',
//   page: 1,
//   largeImage: '',
//   isLoading: false,
//   isModalOpen: false,
//   error: null,
// };

// прописуємо початковий стан, де largeImage - велике зображення, isLoading - індикатор загрузки, isModalOpen - індикатор модального вікна. 

// export class App extends Component {
//   state = { ...INITIAL_STATE };
  
  export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [error, setError] = useState(null);

  //  handleSubmit = query => {
    
  //   this.setState({ images: [], search: query, page: 1 });
    
  // };

  const handleSubmit = query => {
  setImages([]);
  setSearch(query);
  setPage(1);    
   
  };
  // описуємо функцію для пошука в (Submit) (змінює стан, в параметри передаємо (пустий масив, те, що ввів юзер та початковий номер сторінки) )
  
  // handleEnlargeImage = id => {
  //   const element = this.state.images.filter(image => {
  //     return image.id === id;
  //   });
  //   const click = element[0];
  //   this.setState({ isModalOpen: true, largeImage: click });
  // };

  const handleEnlargeImage = id => {
  const element = images.filter(image => {
      return image.id === id;
    });
    const click = element[0];
    setIsModalOpen(true);
    setLargeImage(click);
    };

  //  описуємо функцію для великого зображення модального вікна 

  // loadMore = () => {
  //   this.setState({ isLoading: true });
  //   this.setState(({ page }) => ({ page: page + 1 }));
    
  // };

  const loadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1 );    
  };

  //  описуємо функцію для додавання зображень (кнопка loadMore)  
    
  // closeModal = () => {
  // this.setState({ isModalOpen: false });
  // };

  const closeModal = () => {
  setIsModalOpen(false);
  };
  // описуємо функцію закриття модального вікна 
  

  // async componentDidUpdate(_, prevState) {
  //   if (prevState.page !== this.state.page || prevState.search !== this.state.search) {
  //     this.setState({ isLoading: true });
  //     try {
  //       const fetch = await fetchImg(this.state.search, this.state.page, 12);
  //       this.setState(({ images }) => ({ images: [...images, ...fetch.hits] }));
  //       document.addEventListener('keyup', e => {
  //         if (e.key === 'Escape') {
  //           this.closeModal();
  //         };
  //       });
  //     } catch (error) {
  //       console.log('Error loading');
  //     } finally {
  //         this.setState({ isLoading: false });
  //     };
  //   };
  // };
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


  // описуємо життєвий цикл componentDidUpdate (оновлення)
  // якщо змінюється сторінка або повідомлення пошуку то запускаємо загрузку
  // робимо HTTP-запит з 3 параметрами (повідомлення для пошуку, номер сторінки, кількість зображень на сторінці)
  // добавляємо зображення
  // оброблюємо подію - кнопка Escape закриває модальне вікно
  
  // componentWillUnmount() {
  //   document.removeEventListener('keyup', e => {
  //     if (e.key === 'Escape') {
  //       this.closeModal();
  //     };
  //   });
  // };

  useEffect(() => {
    document.removeEventListener('keyup', e => {
      if (e.key === 'Escape') {
        closeModal();
      };
    });
  }, []);
   // описуємо життєвий цикл componentWillUnmount (розмонтування)
  //  видаляємо обробчика події
  

  // render() {
  //   const { images, page, largeImage, isModalOpen, isLoading } = this.state;

    return (
      <div className={css.wrapper}>
        {isModalOpen ? (
          <Modal clickImage={largeImage}  />
        ) : null}
        {/* <Searchbar handleSubmit={this.handleSubmit} /> */}
        <Searchbar handleSubmit={handleSubmit} />
        {isLoading && (page <= 1) ? <Loader /> : null}
        <ImageGallery>
          <ImageGalleryItem 
            images={images}
            // onClick={this.handleEnlargeImage}
            onClick={handleEnlargeImage}
            loading={isLoading}
          />
        </ImageGallery>
        {isLoading && (page > 2) ? <Loader /> : null}
        {images.length === 0 ? null : (
          // <Button handleClick={this.loadMore} />
          <Button handleClick={loadMore} />
        )}
      </div>
    );
  };
// };
// описуємо розмітку сторінки