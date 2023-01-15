import propTypes from 'prop-types';
// import { Component } from 'react';
import css from './Searchbar.module.css';
import React, { useState } from 'react';

export const Searchbar = ({ handleSubmit }) => {
    const [query, setQuery] = useState('');
    


// export class Searchbar extends Component {
//     state = {
//         query: ''
//     }
    // ініціалізуємо початковий стан
    const onChange = (e) => {
        setQuery(e.target.value)
        
    }
    // console.log(onChange);
    // onChange = (e) => {
    //    this.setState({query: e.target.value})
    // }
     // прописуємо функцію змінення значення форми (e.target.value-елемент, який ініціював подію)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (query === '') {
            alert('Enter something ')
            return            
        }
        handleSubmit(query)
        setQuery('')  
        
    }
    
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (this.state.query === '') {
    //         alert('Enter something ')
    //         return            
    //     }
    //     this.props.handleSubmit(this.state.query)
    //     this.setState({query: ''})        
    // }
    //  описуємо функцію для пошука (отримує значення інпута)
    //  прописуємо умову - якщо нічого не введено - то повідомлення (нотіфашка)
    //  якщо є то отримує значення інпуту та чистить форму.
    // render() {
        return (
            <header className={css.Searchbar}>
             <form className={css.SearchForm} onSubmit={handleSubmitForm}>   
            {/* <form className={css.SearchForm} onSubmit={this.handleSubmit}> */}
                <button type='submit' className={css.Button}>
                    <span className={css.Button_label}>Search</span>
                </button>
                    <input 
                        
                    value={query}
                    // value={this.state.query}
                    onChange={onChange}
                    // onChange={this.onChange}
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
    

        

    
// };

Searchbar.propTypes = {
    handleSubmit: propTypes.func.isRequired    
};