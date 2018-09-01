

const tableData = 
  [{
    "id": 0,
    "key": 0,
    "requestAt": "2018-08-22, 16:26",
    "requestType": "출자금증액",
    "fundingPrice": "50,000",
    "personKey": "김신형",
    "reason": "조합원 추가 초대",
    "agreement": "미동의"
  },
  {
    "id": 1,
    "key": 1,
    "requestAt": "2018-08-12, 20:24",
    "requestType": "출금",
    "fundingPrice": "150,000",
    "personKey": "김금자",
    "reason": "11차 곗돈 수령",
    "agreement": "동의"
  },
  {
    "id": 2,
    "key": 2,
    "requestAt": "2018-08-22, 16:26",
    "requestType": "출금",
    "fundingPrice": "500,000",
    "personKey": "농사머신",
    "reason": "농사 장비 구매",
    "agreement": "동의"
  },
  {
    "id": 3,
    "key": 3,
    "requestAt": "2099-01-01, 00:00",
    "requestType": "출금",
    "fundingPrice": "100,000",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },
  {
    "id": 4,
    "key": 4,
    "requestAt": "2099-01-01, 00:00",
    "requestType": "출금",
    "fundingPrice": "100,000",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },
  {
    "id": 5,
    "key": 5,
    "requestAt": "2099-01-01, 00:00",
    "requestType": "출금",
    "fundingPrice": "100,000",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },
  {
    "id": 6,
    "key": 6,
    "requestAt": "2099-01-01, 00:00",
    "requestType": "출금",
    "fundingPrice": "100,000",
    "personKey": "ect.",
    "reason": "ect.",
    "agreement": "동의"
  },

];

const sortOption = {};
class transactionData {
  constructor(size) {
    this.size = size || tableData.length || 2000;
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
export default transactionData;
