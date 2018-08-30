import React, { Component } from 'react';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper.js';
import TableDemoStyle from './demo.style';
import fakeData from '../fakeData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';

const dataList = new fakeData(10);

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'FundView':
        Component = TableViews.FundView;
        break;
      case 'TranscationView':
        Component = TableViews.TransactionView;
        break;
      case 'NotTransView':
        Component = TableViews.NotTransView;
        break;
      case 'TotalView':
        Component = TableViews.TotalView;
        break;
      default:
        Component = TableViews.FundView;
        break;
    }
    return <Component tableInfo={tableInfo} dataList={dataList} />;
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
