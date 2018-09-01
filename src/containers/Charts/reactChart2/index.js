import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Async from '../../../helpers/asyncComponent';
import basicStyle from '../../../settings/basicStyle';
import ChartWrapper from '../chart.style';
import IntlMessages from '../../../components/utility/intlMessages';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import Box from '../../../components/utility/box';
import PageHeader from '../../../components/utility/pageHeader';
import ContentHolder from '../../../components/utility/contentHolder';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';

const Pie = props => (
  <ChartWrapper>
    <Async
      load={import(/* webpackChunkName: "ReactChart2-pie" */ './components/pie/pie')}
      componentProps={props}
    />
  </ChartWrapper>
);
const PieTwo = props => (
  <ChartWrapper>
    <Async
      load={import(/* webpackChunkName: "ReactChart2-pie" */ './components/pie/pieTwo')}
      componentProps={props}
    />
  </ChartWrapper>
);

export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>
          <IntlMessages id="해맑은 장사꾼(계모임)" />
        </PageHeader>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box title="개요" subtitle={<IntlMessages id="자영업, 전주시" />}>
              <ContentHolder>
                <IntlMessages id="전주시 소상공인들의 휴식처입니다." />
              </ContentHolder>
              <ContentHolder>
                <Button type="primary" style={{margin: '20px 8px 8px 0'}} >
                    {<IntlMessages id="가입하기" />}
                </Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="모임자 가입기간 분포">
              <ContentHolder>
                <Pie />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="모임자 연령분포">
              <ContentHolder>
                <PieTwo />
              </ContentHolder>
            </Box>
          </Col>
        </Row>

      </LayoutWrapper>
    );
  }
}
