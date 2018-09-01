import React, { Component } from 'react';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper.js';
import TableDemoStyle from './demo.style';
import fakeData from '../fakeData';
import transactionData from '../transactionData';
import unsigndData from '../unsigndData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';

const dataList = new fakeData();
const transList = new transactionData();
const unsigndList = new unsigndData();

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    let TableSet;
    
    switch (tableInfo.value) {
      case 'meetingView':
        Component = TableViews.meetingView;
        TableSet = <Component tableInfo={tableInfo} dataList={dataList} />;
        break;
      case 'transView':
        Component = TableViews.transView;
        TableSet = <Component tableInfo={tableInfo} dataList={transList} />;
        break;
      case 'unsigndView':
        Component = TableViews.unsigndView;
        TableSet = <Component tableInfo={tableInfo} dataList={unsigndList} />;
        break;
      case 'totalView':
        Component = TableViews.totalView;
        TableSet = <Component />;
        break;
      default:
        Component = TableViews.meetingView;
        TableSet = <Component tableInfo={tableInfo} dataList={dataList} />;
        break;
    }
    return TableSet;
  }
  render() {
    return (
      <LayoutContentWrapper>
        <TableDemoStyle className="isoLayoutContent">
          <Tabs className="isoTableDisplayTab">
            {tableinfos.map(tableInfo => (
              <TabPane tab={tableInfo.title} key={tableInfo.value}>
                {this.renderTable(tableInfo)}
              </TabPane>
            ))}
          </Tabs>
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
  }
}
export { TableViews, tableinfos, dataList };
