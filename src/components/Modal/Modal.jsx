import propTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ clickImage }) => {
    return (
        <div  className={css.Overlay}>
            <div className={css.Modal}>
                <img src={clickImage.largeImageURL} alt={clickImage.tags} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    clickImage: propTypes.object.isRequired,
    
};

// Описуємо модальне вікно, яке з'являється при натисканні на зображення з галереії -велике зображення (largeImageURL)