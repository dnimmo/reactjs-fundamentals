var React = require('react')
var ReactDOM = require('react-dom')

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <<p>Hellow World!</p>
      </div>
    )
  }
})
ReactDOM.render(<HellowWorld />), document.getElementById('app')