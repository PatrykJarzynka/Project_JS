parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/Project_JS/Project_JS/src/images/location.svg":[["location.2419ae68.svg","sQ69"],"sQ69"],"./../images/main-bg.png":[["main-bg.8b9f2e4b.png","lT2y"],"lT2y"],"./../images/svg/barcode.png":[["barcode.63ae88e6.png","hn0G"],"hn0G"],"./../images/bg.jpg":[["bg.16fd142e.jpg","fRER"],"fRER"]}],"pnJs":[function(require,module,exports) {
module.exports="/Project_JS/symbol-defs.09b8042a.svg";
},{}],"fNmR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderModalWindow=void 0;var e=i(require("../images/svg/symbol-defs.svg"));function i(e){return e&&e.__esModule?e:{default:e}}console.log(`${e.default}#icon-close`);class t{constructor({event:e,Key:i,link:t}){this.Key=i,this.link=t,this.image=e.images[0].url,this.eventName=this.setEventName(e.name,e._embedded.attractions[0].name),this.eventInfo=this.checkData(e.info,"No Event Info"),this.eventDate=this.checkData(e.dates.start.localDate,"No Date Info"),this.eventCity=this.checkData(e._embedded.venues[0].city.name,"No City Info"),this.eventCountry=this.checkData(e._embedded.venues[0].country.name,"No Country Info"),this.eventLocation=this.checkData(e._embedded.venues[0].name,"No Location Info"),this.ticketLink=e.url,this.eventTime="",this.eventTimeZone="",this.vipPriceContainerText="",this.standardPriceContainerText="",this.lowerPrice="",this.higherPrice="",this.currency="",this.lowerPriceVip="",this.higherPriceVip="",this.currencyVip="",this.standardPriceContainer="",this.vipPriceContainer="",this.setTimeZone(e.dates.start.localTime,e.dates.timezone,e._embedded.venues[0].timezone),this.setPrices(e.priceRanges,e.priceRanges[0].min,e.priceRanges[0].max,e.priceRanges[0].currency,e.priceRanges[1].min,e.priceRanges[1].max,e.priceRanges[1].currency),this.setPriceContainer(e.priceRanges),this.windowModal=this.setWindowModal()}returnModalWindow(){return this.windowModal}setEventName(e,i){let t=e;return e||(t=this.checkData(i,"No Name Info")),t}setTimeZone(e,i,t){this.eventTime=e,this.eventTimeZone=`(${i})`,e?i?this.eventTime=e.slice(0,5):this.eventTimeZone=this.checkData(t,""):(this.eventTime="No Time Info",this.eventTimeZone="")}setWindowModal(){return`\n        <div class="modal-window modal-closed">\n          <div class="modal-window__container">\n            <svg class="modal-window__close--btn"><use class='modal-window__close--btn' href="${e.default}#icon-close"></use></svg>\n              <div class="modal-window__logo-img--container">\n                <img src="${this.image}" alt="${this.eventName}" class="modal-window__logo-img">\n              </div>\n              <div class="modal-window__info">\n                <div class="modal-window__info--container">\n                  <h2 class="modal-window__title">Info</h2>\n                  <p class="modal-window__text">${this.eventInfo}</p>\n                </div>\n                <div class="modal-window__info--container">\n                  <h2 class="modal-window__title">When</h2>\n                  <p class="modal-window__text">${this.eventDate}</p>\n                  <p class="modal-window__text">${this.eventTime} ${this.eventTimeZone}</p>\n                </div>\n                <div class="modal-window__location--container">\n                  <h2 class="modal-window__title">Where</h2>\n                  <p class="modal-window__text">${this.eventCity,this.eventCountry}</p>\n                  <p class="modal-window__text">${this.eventLocation}</p>\n                  </div>\n                <div class="modal-window__info--container">\n                  <h2 class="modal-window__title">Who</h2>\n                  <p class="modal-window__text">${this.eventName}</p>\n                </div>\n                <div class="modal-window__info--container">\n                  <h2 class="modal-window__title">Prices</h2>\n                  ${this.standardPriceContainer}\n                </div>\n              </div>\n            <a>\n              <button class="modal-window__more--btn" type="button">MORE FROM THIS AUTHOR</button>\n            </a>\n          </div>\n        </div>\n    `}setPrices(e,i,t,n,s,o,a){e&&(this.lowerPrice=this.setNewPrice(i,"No Price Info"),this.higherPrice=this.setNewPrice(t,"No Price Info"),this.currency=this.setNewPrice(n,""),e.length>1&&"VIP"===e[1].type&&(this.lowerPriceVip=this.setNewPrice(s,"No Price Info"),this.higherPriceVip=this.setNewPrice(o,"No Price Info"),this.currencyVip=this.checkData(a,"")))}setPriceContainer(e){e?(this.standardPriceContainerText=`<p class="modal-window__text">Standard: ${this.lowerPrice} - ${this.higherPrice} ${this.currency}</p>`,this.lowerPrice===this.higherPrice&&(this.standardPriceContainerText=`<p class="modal-window__text">Standard: ${this.lowerPrice} ${this.currency}</p>`),e>1&&"VIP"===e[1].type&&(this.vipPriceContainer=`\n                    <div class='modal-window__price-container'>\n                        ${this.vipPriceContainerText}\n                        <button class="modal-window__btn" type="submit">\n                          <a href='${this.ticketLink}'>\n                            <p class='modal-window__btn-text'>Buy Tickets</p>\n                          </a>\n                        </button>\n                    </div>`,this.standardPriceContainerText=`<p class="modal-window__text">Standard: ${this.lowerPrice} - ${this.higherPrice} ${this.currency}</p>`,this.vipPriceContainerText=`<p class="modal-window__text">VIP: ${this.lowerPriceVip} - ${this.higherPriceVip} ${this.currencyVip}</p>`,this.lowerPriceVip===this.higherPriceVip&&(this.standardPriceContainerText=`<p class="modal-window__text">Standard ${this.lowerPrice} - ${this.higherPrice} ${this.currency}</p>`,this.vipPriceContainerText=`<p class="modal-window__text">VIP ${this.lowerPriceVip} ${this.currencyVip}</p>`)),this.standardPriceContainer=`\n                <div class='modal-window__price-container'>\n                ${this.standardPriceContainerText}\n                        <button class="modal-window__btn" type="submit">\n                          <a href='${this.ticketLink}'>\n                            <p class='modal-window__btn-text'>Buy Tickets</p>\n                          </a>\n                        </button>\n                </div >\n                ${this.vipPriceContainer}\n            `):this.standardPriceContainer='\n                <a>\n                <button class="modal-window__btn" type="submit">Check on Website</button>\n                </a>\n                '}checkData(e,i){let t=e;return e&&"undefined"!==e&&void 0!==e||(t=i),t}setNewPrice(e,i){let t=this.checkData(e,i);return String(t).length>3&&(t=String(t).slice(0,2)),t}}exports.renderModalWindow=t;
},{"../images/svg/symbol-defs.svg":"pnJs"}],"u9Ke":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalController=void 0;class s{constructor({cssClass:s,firstClickPlace:t,secondClickPlace:e,closeBtnSelector:l}){this.firstClickPlace=this.checkClassData(t),this.secondClickPlace=this.checkClassData(e),this.closeBtnSelector=l,this.cssClass=s,this.modalWindow=this.setModalWindow(),this.closeBtn=this.setCloseBtn(),this.setEventListener()}setModalWindow(){return this.firstClickPlace?this.firstClickPlace:this.secondClickPlace}checkClassData(s){if(s)return s}setCloseBtn(){return this.modalWindow.querySelector(`.${this.closeBtnSelector}`)}openModal(){this.modalWindow&&this.modalWindow.classList.remove(this.cssClass)}setEventListener(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>{this.modalWindow&&this.modalWindow.classList.add(this.cssClass)})}closeModal(){this.modalWindow&&this.modalWindow.classList.add(this.cssClass)}}exports.ModalController=s;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEY=void 0,require("./sass/main.scss");var e=require("./js/modal-render-plugin"),t=require("./js/modal-open-plugin");document.addEventListener("scroll",()=>{console.log(window.scrollX),console.log(window.scrollY)});const n=document.querySelector(".gallery"),a="9hIF6NBjrDSVNrQQJmrbBXzEzwkr0S4m";exports.KEY=a;const s=document.querySelector(".pagination");let o=1,l="pl";async function i(t,s){let o=await c(t,s);o.page;o._embedded.events.forEach(t=>{const s=new e.renderModalWindow({event:t,Key:a,link:"https://app.ticketmaster.com/discovery/v2/events.json?"}).returnModalWindow();n.insertAdjacentHTML("beforeend",`<div class="gallery__event">\n        <img class="event__image" src=${t.images[0].url} alt =""/>\n        <div class="event__info">\n        <p class="event__tittle">${t.name}</p>\n        <p class="event__date">${t.dates.start.localDate}</p>\n        <p class="event__place"> ${t._embedded.venues[0].name}</p></div>\n        ${s}\n      </div>`),setTimeout(()=>{_(n,"modal-window__close--btn")},0)}),d(s)}async function c(e,t){return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${e}&sort=date,asc&page=${t}&apikey=${a}`).then(e=>{return e.json()}).catch(e=>{console.log(e)})}const r=(e,t)=>{let n=t-e+1;return Array.from({length:n},(t,n)=>n+e)},d=async(e=1)=>{const t=await c(l,o);t.page;let n,a=t.page.totalPages;t.page,t._links;a>=30&&(a=29),1==e?n=r(e,5):2==e?n=r(e-1,5):e>2&&e<a-1?(n=r(e-2,e+2),console.log(e)):e==a-1?n=r(e-3,e+1):e==a&&(n=r(e-4,e)),p(n,e,a)},p=(e,t,n)=>{t<=n-3&&(e.push("..."),e.push(n)),s.innerHTML=e.map((e,n)=>u(e,t)),document.querySelector(".pagination__dots").disabled=!0},u=(e,t)=>"..."!=e?`\n  <li class='pagination__link${e==t?"--active":""}'>\n    <button>${e}</button>\n  </li>\n`:`<span class='pagination__link--dots'>\n<button class='pagination__dots'>${e}</button>\n</span>`,v=async e=>{var t;e.preventDefault(),s.innerHTML="",n.innerHTML="",document.querySelectorAll(".pagination__link").forEach(e=>e.classList.remove("pagination__link--active")),null===(t=e.target.closest("li"))||void 0===t||t.classList.add("pagination__link--active"),o=e.target.textContent,await i(l,+o)};function _(e,n){e.addEventListener("click",e=>{if(e.target.classList.value.includes("gallery__event")){const a=e.target.children[2],s=e.target.offsetParent.children[2],o=new t.ModalController({cssClass:"modal-closed",firstClickPlace:a,secondClickPlace:s,closeBtnSelector:n});o.openModal(),window.addEventListener("click",e=>{e.target!==a&&e.target!==s||o.closeModal()})}})}s.addEventListener("click",v),i(l,o);
},{"./sass/main.scss":"clu1","./js/modal-render-plugin":"fNmR","./js/modal-open-plugin":"u9Ke"}]},{},["Focm"], null)
//# sourceMappingURL=/Project_JS/src.d6ba71c4.js.map