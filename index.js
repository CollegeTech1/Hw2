let largePoster = function ()
{
  smallPicture = jQuery(this).attr("src")

  jQuery("#main-image").attr("src",smallPicture)
}
jQuery("#thumbnails img").on("click",largePoster)
