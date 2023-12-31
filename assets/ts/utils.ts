export function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
}

export function isMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true
    }

    return false
}

export function addScrollCheck(classname,scrollclassname,scrolltrigger){
    window.addEventListener("scroll", function() {
        if (window.scrollY > scrolltrigger) { // check scroll position
            classname.classList.add(scrollclassname);
        }else{
            classname.classList.remove(scrollclassname);
        }
    });
}