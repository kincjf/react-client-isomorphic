import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import TableWrapper from '../antTable.style';
import IntlMessages from '../../../../components/utility/intlMessages';
import Async from '../../../../helpers/asyncComponent';
import ChartWrapper from '../chart.style';
import PageHeader from '../../../../components/utility/pageHeader';
import LayoutWrapper from '../../../../components/utility/layoutWrapper.js';
import Box from '../../../../components/utility/box';

const Line = props => (
  <ChartWrapper>
    <Async
      load={import(/* webpackChunkName: "ReactChart2-line" */ '../../../Charts/reactChart2/components/line/line')}
      componentProps={props}
    />
  </ChartWrapper>
);

export default class extends Component {
  render() {
    const rowStyle = {
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap'
    };
    const colStyle = {
      marginBottom: '16px'
    };
    const gutter = 16;
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="수익률 총합" />
        </PageHeader>

        <Row style={rowStyle} gutter={gutter} justify="start">    
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Line />
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">    
          <Col md={4} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="최초 모집금액" />}
              subtitle={<IntlMessages id="600,000 원" />}
            />
          </Col>
          <Col md={4} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="현재 보유금액" />}
              subtitle={<IntlMessages id="200,000 원" />}
            />
          </Col>
          <Col md={4} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="조합원 수" />}
              subtitle={<IntlMessages id="20 명" />}
            />
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}