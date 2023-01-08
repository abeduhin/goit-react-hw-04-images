import propTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ handleClick }) => {
    return (
        <button type='button' className={css.Button} onClick={() => handleClick()}>
            Load more
        </button>
    );
};

Button.propTypes = {
    handleClick: propTypes.func.isRequired
};
// Описуємо кнопку Load more, яка буде доповнювати зображення