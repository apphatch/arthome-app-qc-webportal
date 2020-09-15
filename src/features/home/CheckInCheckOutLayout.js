import React from 'react';
import _ from 'lodash';

import { Row, Col, Card, Table, Tag } from 'antd';

import { connect } from 'react-redux';
import homeActions from './redux/actions';

const CheckInCheckOutLayout = ({ dispatch, home }) => {
  const { listCheckInCheckOut } = home;

  React.useEffect(() => {
    dispatch(homeActions.getCheckInCheckOut());
  }, [dispatch]);

  return (
    <Row>
      <Col span={24}>
        <Card title="Check In / Check Out" bordered={false} style={{ width: '100%' }}>
          <Table
            columns={[
              {
                title: '#',
                dataIndex: 'id',
                key: 'id',
              },
              {
                title: 'User Id',
                dataIndex: 'user_id',
                key: 'user_id',
              },
              {
                title: 'Status',
                dataIndex: 'is_checkin',
                key: 'status',
                render: item => {
                  if (item) {
                    return <Tag color="green">checked</Tag>;
                  } else {
                    return <Tag color="red">not checked</Tag>;
                  }
                },
              },
            ]}
            dataSource={listCheckInCheckOut}
          />
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
