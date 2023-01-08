import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => {
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button type='submit' className={css.Button}>
                    <span className={css.Button_label}>Search</span>
                </button>
                <input
                    className={css.input}
                    type='text'
                    name='input'
                    autoComplete='off'
                    autoFocus={true}
                    placeholder='Search images and photos'
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    handleSubmit: propTypes.func.isRequired
};