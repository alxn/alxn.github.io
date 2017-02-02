function checkOffset() {
    var footoff = $('.site-footer').offset().top;

    // lock when you scroll down
    if ($('.share-media-list').offset().top + $('.share-media-list').height() >= footoff) {
        $('.share-media-list').css('position', 'absolute');
        $('.share-media-list').css('top', footoff - window.innerHeight - $('.site-footer').height());
    }

    // restore when you scroll up
    if ($(document).scrollTop() + window.innerHeight < footoff) {
        $('.share-media-list').css('position', 'fixed');
        $('.share-media-list').css('top', 'auto');
    }
}
$(document).scroll(function() {
    checkOffset();
});
