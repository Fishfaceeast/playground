/**
 * Created by yuqian on 2018/12/15.
 */

function Tooltip(parent, content, options) {
  this.$parent = $(parent);
  this.parentSelector = parent;
  this.tooltipHtml = '<div class="tooltip hidden">' + content + '</div>';
  this.options = options || {}; // direction, className, animation,...
  this.init();
  this.bindEvents();
}

Tooltip.prototype = {
  init: function() {
    this.$parent.append(this.tooltipHtml);
    if(this.$parent.css('position') == "static") {
      this.$parent.css('position', 'relative');
    }
  },
  bindEvents: function() {
    var self = this;
    var $body = $('body');

    $body.on('mouseenter', this.parentSelector, function(e) {
      var $tooltip = $(this).children('.tooltip');
      $tooltip.removeClass('hidden');
    })
    $body.on('mouseleave', this.parentSelector, function() {
      var $tooltip = $(this).children('.tooltip');
      $tooltip.addClass('hidden');
    })
  }
}
