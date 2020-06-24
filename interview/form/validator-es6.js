/**
 * Created by yuqian on 2018/12/9.
 */

export default class Validator {
  constructor(form, option) {
    this.$form = $(form)
    this.option = option || {}
    this.patterns = {
      number: /^\-?(?:[1-9]\d*|0)(?:[.]\d)?$/,
      range: /^\-?(?:[1-9]\d*|0)(?:[.]\d)?$/,
    }
    this.after = option.after || function() {
        return true;
      }
    this.$items = this.captureItem()
    this.bindEvents()
  }
  bindEvents() {
    let self = this
    this.$form.on('submit', function() {
      self.validateForm()
    })
    this.$form.on('after', function() {
      self.after()
    })
    this.$items.on('blur', function() {
      self.validate($(this))
    })
    this.$items.on('focusin', function(e) {
      let $target = $(e.target)
      $target.parent().removeClass('empty error rangeError')
      if($target.data('pattern') == 'range') {
        $target.parent().siblings('.range').removeClass('rangeError')
      }
    })
  }
  captureItem() {
    return this.$form.find('input, textarea, checkbox').filter(function(){
      return $(this).data('required') == '1'
    })
  }
  validate(item) {
    let $parent = $(item).parent()
    let text = $(item).val()
    let pattern = this.patterns[$(item).data('pattern')]
    if(!text) {
      if($(item).data('must')) {
        $parent.addClass('empty')
        return false
      }
    } else {
      if(pattern && !pattern.test(text)) {
        $parent.addClass('error')
        return false
      }
    }
    if($(item).data('pattern') == 'range') {
      let value = parseFloat(text)
      let role = $(item).data('role')
      let $sibling = $(item).parent().siblings('.range').children('input[data-pattern="range"]')
      if($sibling.val()) {
        let sibVal = parseFloat($sibling.val())
        if((role == 'min' && value >= sibVal) || (role == 'max' && value <= sibVal))  {
          $parent.addClass('rangeError')
          return false
        }
      }
    }
    return true
  }
  validateForm() {
    let self = this
    let unvalidFields = []
    this.$items.each(function() {
      if(!self.validate($(this))) {
        unvalidFields.push($(this))
      }
    })
    if(!unvalidFields.length) {
      this.$form.trigger('after')
    }
    return !unvalidFields.length
  }
}

const test = new Validator($('#order-form'), {})