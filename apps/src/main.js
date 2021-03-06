import "./main.scss";
import "sgds-govtech/js/sgds.js";
import config from "./lib/config";

$(function () {
  $(".mobile-sidenav-toggle").click(function () {
    $(this)
      .children(".sgds-icon")
      .toggleClass("sgds-icon-chevron-down")
      .toggleClass("sgds-icon-chevron-up");
    $(".mobile-sidenav-menu").toggleClass("is-hidden");
  });

  $(".sgds-navbar-link.mobile").click(function () {
    $(this)
      .next()
      .toggleClass("is-hidden-touch");
  });

  const eventCategory = 'feedback_rating';

  /**
   * Read more here about sending Google Analytics Event
   * https://developers.google.com/analytics/devguides/collection/gtagjs/events
   * 
   * Try to use the default Google Analytics Event as much as possible
   */

  // Create a timeout function to show the success message regardless whether
  // the submission is successful
  function createFunctionWithTimeout(callback, opt_timeout) {
    var called = false;
    function fn() {
      if (!called) {
        called = true;
        callback();
      }
    }
    setTimeout(fn, opt_timeout || 1000);
    return fn;
  }

  function showSuccessMessage() {
    let feedbackThumbs = $('#feedback .feedback__thumb');
    let feedbackSuccess = $('#feedback .feedback__success');
    $(feedbackThumbs).addClass('is-hidden');
    $(feedbackSuccess).removeClass('is-hidden');
  }
  // Event Listeners
  $(".js-thumbs-up").click(function () {
    gtag('event', 'thumbs_up', {
      event_category: eventCategory,
      event_label: 'thumbs_up_icon',
      value: 1,
      event_callback: function() {
        createFunctionWithTimeout(showSuccessMessage, 300)
      }
    });
  });

  $(".js-thumbs-down").click(function () {
    gtag('event', 'thumbs_down', {
      event_category: eventCategory,
      event_label: 'thumbs_down_icon',
      value: 0,
      event_callback: function() {
        createFunctionWithTimeout(showSuccessMessage, 300)
      }
    });
  });
});

