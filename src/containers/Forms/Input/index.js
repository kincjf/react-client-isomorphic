import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../../components/uielements/input';
import InputNumber from '../../../components/uielements/InputNumber';
import Select, { SelectOption } from '../../../components/uielements/select';
import DatePicker from '../../../components/uielements/datePicker';
import AutoComplete from '../../../components/uielements/autocomplete';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper.js';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { rtl } from '../../../settings/withDirection';

const Option = SelectOption;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 80 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 70 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

export default class extends Component {
  state = {
    dataSource: []
  };
  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@naver.com`, `${value}@daum.net`]
    });
  };

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
        <PageHeader>
          <IntlMessages id="사용자 정보 수정" />
        </PageHeader>

        <Row style={rowStyle} gutter={gutter} justify="start">

          { /*Basic Usage, 이름변경*/ }
          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="이름 변경" />}
              subtitle={<IntlMessages id="2~12자, 특수문자/띄어쓰기 불가, 닉네임은 변경 시점으로부터 6개월 뒤 변경 가능합니다." />}
            >
              <ContentHolder>
                <Input placeholder="이름" />
                <Button type="primary" style={{margin: '100px 8px 8px 0'}} >
                  {<IntlMessages id="확인" />}
                </Button>
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} sm={12} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="비밀번호 변경" />}
              subtitle={<IntlMessages id="8자~30자이내, 특수문자(!,@,#,$..) 를 하나이상 포함하여 주십시오" />}
            >
              <ContentHolder>
                <Input
                  placeholder="비밀번호"
                  style={{ marginBottom: '15px' }}
                />
                <Input
                  placeholder="비밀번호 확인"
                  style={{ marginBottom: '15px' }}
                />
                <Button type="primary" style={{margin: '30px 8px 8px 0'}}>
                  {<IntlMessages id="확인" />}
                </Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box
              title={<IntlMessages id="개인정보 입력" />}
              subtitle={<IntlMessages id="집, 전화번호, 주소지, 연동계좌정보 등을 입력하여 주십시오." />}
            >
              <ContentHolder>
                { /*이메일*/ }
                <InputGroup compact style={{ marginBottom: '15px' }}>
                  <AutoComplete
                    dataSource={this.state.dataSource}
                    style={{ width: '55%' }}
                    onChange={this.handleChange}
                    placeholder="이메일"
                  />
                </InputGroup>

                { /*전화번호*/ }
                <InputGroup compact style={{ marginBottom: '15px' }}>
                  <Select defaultValue="010">
                    <Option value="010">010</Option>
                    <Option value="011">011</Option>
                    <Option value="02">02</Option>
                  </Select>
                  <Input
                    style={{ width: '50%' }}
                    placeholder="전화번호"
                  />
                </InputGroup>

                { /*주소지*/ }
                <InputGroup compact style={{ marginBottom: '15px' }}>
                  <Select defaultValue="areaValue1">
                    <Option value="areaValue1">서울/경기</Option>
                    <Option value="areaValue2">충청/대전</Option>
                    <Option value="areaValue3">전라/광주</Option>
                    <Option value="areaValue4">경북/대구</Option>
                    <Option value="areaValue5">경남/부산</Option>
                    <Option value="areaValue6">강원/제주</Option>
                  </Select>
                  <Input
                    style={{ width: '50%' }}
                    placeholder="주소지 세부사항"
                  />
                </InputGroup>

                { /*은행정보*/ }
                <InputGroup compact style={{ marginBottom: '15px' }}>
                  <Select defaultValue="bankValue1" style={{ width: '30%' }}>
                    <Option value="bankValue1">KB국민은행</Option>
                    <Option value="bankValue2">NH농협</Option>
                  </Select>
                </InputGroup>
                <InputGroup compact style={{ marginBottom: '15px' }}>
                  <Input
                    style={{ width: '55%' }}
                    placeholder="계좌번호"
                  />
                </InputGroup>

                <Button type="primary" style={{margin: '0 8px 8px 0'}}>
                  {<IntlMessages id="확인" />}
                </Button>
              </ContentHolder>
            </Box>
          </Col>
        </Row> 

      </LayoutWrapper>
    );
  }
}
