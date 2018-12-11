/**
 * Created by yuqian on 2018/12/9.
 */
~function($) {
  function Validator(form) {
    this.$form = form;
    this.$items = this.captureItems();
    this.rules = {
      number: {
        'reg': /^[0-9]+$/i,
        'message': 'Please enter numbers!'
      },
      word: {
        'reg': /^[a-z]+$/i,
        'message': 'Please enter words!'
      }
    };
    this.bindEvents();
  }
  Validator.prototype = {
    bindEvents: function() {
      var self = this;

      this.$items.on('blur', function() {
        self.validateItem($(this));
      })
      this.$items.on('focusin', function(e) {
        $(e.target).removeClass('empty error');
      })
    },
    captureItems: function() {
      var items = this.$form.find('.required');
      return items;
    },
    validateItem: function($item) {
      var isValid = true;
      var ruleName = $item.data('rule');
      var rule = this.rules[ruleName]
      var reg = rule.reg;
      var message = '';
      var val = $item.val();
      if(!val) {
        isValid = false;
        message = 'empty!';
        $item.addClass('empty');
      }
      if(val && !reg.test(val)) {
        isValid = false;
        message = rule.message || 'invalid field!';
        $item.addClass('error');
      }

      return {
        isValid: isValid,
        message: message
      };
    },
    validateForm: function() {
      var self = this;
      var invalidFields = [];
      this.$items.each(function() {
        var isValidItem = self.validateItem($(this));
        if(!isValidItem.isValid) {
          invalidFields.push($(this));
        }
      });
      return invalidFields.length <= 0;
    }
  }
  $.fn.validator = function() {
    return new Validator(this);
  }
}(jQuery)
