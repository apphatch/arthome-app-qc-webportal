import React from 'react';
import moment from 'moment';

import { Row, Col, Card, Table, Tag, Typography, Input, Image, Space } from 'antd';

import { connect } from 'react-redux';
import homeActions from './redux/actions';
const url = process.env.REACT_APP_API_URL;

const { Text } = Typography;
const { Search } = Input;

const CheckInCheckOutLayout = ({ dispatch, home }) => {
  const { listCheckInCheckOut } = home;

  console.log(listCheckInCheckOut);

  React.useEffect(() => {
    dispatch(homeActions.getCheckInCheckOut());
  }, [dispatch]);

  const onSearch = value => {
    console.log(value);
  };

  return (
    <Row>
      <Col span={24}>
        <Card title="Check In / Check Out" bordered={false} style={{ width: '100%' }}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table
                columns={[
                  {
                    title: '#',
                    dataIndex: 'id',
                    key: 'id',
                  },
                  {
                    title: 'User',
                    dataIndex: 'user',
                    key: 'user',
                    render: u => {
                      return <Text>{u.name}</Text>;
                    },
                  },
                  {
                    title: 'Shop',
                    dataIndex: 'shop',
                    key: 'shop',
                    render: data => {
                      return (
                        <Space direction="vertical">
                          <Text>{data.name}</Text>
                          <Text>{data.importing_id}</Text>
                        </Space>
                      );
                    },
                  },
                  {
                    title: 'Time',
                    dataIndex: 'time',
                    key: 'time',
                    render: (v, record) => {
                      const timeCheckin = moment(v).format('DD-MM-YYYY HH:mm:ss');
                      const timeCheckout =
                        record.user_checkout !== null && record.user_checkout.time !== null
                          ? moment(record.user_checkout.time).format('DD-MM-YYYY HH:mm:ss')
                          : '';
                      return (
                        <Space direction="vertical">
                          <Text>{`Checkin: ${timeCheckin}`}</Text>
                          <Text>{`Checkout: ${timeCheckout}`}</Text>
                        </Space>
                      );
                    },
                  },
                  {
                    title: 'Photos',
                    dataIndex: 'photos',
                    key: 'photos',
                    render: (photo, record) => {
                      return (
                        <>
                          <Image
                            src={`${url}${photo[0].image}`}
                            height={90}
                            width={60}
                            preview={true}
                          />
                          {record.user_checkout.image && (
                            <Image
                              src={`${url}${record.user_checkout.image}`}
                              height={90}
                              width={60}
                              preview={true}
                            />
                          )}
                        </>
                      );
                    },
                  },
                ]}
                expandable={{
                  expandedRowRender: record => {
                    return (
                      <Row gutter={[10, 10]}>
                        {record.shop_checkout_photos !== null &&
                          record.shop_checkout_photos.length > 0 &&
                          record.shop_checkout_photos.map(
                            photo =>
                              photo.path !== null && (
                                <Col key={photo.id} span={4}>
                                  <Image
                                    alt="example"
                                    src={`${url}${photo.image}`}
                                    preview={true}
                                  />
                                </Col>
                              ),
                          )}
                      </Row>
                    );
                  },
                  rowExpandable: record => record.shop_checkout_photos.length > 0,
                }}
                dataSource={listCheckInCheckOut}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};
export default connect(mapStateToProps)(CheckInCheckOutLayout);
