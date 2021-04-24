import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = () => {
    
  //   /* const newCategories = [...categories];
  //   setCategories([...newCategories, 'Naruto']); */

  //   // setCategories(['Naruto', ...categories]);

  //   setCategories( cats => [...cats, 'Naruto']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={ setCategories } />

      <ol>
        {

          categories.map(category => (

              <GifGrid 
                key={ category }
                category={ category } 
              />

            )
          )

        }
      </ol>
    </>
  )

}

export default GifExpertApp;
