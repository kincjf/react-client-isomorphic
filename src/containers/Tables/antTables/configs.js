import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import {
  TextCell,
  PercentCell
} from '../../../components/tables/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'PercentCell':
      return PercentCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  // 펀드 종목
  {
    title: <IntlMessages id="투자 종목" />,
    key: 'investFundKey',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'investFundKey')
  },
  // 매수 가격
  {
    title: <IntlMessages id="매수 가격" />,
    key: 'initialPrice',
    width: 100,
    render: (object) => renderCell(object, 'TextCell', 'initialPrice')
  },
  // 현재 가격
  {
    title: <IntlMessages id="현재 가격" />,
    key: 'price',
    width: 200,
    render: (object) => {
      // let profit = object.current - object.initialPrice;
      // let profitRate = object.totalPrice/object.current * 100;

      // object.profit = profit;
      // object.profitRate = profitRate;

      renderCell(object, 'TextCell', 'price')
    } 
  },
  // 등락
  {
    title: <IntlMessages id="등락" />,
    key: 'incRate',
    width: 200,
    render: object => renderCell(object, 'PercentCell', 'incRate')
  },
  // 주문시간
  {
    title: <IntlMessages id="주문시간" />,
    key: 'requestAt',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'requestAt')
  },
  // 거래종류
  {
    title: <IntlMessages id="거래종류" />,
    key: 'requestType',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'requestAt')
  }
];
const fundColumns = [columns[0], columns[1], columns[2], columns[3]];
const transColumns = [columns[4], columns[0], columns[5], columns[2]];

const tableinfos = [
  {
    title: '보유펀드',
    value: 'fundView',
    columns: clone(fundColumns)
  },
  {
    title: '거래내역',
    value: 'TransactionView',
    columns: clone(transColumns)
  },
  {
    title: '미채결',
    value: 'NotTransView',
    columns: clone(fundColumns)
  },
  {
    title: '수익률 총계',
    value: 'TotalView',
    columns: clone(fundColumns)
  }
];
export { columns, tableinfos };
