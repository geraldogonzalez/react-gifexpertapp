import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas sobre el componente <AddCategory />', () => {
   
    const setCategories = jest.fn();
    const setInputValue = jest.fn()

    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {

        jest.clearAllMocks();

        wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    });

    test('Debe recibir una función como props', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        
        input.simulate('change', { target: { value } } ) 

        expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('NO debe postear la información con submit', () => {
        
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
        // 1. Simular el inputChange. 
        const input = wrapper.find('input');
        
        input.simulate('change', { target: { value: 'Hola' } } )

        // 2. Simular el submit.
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado.

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        
        // 4. El valor del input debe ser igual a un string vacío ('')
        expect( input.prop('value') ).toBe('');

    })
    
    

});
