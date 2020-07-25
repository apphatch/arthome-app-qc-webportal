import React from 'react';
import _ from 'lodash';

import { Row, Col, Card, Table, Tag } from 'antd';

import { connect } from 'react-redux';
import homeActions from './redux/actions';

const DownloadLayout = ({ dispatch, home }) => {
  const { listCheckInCheckOut } = home;

  React.useEffect(() => {
    // dispatch(homeActions.getCheckInCheckOut());
  }, [dispatch]);

  return (
    <Row>
      <Col span={24}>
        <Card title="Download" bordered={false} style={{ width: '100%' }}>
          
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
export default connect(mapStateToProps)(DownloadLayout);
