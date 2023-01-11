import propTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';



export class Searchbar extends Component {
    state = {
        query: ''
    }
    // ініціалізуємо початковий стан

    onChange = (e) => {
       this.setState({query: e.target.value})
    }
     // прописуємо функцію змінення значення форми (e.target.value-елемент, який ініціював подію)

    
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.query === '') {
            alert('Enter something ')
            return            
        }
        this.props.handleSubmit(this.state.query)
        this.setState({query: ''})        
    }
    //  описуємо функцію для пошука (отримує значення інпута)
    //  прописуємо умову - якщо нічого не введено - то повідомлення (нотіфашка)
    //  якщо є то отримує значення інпуту та чистить форму.
    render() {
        return (
            <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type='submit' className={css.Button}>
                    <span className={css.Button_label}>Search</span>
                </button>
                <input 
                    value={this.state.query}
                    onChange={this.onChange}
                    className={css.input}
                    type='text'
                    name='input'
                    autoComplete='off'
                    autoFocus={true}
                    placeholder='Search images and photos'
                    // атрибут value - присутній у формах (значення те,що ввів юзер)
                    // атрибут onChange - подія яка виникає при зміні значення форми
                    // submit - відправка форми
                />
            </form>
            </header>
        ) 
        }
    

        

    
};

Searchbar.propTypes = {
    handleSubmit: propTypes.func.isRequired    
};