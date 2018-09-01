import React, { Component } from 'react';
import fakeData from '../fakeData';
import FacebookDataTable from './facebookDataTable';
import tableinfos from './configs';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const API_URL = "http://13.77.161.105:3000/api/Fund";

let dataList;

export default class FbTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList,
    };
  }
  
  async componentDidMount() {
    const res = await fetch(API_URL);
    const data = await res.json()
    dataList = new fakeData(data, 10);

    this.state.dataList = dataList;
  }

  render() {
    return (<div>        
      <Tabs  type="card">
        {tableinfos.map(tableInfo => <TabPane
          tab={tableInfo.title}
          key={tableInfo.value}
        >
          <FacebookDataTable
            tableInfo={tableInfo}
            dataList={dataList}
          />
        </TabPane>)}   
      </Tabs>
    </div>);
  }
}
