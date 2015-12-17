# window.jQuery     = window.$ = require 'jquery'
# plugin            = require 'plugin'

require './vendor/modernizr-2.8.3.min.js'

window.classie = require './lib/classie.js'
require './lib/animationGreed.js'



$(document).ready ->

  # $.mousewheel = require './lib/jquery.mousewheel.js'
  require('./lib/jquery.mousewheel.js')($);
  require './lib/jquery.simplr.smoothscroll.js'
  $.srSmoothscroll()


  skrollr = require './lib/skrollr.js'
  item_count_on_line = Math.floor( $('.item-container').width() / $('.item').width() )
  item_array = []
  $('.item').each (index, val) ->
    item_array.push val

    if index + 1 == item_count_on_line || index + 1 == $('.item').length
      item_max_height = $(item_array[0]).height()
      jQuery.each item_array, ->
        item_max_height = Math.max item_max_height, $(@).height()
      

      jQuery.each item_array, ->
        # $(@).data 'top', 'transform: translate3d(0px, ' + ( $(@).height() / 2 * -1 ) + 'px, 0px)'  
        # $(@).data 'bottom', 'transform: translate3d(0px, ' + ( item_max_height * 1 - $(@).height() / 2 ) + 'px, 0px)'

        item_height_margin = item_max_height - $(@).height()
        $(@).attr
          'data-top': 'transform: translate3d(0px, ' + ( item_height_margin / 100 * -1 ) + 'px, 0px)'  
          'data-bottom': 'transform: translate3d(0px, ' + ( item_height_margin + item_height_margin / 100 ) + 'px, 0px)'

      # Clear
      item_array = []
      

  s = skrollr.init()


  console.log 'test'

















































