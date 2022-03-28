!function(){"use strict";var t={n:function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(n,{a:n}),n},d:function(i,n){for(var e in n)t.o(n,e)&&!t.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:n[e]})},o:function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}},i=jQuery,n=t.n(i);function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function o(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,i,n){return i&&o(t.prototype,i),n&&o(t,n),t}var r,c,l=devowlWp_utils,s=function(){return window[l.BaseOptions.getPureSlug({NODE_ENV:"production",env:"production",rootSlug:"devowl-wp",slug:"real-utils"},!0)].others};function u(){return r||(r=(0,l.createRequestFactory)(window[l.BaseOptions.getPureSlug({NODE_ENV:"production",env:"production",rootSlug:"devowl-wp",slug:"real-utils"},!0)]))}function p(){return c||(c=(0,l.createLocalizationFactory)("".concat("devowl-wp","-").concat("real-utils")))}var d=function(){var t;return(t=p()).__.apply(t,arguments)},h={path:"/cross/:slug/:action/dismiss",method:l.RouteHttpVerb.DELETE},b="crossSellingPointer",f=function(){function t(i,n,o,a){e(this,t),this.slug=void 0,this.action=void 0,this.position=void 0,this.$handler=void 0,this.slug=n,this.action=o,this.position=a,this.$handler=i,this.init()}return a(t,[{key:"close",value:function(t,i){t.preventDefault();var n=this.$handler.pointer("widget").find('input[type="checkbox"]').is(":checked");if(this.$handler.pointer("close"),this.$handler.pointer("destroy"),i){var e=this.getAction().link;window.open(e,"_blank")}!function(){var t;(t=u()).request.apply(t,arguments)}({location:h,params:{slug:this.slug,action:this.action,force:n}})}},{key:"buttons",value:function(){var t=this,i=n()('<a class="button" href="#">'.concat(d("Not now"),"</a>")).click((function(i){t.close(i,!1)})),e=n()('<a class="button button-primary" href="#">'.concat(d("Learn more!"),"</a>")).click((function(i){t.close(i,!0)}));return n()('<div class="real-utils-pointer-buttons" />').append(e,i)}},{key:"getAction",value:function(){var t;return null===(t=s().cross)||void 0===t?void 0:t[this.slug][this.action]}},{key:"init",value:function(){var t=this,i=this.position,n=this.getAction(),e=n.title,o=n.description,a=n.image,r='<label><input type="checkbox" /> '.concat(d("Never show this popup again"),"</label>");this.$handler.pointer({pointerClass:"wp-pointer real-utils-cross-pointer",content:"<h3>".concat(e,'</h3><p><img src="').concat(a,'" />').concat(o).concat(r,"</p>"),buttons:this.buttons.bind(this),position:i}).pointer("open").pointer("widget").find("img").get(0).onload=function(){return t.$handler.pointer("reposition")}}}],[{key:"waitForVisibleElement",value:function(i,e,o,a){if(!this.isActionAvailable(e,o))return!1;var r=n()(i);return r.length&&!r.data(b)&&(r.data(b,!0),new t(r,e,o,a)),r.length>0}},{key:"isActionAvailable",value:function(t,i){var n,e;return!(null===(n=s().cross)||void 0===n||null===(e=n[t])||void 0===e||!e[i])}}]),t}(),v="real-media-library",m="real-category-library",g="real-physical-media",w=function(){function t(){e(this,t)}return a(t,null,[{key:"onChange",value:function(){new f(n()(this),m,"assign"),n()(t.SELECTOR).off("change",t.onChange)}},{key:"bind",value:function(){f.isActionAvailable(m,"assign")&&n()(this.SELECTOR).one("change",this.onChange)}}]),t}();w.SELECTOR='body.wp-admin.post-php:not(.post-type-attachment) #categorychecklist input[type="checkbox"]';var y=function(){function t(){e(this,t)}return a(t,null,[{key:"onClick",value:function(i){var e=n()(this).attr("href");return new f(n()(this),m,"pagination"),n()(this).pointer("widget").find(".button").click((function(){setTimeout((function(){return window.open(e,"_self")}),1e3)})),n()(t.SELECTOR).off("click",t.onClick),i.preventDefault(),!1}},{key:"bind",value:function(){f.isActionAvailable(m,"pagination")&&n()(this.SELECTOR).one("click",this.onClick)}}]),t}();y.SELECTOR="body.wp-admin.edit-php:not(.post-type-attachment) .tablenav-pages .pagination-links a",n()(document).ready((function(){var t;setTimeout((function t(){var i=!1;!i&&(i=f.waitForVisibleElement("body.wp-admin.upload-php .attachment-info > .details:visible, body.wp-admin.post-php.post-type-attachment #post-body-content #titlewrap:visible",v,"attachment-details")),!i&&(i=f.waitForVisibleElement("body.wp-admin.plugins-php #wpbody-content > div.wrap > h1:first","real-cookie-banner","gdpr-compliant")),!i&&(i=f.waitForVisibleElement('body > div > .media-modal.wp-core-ui .media-frame-router button[role="tab"]:eq(1).active',v,"insert-dialog")),!i&&(i=f.waitForVisibleElement("body.wp-admin .editor-post-taxonomies__hierarchical-terms-list:visible",m,"assign","bottom")),!i&&(i=f.waitForVisibleElement("body.wp-admin.upload-php #wpbody-content .upload-ui .button-hero:visible, body.wp-admin.media-new-php #media-items .media-item:first:visible",g,"upload")),!i&&setTimeout(t,1e3)}),1e3),n()("select#parent").length&&f.isActionAvailable(m,"add-category")&&n()("body.wp-admin.edit-tags-php:not(.woocommerce-page,.post-type-attachment) form#addtag #submit").one("click",(function(){new f(n()(this),m,"add-category","bottom")})),n()("select#parent").length&&f.isActionAvailable(m,"add-wc-category")&&n()("body.wp-admin.edit-tags-php.woocommerce-page form#addtag #submit").one("click",(function(){new f(n()(this),m,"add-wc-category","bottom")})),f.isActionAvailable(g,"move")&&(null===(t=window.rml)||void 0===t||t.hooks.register("attachment/move/finished",(function(t,i){new f(n()('.rml-container:visible li[data-li-id="'.concat(i,'"]')),g,"move")}))),w.bind(),y.bind()}))}();
//# sourceMappingURL=cross.js.map