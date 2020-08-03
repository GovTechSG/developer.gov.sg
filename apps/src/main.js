import "./main.scss";
import "sgds-govtech/js/sgds.js";

$(function() {
  $(".mobile-sidenav-toggle").click(function() {
    $(this)
      .children(".sgds-icon")
      .toggleClass("sgds-icon-chevron-down")
      .toggleClass("sgds-icon-chevron-up");
    $(".mobile-sidenav-menu").toggleClass("is-hidden");
  });

  $(".sgds-navbar-link.mobile").click(function() {
    $(this)
      .next()
      .toggleClass("is-hidden-touch");
  });
});
