import React from 'react'

export default class Tempalink extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log(window.location.origin + '/' + this.props.token);
    const el = document.createElement('textarea');
    el.value = window.location.origin + '/' + this.props.token;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.refs.input.getDOMNode().setSelectionRange(0, 9999)
  }

  render() {
    var url = window.location.origin + '/' + this.props.token
    return <input
    className = "tempalink"
    onClick = {
      this.onClick
    }
    readOnly
    ref = "input"
    type = "text"
    value = {
      url
    }
    />
  }

}
