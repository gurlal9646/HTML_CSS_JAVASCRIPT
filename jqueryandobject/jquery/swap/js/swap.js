'use strict';
$(document).ready(() => {
  // set up event handlers for links
  $('#image_list a').click((evt) => {
    // get clicked <a> tag
    const link = evt.currentTarget;

    // swap image
    $('#main_image').attr('src', link.href);

    //swap caption
    $('#caption').text(link.title);

    // cancel the default action of the link
    evt.preventDefault();
  });

  // move focus to first thumbnail
  $('li:first-child a').focus();
});
