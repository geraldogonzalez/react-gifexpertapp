import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid />', () => {

    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category="Dragon Ball" /> );

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('Debe mostrar items cuando se cargan las imágenes luego de la llamada de useFetchGifs', () => {
        
        const gifs = [{
            id: 0,
            url: 'https://imagen.jpg',
            title: 'Imagen'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category="Dragon Ball" /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
    

})
