/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Row, Col, Card, Table, Button, Form, Input, Space, DatePicker, Typography } from 'antd';
import { SearchOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { shops as shopsMock } from './mock/shops';
console.log('shopsMock', shopsMock());

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Store Type',
    dataIndex: 'storeType',
    key: 'storeType',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'NPP',
    dataIndex: 'npp',
    key: 'npp',
  },
  {
    title: 'Store Name',
    dataIndex: 'storeName',
    key: 'storeName',
  },
  {
    title: 'Store Address',
    dataIndex: 'storeAddress',
    key: 'storeAddress',
  },
  {
    title: 'Quận',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Mã NV',
    dataIndex: 'employeeId',
    key: 'employeeId',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => {
      return (
        <Space size="middle">
          <a>Edit</a>
          <a className="ant-dropdown-link">Delete</a>
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

const Shops = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card title="Shops List" bordered={false} style={{ width: '100%' }}>
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
                <Form.Item>
                  <Input placeholder="Name or shop ID" />
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
                    Create
                  </Button>
                  <Button
                    style={{
                      marginLeft: 10,
                    }}
                    icon={<DownloadOutlined />}
                  >
                    Export to Excel
                  </Button>
                </Form.Item>
              </Form>
              <Table columns={columns} dataSource={shopsMock()} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Shops;
