import React, { Component } from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import IsoWidgetBox from './widget-box';
import CardWidget from './card/card-widgets';
import ProgressWidget from './progress/progress-widget';
import SingleProgressWidget from './progress/progress-single';
import ReportsWidget from './report/report-widget';
import StickerWidget from './sticker/sticker-widget';
import SaleWidget from './sale/sale-widget';
import VCardWidget from './vCard/vCard-widget';
import SocialWidget from './social-widget/social-widget';
import SocialProfile from './social-widget/social-profile-icon';
import userpic from '../../image/user1.png';
import { TableViews, tableinfos, dataList } from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import { StackedAreaChart } from '../Charts/recharts/charts/';
import { GoogleChart } from '../Charts/googleChart/';
import * as googleChartConfigs from '../Charts/googleChart/config';
import IntlMessages from '../../components/utility/intlMessages';

const tableDataList = clone(dataList);

export default class extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
    };

    const chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {},
      },
    ];

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500,
    };
    return (
      <LayoutWrapper>
        <div style={wisgetPageStyle}>
          <Row style={rowStyle} gutter={0} justify="start">

            {/* Report Widget, 이번달 입금 현황(PPT) */}
            <Col lg={10} md={12} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <ReportsWidget
                  label={<IntlMessages id="이번달 입금 현황" />}
                  details={<IntlMessages id="각 세부사항은 '마이 페이지'에서 파악할 수 있습니다." />}
                >
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="맴버 A" />
                    }
                    percent={70}
                    barHeight={7}
                    status="active"
                    bgColor="red"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="맴버 B" />
                    }
                    percent={100}
                    barHeight={7}
                    bgColor="red"
                    status="active"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="맴버 C" />
                    }
                    percent={30}
                    barHeight={7}
                    bgColor="blue"
                    status="active"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="맴버 D" />
                    }
                    percent={50}
                    barHeight={7}
                    bgColor="blue"
                    status="active"
                    info={true} // Boolean: true, false
                  />
                </ReportsWidget>
              </IsoWidgetsWrapper>
            </Col>
            
            {/* TABLE, 투자종목 및 등락 테이블 */}
            <Col lg={14} md={12} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <IsoWidgetBox>
                  <TableViews.meetingView
                    tableInfo={tableinfos[0]}
                    { ...tableDataList.size = 5 }
                    dataList={tableDataList}
                  />
                </IsoWidgetBox>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          
          <Row style={rowStyle} gutter={0} justify="start">
            
            {/* 1번, 공지사항 */}
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <StickerWidget
                  number={<IntlMessages id="8" />}
                  text={<IntlMessages id="개의 공지사항이 있습니다." />}
                  icon="ion-android-alert"
                  fontColor="#ffffff"
                  bgColor="#CC3679"
                />
              </IsoWidgetsWrapper>
            </Col>

            {/* 2번, 신설종목 */}
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <StickerWidget
                  number={<IntlMessages id="25" />}
                  text={<IntlMessages id="개의 모임이 신설되었습니다." />}
                  icon="ion-ios-pulse"
                  fontColor="#ffffff"
                  bgColor="#42A5F6"
                />
              </IsoWidgetsWrapper>
            </Col>

            {/* 3번, 알림 */}
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <StickerWidget
                  number={<IntlMessages id="10" />}
                  text={<IntlMessages id="개의 모임후기가 작성되었습니다!" />}
                  icon="ion-chatbubbles"
                  fontColor="#ffffff"
                  bgColor="#7ED320"
                />
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          
          <Row style={rowStyle} gutter={0} justify="start">

            {/* Sale Widget, 공지사항 1 */}
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <SaleWidget
                  label={<IntlMessages id="공지사항" />}
                  title={<IntlMessages id="서버장애 보상안내" />}
                  date={<IntlMessages id="18-08-31" />}
                  details={<IntlMessages id="자세한 사항은 게시판을 참조해주세요." />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
            
            {/* Sale Widget, 모임신설 2 */}
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="신설모임" />}
                  title={<IntlMessages id="해맑은 장사꾼(계모임)" />}
                  date={<IntlMessages id="18-08-31" />}
                  details={<IntlMessages id="자세한 사항은 게시판을 참조해주세요." />}
                  fontColor="#00BFFF"
                />
              </IsoWidgetsWrapper>
            </Col>

            {/* Sale Widget, 베스트 게시글 3 */}  
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="오늘의 베스트" />}
                  title={<IntlMessages id="원미동 사람들 모임 후기!" />}
                  date={<IntlMessages id="18-08-30" />}
                  details={<IntlMessages id="자세한 사항은 게시판을 참조해주세요." />}
                  fontColor="#A5DF00"
                />
              </IsoWidgetsWrapper>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={0} justify="start">
            
          </Row>
        </div>
      </LayoutWrapper>
    );
  }
}
