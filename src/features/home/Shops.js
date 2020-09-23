import React from 'react';
import { Row, Col, Card, Table, Button, Form, Input, Space, DatePicker, Typography } from 'antd';
import { SearchOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { shops as shopsMock } from './mock/shops';

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

const labelCol = {
  span: 24,
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
                // {...layout}
                // layout="horizontal"
                form={form}
                initialValues={{}}
                onValuesChange={() => {}}
              >
                <Row gutter={24}>
                  <Paragraph
                    strong
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    Filters
                  </Paragraph>
                </Row>

                <Row gutter={24}>
                  <Col span={4}>
                    <Form.Item label="Ngày bắt đầu/kết thúc" labelCol={labelCol}>
                      <RangePicker />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã nhân viên" labelCol={labelCol}>
                      <Input placeholder="Name or employee ID" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã cửa hàng" labelCol={labelCol}>
                      <Input placeholder="Name or shop ID" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row justify="end">
                  <Col>
                    <Form.Item>
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
                      <Button
                        style={{
                          marginLeft: 10,
                        }}
                        icon={<DownloadOutlined />}
                      >
                        Export to Excel
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
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
