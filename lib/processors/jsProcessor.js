'use strict'

const fs = require('fs')

let content = ''
let fixer = require('./fixer')
let debug = function(msg) {
    console.log(msg)
}

module.exports = {
  preprocess: function (text, filename) {
    content = fs.readFileSync(filename, 'utf-8')
    return [content]
  },
  postprocess: function (messages, filename) {

    var message = messages[0]
    let msg_len = message.length
    if (msg_len > 0) {
      debug(filename)
      message.forEach(function (m) {
        debug(m.line + ':' + m.column + '\t' + m.message)
      })
      let res = fixer.applyFixes({
        text: content
      }, message)

      if (res.fixed && res.messages.length !== msg_len) {
        message = res.messages
        fs.writeFileSync(filename, res.output, 'utf-8')
      }
    }
    return message
  }
}