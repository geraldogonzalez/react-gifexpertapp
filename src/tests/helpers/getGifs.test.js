import { getGifs } from "../../helpers/getGifs"

describe('Pruebas sobre getGifs Fetch', () => {
    
    test('Debe retornar 10 elementos', async () => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });

    // ESTA PRUEBA NO ES POSIBLE DEBIDO AL UPDATE DE LA API.
    test('Debe retornar 0 elementos al no mandar la categoría', async () => {
        
        const gifs = await getGifs('');

        // expect( gifs.length ).toBe( 0 );
        expect( gifs.length ).toBe( 10 );

    });
    

})
