import { MakeFetch } from './fetch';
import { Pagination } from './pagination';
import Notiflix from 'notiflix';
import { refs } from './refs';


Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: true,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Montserrat',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: true,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  failure: {
    background: '#DC56C5',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: '#fff',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
});


/*
* funkcja od której wszystko się zaczyna :)
* podłączam plugin paginacji
* podłączam plugin Fetch
*/



async function galleryRender({ country, page, keyword, authorId, loadContainer }) {
    // żeby uniknąc nakładania eventListenerów przy paginacji zamieniam kontener paginacji na klona
    const paginationList = document.querySelector('.pagination');
    const cloneContainer = paginationList.cloneNode(true);
    paginationList.parentNode.replaceChild(cloneContainer, paginationList);

    const fetchService = new MakeFetch({
    container: refs.gallery,
    notification: Notiflix.Notify,
    pageNumber: page,
    countryCode: country,
    keyword: keyword,
    authorId: authorId,
    loadContainer: loadContainer,
  })

  await fetchService.makeFetch();
  const pageNumber = await fetchService._getPageNumber();
  const pagination = new Pagination({
    currentPage: page,
    pageNumber: pageNumber,
    paginationContainer: cloneContainer,
    cardContainer: refs.gallery,
    country: country,
    keyword: keyword,
    authorId: authorId,
    loadContainer: loadContainer,
  });

   //DODAJE TUTAL TOTALPAGES ZEBY SPRAWDZIC CZCY POTRZEBNE SA TRZY KROPKI
  pagination.renderPagination();
  cloneContainer.addEventListener('click', pagination.handlePaginationOnClick);
}

export { galleryRender };