import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import Async from '../../../helpers/asyncComponent';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import IsoWidgetsWrapper from '../../Widgets/widgets-wrapper';
import StickerWidget from '../../Widgets/sticker/sticker-widget';
import Card from '../../Uielements/Card/card.style';
import Button, { ButtonGroup } from '../../../components/uielements/button';

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
        <PageHeader>{<IntlMessages id="해맑은 장사꾼(계모임)" />}</PageHeader>

        <Row style={rowStyle} gutter={gutter} justify="start">    
          <Col md={8} sm={16} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
                <StickerWidget
                  number={<IntlMessages id="모임 최초 시작일" />}
                  text={<IntlMessages id="1990-12-01" />}
                  icon="ion-android-send"
                  fontColor="#ffffff"
                  bgColor="#ED3752"
                />
              </IsoWidgetsWrapper>
          </Col>
          <Col md={8} sm={16} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <StickerWidget
                number={<IntlMessages id="모임 대표" />}
                text={<IntlMessages id="김금자" />}
                icon="ion-ios-person"
                fontColor="#ffffff"
                bgColor="#E37B40"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={8} sm={16} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <StickerWidget
                number={<IntlMessages id="총 납입 금액" />}
                text={<IntlMessages id="1,000,000 원" />}
                icon="ion-card"
                fontColor="#ffffff"
                bgColor="#324D5C"
              />
            </IsoWidgetsWrapper>
          </Col>
          <Col md={8} sm={16} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <StickerWidget
                number={<IntlMessages id="납입 횟수" />}
                text={<IntlMessages id="10 회" />}
                icon="ion-android-bicycle"
                 fontColor="#ffffff"
                 bgColor="#14B278"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={16} sm={16} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <StickerWidget
                number={<IntlMessages id="모임 시작일" />}
                text={<IntlMessages id="2018-08-13, 13시 00분" />}
                icon="ion-calendar"
                fontColor="#151515"
                bgColor="#F2F2F2"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Card
            title={<IntlMessages id="상기 모임은 아래의 지시사항이 작성되어있습니다." />}
            extra={<a>{<IntlMessages id="동의" />}</a>}
            style={{ width: '100%' }}
          >
            <p>{<IntlMessages id="1. 조원 또는 계원은 매월 10일 전후 회비를 납부바랍니다." />}</p>
            <p>{<IntlMessages id="2. 정기 모임은 매월 4주차에 진행되오나 임의로 변경될 수 있습니다." />}</p>
            <p>{<IntlMessages id="3. 자세한 사항은 조합원 대표님께 문의 바랍니다." />}</p>
          </Card>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={16} sm={16} xs={24} style={colStyle}>
            <Button type="primary" style={{margin: '50px 8px 8px 0'}}>
              {<IntlMessages id="최종 확인" />}
            </Button>
            <Button type="danger" style={{margin: '50px 8px 8px 0'}}>
              {<IntlMessages id="취소" />}
            </Button>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
