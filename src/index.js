'use strict';
import './sass/main.scss';
import { galleryRender } from './js/render-gallery';
import { request } from './js/get-current-location';
import { addLibraryScript, addSrcToLazyImages } from './js/lazyload';
import { refs } from './js/refs';
import { Loader } from './js/loading';
let page = 1;
let country = '';
const loader = new Loader(refs.loading);
loader.displayLoading();
// podłączam funkcję wyszukiwania kraju po IP
try {
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      const locationData = JSON.parse(this.responseText);
      country = locationData.country_code.toLowerCase();
    };
  };
} catch (error) {
  country = 'pl';
}



setTimeout(() => {
  galleryRender({ country: country, page: page, loadContainer: refs.loading });
}, 2000);



if ('loading' in HTMLImageElement.prototype) {
    addSrcToLazyImages();
} else {
    addLibraryScript();
};
