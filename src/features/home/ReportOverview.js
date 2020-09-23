import React from 'react';
import { Row, Col, Card, Table, Button, Form, Space, DatePicker, Typography, Select } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { reportOverview } from './mock/shops';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
const { Option } = Select;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'employeeName',
    key: 'employeeName',
  },
  {
    title: 'Tên cửa hàng',
    dataIndex: 'shopName',
    key: 'shopName',
  },
  {
    title: 'Địa chỉ cửa hàng',
    dataIndex: 'shopAddress',
    key: 'shopAddress',
  },
  {
    title: 'HPC',
    dataIndex: 'hpc',
    key: 'hpc',
  },
  {
    title: 'IC',
    dataIndex: 'ic',
    key: 'ic',
  },
  {
    title: 'Mẫu thực tế IC',
    dataIndex: 'icReal',
    key: 'icReal',
  },
  {
    title: 'Mẫu thực tế HPC',
    dataIndex: 'hpcReal',
    key: 'hpcReal',
  },
  {
    title: 'Xanh',
    dataIndex: 'green',
    key: 'green',
  },
  {
    title: 'Vàng',
    dataIndex: 'yellow',
    key: 'yellow',
  },
  {
    title: 'Đỏ',
    dataIndex: 'red',
    key: 'red',
  },
];

const labelCol = {
  span: 24,
};

const ReportOverview = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card title="Báo cáo tóm tắt" bordered={false} style={{ width: '100%' }}>
          <Row>
            <Col span={24}>
              <Form form={form} initialValues={{}} onValuesChange={() => {}}>
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
                    <Form.Item label="Mã nhân viên" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn mã nhân viên"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="sunsilk">Sunsilk</Option>
                        <Option value="ps">P/S</Option>
                        <Option value="cif">Cif</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Mã cửa hàng" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn mã cửa hàng"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="sunsilk">Sunsilk</Option>
                        <Option value="ps">P/S</Option>
                        <Option value="cif">Cif</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row justify="end">
                  <Col>
                    <Form.Item>
                      <Space size="middle">
                        <Button icon={<SearchOutlined />}>Tìm kiếm</Button>
                        <Button icon={<DownloadOutlined />} type="primary">
                          Export to Excel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table columns={columns} dataSource={reportOverview()} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportOverview;
