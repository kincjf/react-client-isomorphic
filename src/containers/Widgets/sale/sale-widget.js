import React, { Component } from 'react';
import { SaleWidgetWrapper } from './style';

export default class extends Component {
  render() {
    const { fontColor, label, title, details, date } = this.props;

    const textStyle = {
      color: fontColor,
      fontWeight: "bold"
    };

    return (
      <SaleWidgetWrapper className="isoSaleWidget">
        <h3 className="isoSaleLabel">{label}</h3>
        <span className="isoSalePrice" style={textStyle}>
          {title}
        </span>
        <p>{date}</p>
        <p className="isoSaleDetails">{details}</p>
      </SaleWidgetWrapper>
    );
  }
}
