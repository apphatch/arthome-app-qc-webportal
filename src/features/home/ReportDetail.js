import React from 'react';
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
  Input,
  Space,
  DatePicker,
  Typography,
  Select,
  Tag,
  Image,
} from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { reportDetail as reportMock } from './mock/shops';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
const { Option } = Select;

const columns = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    width: 40,
  },
  {
    title: 'Tên nhân viên',
    dataIndex: 'employeeName',
    key: 'employeeName',
    ellipsis: true,
    width: 100,
  },
  {
    title: 'Tên cửa hàng',
    dataIndex: 'shopName',
    key: 'shopName',
    ellipsis: true,
    width: 150,
  },
  {
    title: 'Địa chỉ cửa hàng',
    dataIndex: 'shopAddress',
    key: 'shopAddress',
    ellipsis: true,
    width: 150,
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
    width: 100,
  },
  {
    title: 'Cảnh báo',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (status) => {
      return <Tag color={status}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Lỗi',
    dataIndex: 'errorName',
    key: 'errorName',
    width: 80,
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'image',
    key: 'image',
    width: 100,
    render: (img) => {
      return <Image width={100} src={img} />;
    },
  },
  // {
  //   title: 'Actions',
  //   dataIndex: 'actions',
  //   width: 150,
  //   render: (_, record) => {
  //     return (
  //       <Space size="small">
  //         <Button type="link" onClick={() => {}}>
  //           Edit
  //         </Button>
  //         <Button type="link" onClick={() => {}}>
  //           Delete
  //         </Button>
  //       </Space>
  //     );
  //   },
  // },
];

const labelCol = {
  span: 24,
};

const ReportDetail = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={24}>
        <Card title="Báo cáo chi tiết" bordered={false} style={{ width: '100%' }}>
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
                      <RangePicker style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Ngành hàng" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn ngành hàng"
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
                    <Form.Item label="Nhãn hàng" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn nhãn hàng"
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
                    <Form.Item label="SKU" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn SKU"
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
                    <Form.Item label="Mức cảnh báo" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn mức cảnh báo"
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
                    <Form.Item label="Lỗi" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn lỗi"
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
                <Row gutter={24}>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã nhân viên" labelCol={labelCol}>
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã cửa hàng" labelCol={labelCol}>
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Loại cửa hàng" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn loại"
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
                    <Form.Item label="Địa điểm" labelCol={labelCol}>
                      <Select
                        showSearch
                        placeholder="Chọn địa điểm"
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
              <Table columns={columns} dataSource={reportMock()} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportDetail;
