import React, { useEffect, useMemo } from 'react';
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
  // Tag,
  // Image,
} from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getReportDetail } from './redux/actions';
import { random as fakerRandom } from 'faker';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
const { Option } = Select;

const labelCol = {
  span: 24,
};

const ReportDetail = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const reportDetailState = useSelector((state) => state.home.reportDetail);
  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(getReportDetail());
  }, [dispatch]);

  const tblConfigs = useMemo(() => {
    if (reportDetailState) {
      const firstItem = reportDetailState[0];
      const columns = firstItem.map((item) => ({
        title: item,
        dataIndex: item,
        key: item,
      }));
      const data = reportDetailState.filter((_, index) => index !== 0);
      const tblData = data.map((item) => {
        let obj = {
          id: fakerRandom.uuid(),
        };
        item.forEach((val, idx) => {
          obj[firstItem[idx]] = val;
        });

        return obj;
      });
      return {
        columns,
        data: tblData,
      };
    }
    return [];
  }, [reportDetailState]);

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
                      <RangePicker style={{ width: '100%' }} disabled={loading} />
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
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
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
                      <Input placeholder="" disabled={loading} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã cửa hàng" labelCol={labelCol}>
                      <Input placeholder="" disabled={loading} />
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
                        disabled={loading}
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
                        disabled={loading}
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
                        <Button icon={<SearchOutlined />} disabled={loading}>
                          Tìm kiếm
                        </Button>
                        <Button icon={<DownloadOutlined />} type="primary" disabled={loading}>
                          Export to Excel
                        </Button>
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table
                columns={tblConfigs.columns}
                dataSource={tblConfigs.data}
                rowKey="id"
                loading={loading}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportDetail;
