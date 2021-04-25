import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas sobre <GifGridItem />', () => {

    const title = 'Un título cualquiera';
    const url = 'https://una+URL+cualquiera';
    const wrapper = shallow( 
        <GifGridItem 
            title={ title }
            url={ url }
        /> 
    );
    
    test('Debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe mostrar el texto en el párrafo correctamente.', () => {
        
        const p = wrapper.find('p').text();

        expect( p.trim() ).toBe( title );

    });
    
    test('Debe mostrar los atributos de la imagen correctamente.', () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });
    
    test('Debe mostrar la clase "animate__fadeIn".', () => {
        
        const div = wrapper.find('div');
        expect( div.prop('className') ).toContain('animate__fadeIn')

        // const { className } = div.props();
        // expect( className.includes('animate__fadeIn') ).toBe(true)

    });


    

})
