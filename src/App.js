import logo from './logo.svg';
import './App.css';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList, useNumericMenu, RangeInput, ClearRefinements  } from 'react-instantsearch-hooks-web';
import NumericMenu from './components/NumericMenu';

const searchClient = algoliasearch('73H6JBTN0G', '76d9ea7bd8fb3db6a774ad916f30f540');

function Hit({ hit }) {
  return (
    <article>
      <div className="image-container">
        <img src={hit.thumbnail} className="image" alt="logo"/>
        <span className="category">{hit.category}</span>
        <span className="discount">{hit.discountPercentage}% OFF</span>
      </div>
      <div className="top-details">
        <div>
          <div className="brand">{hit.brand}</div>
          <div className="title">{hit.title}</div>
        </div>
        <span className="price">${hit.price}</span>
      </div>
      <div className="description">{hit.description}</div>
      <div className="details">
        <div className="rating"><span>{hit.rating}</span>/5</div>
        <div className="stock">Only {hit.stock} left!</div>
      </div>
    </article>
  );
}

function App() {

  return (
    <div className="App">
        <InstantSearch searchClient={searchClient} indexName="longlist">

          <header className="App-header">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
              <h1>Algolia with React</h1>
            </div>
          </header>
          <main>
            <div className="searchbar">
              <SearchBox />
            </div>
            <section className="container">
              <aside className="sidebar">
                <ClearRefinements />
                <h3>Category</h3>
                <RefinementList attribute="category" />

                <NumericMenu
                  attribute="price"
                  items={[
                    { end: 10, label: '<$10' },
                    { start: 10, end: 100, label: '$10-$100' },
                    { start: 100, end: 500, label: '$100-$500' },
                    { start: 500, label: '>$500' },
                  ]}
                />

                <RangeInput 
                  attribute="price" />

              </aside>
              <div className="results-list">
                <Hits hitComponent={Hit} />
              </div>  
            </section>
          </main>
         
        </InstantSearch>
    </div>
  );
}

export default App;