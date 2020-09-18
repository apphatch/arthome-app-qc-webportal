import React from 'react';
import { Row, Col, Card, Table, Button, Form, Input, Space, DatePicker, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { users as usersMock } from './mock/shops';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Full name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'District',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
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

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 4 },
};

const buttonItemLayout = {
  wrapperCol: { span: 6, offset: 0 },
};

const Users = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card title="Users List" bordered={false} style={{ width: '100%' }}>
          <Row>
            <Col span={24}>
              <Form
                {...layout}
                layout="horizontal"
                form={form}
                initialValues={{}}
                onValuesChange={() => {}}
              >
                <Paragraph
                  strong
                  style={{
                    marginBottom: 10,
                  }}
                >
                  Filters
                </Paragraph>
                <Form.Item>
                  <RangePicker
                    style={{
                      width: '100%',
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Name or employee ID" />
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                  <Button icon={<SearchOutlined />}>Search</Button>
                  <Button
                    type="primary"
                    style={{
                      marginLeft: 10,
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add new
                  </Button>
                </Form.Item>
              </Form>
              <Table columns={columns} dataSource={usersMock()} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Users;
