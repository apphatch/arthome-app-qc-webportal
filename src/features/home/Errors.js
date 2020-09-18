import React from 'react';
import { Row, Col, Card, Table, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { errors as errorsMock } from './mock/shops';

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Error Name',
    dataIndex: 'errorName',
    key: 'errorName',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => {
      return (
        <Space size="middle">
          <Button type="link" onClick={() => {}}>
            Edit
          </Button>
          <Button type="link" onClick={() => {}}>
            Delete
          </Button>
        </Space>
      );
    },
  },
];

const Errors = () => {
  return (
    <Row>
      <Col span={24}>
        <Card title="Errors List" bordered={false} style={{ width: '100%' }}>
          <Row>
            <Col span={4}>
              <Button
                type="primary"
                style={{
                  marginBottom: 20,
                }}
                icon={<PlusOutlined />}
              >
                Add new
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={errorsMock()} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Errors;
