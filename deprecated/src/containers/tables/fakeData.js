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

const tableData = 
  [{
    "id": 0,
    "key": 0,
    "meetingKey": "치킨프렌차이즈 계모임",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  },
  {
    "id": 1,
    "key": 1,
    "meetingKey": "전주시 어머니회",
    "fundingPrice": "50,000",
    "totalPrice": "800,000",
    "startingDate": "2016-09-01",
    "endingDate": "2020-09-01",
  },
  {
    "id": 2,
    "key": 2,
    "meetingKey": "전주이씨 종친회",
    "fundingPrice": "500,000",
    "totalPrice": "5,800,000",
    "startingDate": "2010-10-01",
    "endingDate": "2020-10-01",
  },
  {
    "id": 3,
    "key": 3,
    "meetingKey": "ect.",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  },
  {
    "id": 4,
    "key": 4,
    "meetingKey": "ect.",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  },
  {
    "id": 5,
    "key": 5,
    "meetingKey": "ect.",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  },
  {
    "id": 6,
    "key": 6,
    "meetingKey": "ect.",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  },
  {
    "id": 7,
    "key": 7,
    "meetingKey": "ect.",
    "fundingPrice": "150,000",
    "totalPrice": "1,200,000",
    "startingDate": "2017-09-01",
    "endingDate": "2018-09-01",
  }];

const sortOption = {};
class fakeData {
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
export default fakeData;
