import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import { TextCell } from '../../../components/tables/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    default:
      return TextCell(value);
  }
};

const columns = [
  /* fakeData */
  // 0, 모임명
  {
    title: <IntlMessages id="모임명" />,
    key: 'fundNameKey',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'fundNameKey')
  },
  // 1, 투자금액
  {
    title: <IntlMessages id="투자금액" />,
    key: 'initialTotalPrice',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'initialTotalPrice')
  },
  // 2, 전체 자본금
  {
    title: <IntlMessages id="전체 자본금" />,
    key: 'currentTotalPrice',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'currentTotalPrice')
  },
  // 3, 모임/조합 시작일
  {
    title: <IntlMessages id="모임/조합 시작일" />,
    key: 'startedAt',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'startedAt')
  },
  // 4, 모임/조합 종료일
  {
    title: <IntlMessages id="모임/조합 종료일" />,
    key: 'expiredAt',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'expiredAt')
  },
  /* transactionData */
  // 5, 거래(요청)시간
  {
    title: <IntlMessages id="거래(요청)시간" />,
    key: 'requestAt',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'requestAt')
  },
  // 6, 요청종류
  {
    title: <IntlMessages id="요청종류" />,
    key: 'requestType',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'requestType')
  },
  // 7, 금액
  {
    title: <IntlMessages id="금액" />,
    key: 'fundingPrice',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'fundingPrice')
  },
  // 8, 대상
  {
    title: <IntlMessages id="대상" />,
    key: 'personKey',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'personKey')
  },
  // 9, 사유
  {
    title: <IntlMessages id="사유" />,
    key: 'reason',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'reason')
  },
  // 10, 동의 여부
  {
    title: <IntlMessages id="동의 여부" />,
    key: 'agreement',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'agreement')
  },
];
const simpleColumns = [columns[0], columns[1], columns[2], columns[3], columns[4]];
const trnasColumns = [columns[5], columns[6], columns[7], columns[8], columns[9], columns[10]];
const unsigndColumns = [columns[5], columns[0], columns[6], columns[8], columns[9], columns[10]];

const tableinfos = [
  {
    title: '모임목록',
    value: 'meetingView',
    columns: clone(simpleColumns)
  },
  {
    title: '거래내역',
    value: 'transView',
    columns: clone(trnasColumns)
  },
  {
    title: '미채결내역',
    value: 'unsigndView',
    columns: clone(unsigndColumns)
  },
  {
    title: '수익률 총계',
    value: 'totalView',
    columns: clone(simpleColumns)
  }
];
export { columns, tableinfos };
