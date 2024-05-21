var navigations = document.getElementsByClassName('sk_nav'); function outerHeight(element) {
    const height = element.offsetHeight, style = window.getComputedStyle(element)
    return ['top', 'bottom'].map(side => parseInt(style[`margin-${side}`])).reduce((total, side) => total + side, height)
}
for (var s = 0, len = navigations.length; s < len; s++) {
    var burger = document.createElement('span'); burger.classList.add('sk_burger'); for (var b = 0; b < 3; b++) { var burgerSpan = document.createElement('span'); burger.appendChild(burgerSpan) }
    burger.addEventListener('click', function (e) {
        navigation = document.querySelector('.sk_nav'); if (navigation.classList.contains('sk_open')) {
            navigation.classList.remove('sk_open'); document.body.classList.remove('sk_no_scroll'); document.getElementById('sk_slideIn_logo').classList.remove('sk_open')
            document.getElementById('sk_slideIn_logo').parentElement.removeAttribute('style'); setTimeout(function () { navigation.classList.remove('sk_visible') }, 600)
        } else { navigation.classList.add('sk_visible'); document.body.classList.add('sk_no_scroll'); document.getElementById('sk_slideIn_logo').classList.add('sk_open'); document.getElementById('sk_slideIn_logo').parentElement.style.height = outerHeight(document.getElementById('sk_slideIn_logo')) + 'px'; setTimeout(function () { navigation.classList.add('sk_open') }, 50) }
    })
    document.getElementById('sk_slideIn_logo').appendChild(burger)
}
if (document.querySelectorAll('.cf_efx_testimonials_wrapper .cf_efx_testimonial').length > 0) {
    for (i = 0; i < document.querySelectorAll('.cf_efx_testimonials_wrapper .cf_efx_testimonial').length; i++) {
        if (i == 0) { document.querySelector('.cf_efx_testimonials_counter_wrapper').insertAdjacentHTML('beforeend', '<span class="cf_efx_testimonials_counter act"></span>') } else { document.querySelector('.cf_efx_testimonials_counter_wrapper').insertAdjacentHTML('beforeend', '<span class="cf_efx_testimonials_counter"></span>') }
        var counters = document.querySelectorAll('.cf_efx_testimonials_counter_wrapper .cf_efx_testimonials_counter'); counters[counters.length - 1].addEventListener('click', function () {
            var testimonials = document.querySelectorAll('.cf_efx_testimonials_wrapper .cf_efx_testimonial'); for (o = 0; o < testimonials.length; o++) { testimonials[o].classList.remove('act'); document.querySelectorAll('.cf_efx_testimonials_counter_wrapper .cf_efx_testimonials_counter')[o].classList.remove('act') }
            this.classList.add('act'); var counter = this; var index = 0; while ((counter = counter.previousSibling) != null) { index++ }
            testimonials[index].classList.add('act'); if (window.innerWidth <= 550) { siema.goTo(index) }
        })
    }
    document.querySelector('.cf_efx_testimonials_wrapper .cf_efx_testimonial').classList.add('act'); document.querySelector('.cf_efx_testimonials_wrapper').classList.add('js-ready'); var siemaLoaded = !1; var siemaInitialized = !1; var siema; function initLoadAsync() {
        if (window.innerWidth <= 550) {
            if (!siemaLoaded) {
                siemaLoaded = !0; var head = document.getElementsByTagName("head")[0]; var script = document.createElement("script"); script.src = "https://cdn.jsdelivr.net/npm/siema@1.5.1/dist/siema.min.js"; script.onload = function () {
                    document.querySelector('.cf_efx_testimonials_wrapper .fx_po_subtemplate').classList.add('siema'); siema = new Siema({ onChange: function () { document.querySelector('.cf_efx_testimonials_counter_wrapper .cf_efx_testimonials_counter.act').classList.remove('act'); document.querySelectorAll('.cf_efx_testimonials_counter_wrapper .cf_efx_testimonials_counter')[this.currentSlide].classList.add('act') } })
                    siemaInitialized = !0
                }; head.appendChild(script)
            } else if (!siemaInitialized) { siema.init(); siemaInitialized = !0 }
        } else if (siemaInitialized) { siema.destroy(!0); siemaInitialized = !1 }
    }
    initLoadAsync(); window.onresize = function () { initLoadAsync() }
}
if (document.querySelector('.logo_slider')) {
    var initialized = !1; var logoInterval; var timer = !0; logoSlider(); window.addEventListener('resize', function () { if (timer) { timer = !1; logoSlider(); setTimeout(function () { timer = !0 }, 50) } })
    function logoSlider() {
        if ((document.querySelectorAll('.logo_slider .logo_slide').length >= 5 && window.innerWidth > 800) || (document.querySelectorAll('.logo_slider .logo_slide').length >= 4 && window.innerWidth <= 800 && window.innerWidth > 550) || (document.querySelectorAll('.logo_slider .logo_slide').length >= 3 && window.innerWidth <= 550)) { if (!initialized) { initialized = !0; initlializeLogoSlider() } } else if (initialized) { initialized = !1; destroyLogoSlider() }
        function initlializeLogoSlider() {
            var firstTime = !0; var logoWrapper = document.querySelector('.logo_slider .logo_slide_wrapper'); document.querySelector('.logo_slider').classList.add('active'); logoInterval = setInterval(function () { logoWrapper.style.transform = 'translateX(-' + (logoWrapper.querySelector('.logo_slide').offsetWidth + 32) + 'px)'; if (!firstTime) { setTimeout(function () { logoWrapper.classList.add('reset'); logoWrapper.style.transform = 'translateX(0)'; logoWrapper.appendChild(logoWrapper.querySelector('.logo_slide')); setTimeout(function () { logoWrapper.classList.remove('reset') }, 100) }, 550) } else { firstTime = !1 } }, 2000)
            window.onresize = function () { if (initialized && logoWrapper.style.transform != 'translateX(0)') { logoWrapper.style.transform = 'translateX(-' + (logoWrapper.querySelector('.logo_slide').offsetWidth + 32) + 'px)' } }
        }
        function destroyLogoSlider() { var logoWrapper = document.querySelector('.logo_slider .logo_slide_wrapper'); logoWrapper.removeAttribute('style'); clearInterval(setInterval); document.querySelector('.logo_slider').classList.remove('active') }
    }
}
var firstParallaxFunction; cf_parallax(); function cf_parallax() {
    if (firstParallaxFunction == null) {
        if (document.getElementsByClassName('cf_parallax').length >= 1) { window.requestAnimationFrame(cf_efx_parallax); window.addEventListener('scroll', function () { window.requestAnimationFrame(cf_efx_parallax) }, { passive: !0 }); function cf_efx_parallax() { for (i = 0; i < document.getElementsByClassName('cf_parallax').length; i++) { var currentParallaxImage = document.getElementsByClassName('cf_parallax')[i].getElementsByClassName('fx_po_image')[0]; var imgPos = (window.innerHeight / 2 - (currentParallaxImage.getBoundingClientRect().bottom - currentParallaxImage.clientHeight / 2)) / 2.5; currentParallaxImage.setAttribute('style', 'transform: translate(-50%, calc(-50% + ' + imgPos + 'px))') } } }
        firstParallaxFunction = !1
    }
}
var editor = document.getElementById("fx_tb_toolbar"); if (editor == null) {
    var x = document.createElement('script'); x.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js'; document.getElementsByTagName("head")[0].appendChild(x); var interval = setInterval(function () {
        if (!(typeof jQuery == 'undefined')) {
            if (!(document.readyState === "complete")) { jQuery(window).on('load', function () { lightbox() }) } else { lightbox() }
            function lightbox() {
                var currentSlot = jQuery('.sk_pagewrap'); var first = !0; var counter = -1; currentSlot.find('.ext_lightbox img').each(function (index) { jQuery(this).data('index', index); counter++ })
                currentSlot.find('.ext_lightbox img').on('click', function () {
                    if (first) {
                        var currentImage = jQuery(this); document.body.style.overflow = 'hidden'; currentSlot.append('<div class="ext_lightbox_overlay"><div class="ext_lightbox_overlay_inner" style="height: 960px;"><img src="" alt="" /><span class="ext_lightbox_overlay_close"><span class="ext_lightbox_overlay_cross"></span><span class="ext_lightbox_overlay_cross_shadow"></span></span><span class="ext_lightbox_overlay_left"><span class="ext_lightbox_overlay_arrow"></span></span><span class="ext_lightbox_overlay_right"><span class="ext_lightbox_overlay_arrow"></span></span></div></div>'); if (currentImage.data('index') == 0) { jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_left').hide() } else if (currentImage.data('index') == counter) { jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_right').hide() }
                        if (currentSlot.find('.ext_lightbox img').length == 2) { jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_left').hide(); jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_right').hide() }
                        jQuery('div.ext_lightbox_overlay, div.ext_lightbox_overlay span.ext_lightbox_overlay_close, div.ext_lightbox_overlay span.ext_lightbox_overlay_cross, div.ext_lightbox_overlay span.ext_lightbox_overlay_cross_shadow').on('click', function () { document.body.removeAttribute('style'); jQuery('div.ext_lightbox_overlay').detach(); first = !0 }).children().click(function (e) { return !1 }); jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_right').on('click', function () {
                            if (currentImage.data('index') + 1 == counter) { jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_right').hide() }
                            jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_left').show(); var newIndex = currentImage.data('index') + 1; var newImage = currentSlot.find('.ext_lightbox img:eq(' + newIndex + ')').get(0); var newImageSrc = newImage.currentSrc; jQuery('div.ext_lightbox_overlay_inner img').attr('src', newImageSrc); jQuery('div.ext_lightbox_overlay_inner img').attr('alt', jQuery(newImage).siblings('figcaption').text()); jQuery('div.ext_lightbox_overlay_inner figcaption').text(jQuery(newImage).siblings('figcaption').text()); currentImage = jQuery(newImage); jQuery('div.ext_lightbox_overlay_inner').height(960); if (jQuery('div.ext_lightbox_overlay_inner').height() > jQuery('div.ext_lightbox_overlay_inner img').height() + 40) { jQuery('div.ext_lightbox_overlay_inner').removeAttr('style') }
                        })
                        jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_left').on('click', function () {
                            if (currentImage.data('index') - 1 == 0) { jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_left').hide() }
                            jQuery('div.ext_lightbox_overlay span.ext_lightbox_overlay_right').show(); var newIndex = currentImage.data('index') - 1; var newImage = currentSlot.find('.ext_lightbox img:eq(' + newIndex + ')').get(0); var newImageSrc = newImage.currentSrc; jQuery('div.ext_lightbox_overlay_inner img').attr('src', newImageSrc); jQuery('div.ext_lightbox_overlay_inner img').attr('alt', jQuery(newImage).siblings('figcaption').text()); jQuery('div.ext_lightbox_overlay_inner figcaption').text(jQuery(newImage).siblings('figcaption').text()); currentImage = jQuery(newImage); jQuery('div.ext_lightbox_overlay_inner').height(960); if (jQuery('div.ext_lightbox_overlay_inner').height() > jQuery('div.ext_lightbox_overlay_inner img').height() + 40) { jQuery('div.ext_lightbox_overlay_inner').removeAttr('style') }
                        })
                        first = !1
                    }
                    var currentImageSrc = this.currentSrc; jQuery('div.ext_lightbox_overlay_inner img').attr('src', currentImageSrc); jQuery('div.ext_lightbox_overlay_inner img').attr('alt', jQuery(this).siblings('figcaption').text()); jQuery(this).siblings('figcaption').clone().appendTo('div.ext_lightbox_overlay_inner'); setTimeout(function () { if (jQuery('div.ext_lightbox_overlay_inner').height() > jQuery('div.ext_lightbox_overlay_inner img').height() + 40) { jQuery('div.ext_lightbox_overlay_inner').removeAttr('style') } }, 10)
                })
                jQuery(window).on('resize', function () { if (jQuery('div.ext_lightbox_overlay').length) { if (jQuery('div.ext_lightbox_overlay_inner[style]').length) { if (jQuery('div.ext_lightbox_overlay_inner').height() > jQuery('div.ext_lightbox_overlay_inner img').height() + 40) { jQuery('div.ext_lightbox_overlay_inner').removeAttr('style') } } else { if (jQuery('div.ext_lightbox_overlay_inner img').height() > jQuery('div.ext_lightbox_overlay_inner').height()) { jQuery('div.ext_lightbox_overlay_inner').height(960) } } } })
            }
            clearInterval(interval)
        }
    }, 100)
}
