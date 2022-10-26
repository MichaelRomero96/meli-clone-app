import './style.css';
import imageAsset from '../../assets/images'

const imgUrl = "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus@2x.png"

const SearchBar = `
  <div>
    <input 
      class="search-bar"
      placeholder="Buscar productos, marcas y más..."
    />
  </div>
`

const AppBar = `
  <div class='app-bar'>
    <div class='main-wrapper'>
      <img class="app-logo" src="${imageAsset ?                 imageAsset: ''}"/>
      ${SearchBar}
    </div>
  </div>
`

export default AppBar;