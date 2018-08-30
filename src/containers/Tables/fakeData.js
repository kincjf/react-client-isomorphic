const API_URL = "http://13.77.161.105:3000/api/Fund";
/*
const tableData = JSON.parse(getAPIFund());

async function getAPIFund() {
  let result;
  
  await fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    result = data;
  })
  .catch(error => error);

  console.log(result);
  return result;
}*/

const tableData = JSON.parse(
  `[{
  "id": 0,
  "key": 0,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 1,
  "key": 1,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 2,
  "key": 2,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 3,
  "key": 3,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 4,
  "key": 4,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 5,
  "key": 5,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 6,
  "key": 6,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 7,
  "key": 7,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 8,
  "key": 8,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}, {
  "id": 9,
  "key": 9,
  "startedAt": "2017-08-20",
  "expiredAt": "2019-80-20",
  "investFundKey": "부동산투자신탁1",
  "initialPrice": "1,000,000",
  "price": "1,060,000",
  "incRate": "+6.00%",
  "initialTotalPrice": "172,000,000",
  "totalPrice": "182,900,780",
  "requestAt": "2017-08-24, 14:37",
  "requestType": "매수"
}]`
);

const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * (-1);
    }
    return sortVal;
  }
}
export default fakeData;
