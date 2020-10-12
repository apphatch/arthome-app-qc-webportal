import React, { useEffect, useMemo } from 'react';
import { Row, Col, Card, Table, Button, Form, Space, DatePicker, Typography, Select } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getReportOverview } from './redux/actions';
import { random as fakerRandom } from 'faker';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;
const { Option } = Select;

const labelCol = {
  span: 24,
};

const ReportOverview = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const reportOverviewState = useSelector((state) => state.home.reportOverview);
  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(getReportOverview());
  }, [dispatch]);

  const tblConfigs = useMemo(() => {
    if (reportOverviewState) {
      const firstItem = reportOverviewState[0];
      const columns = firstItem.map((item) => ({
        title: item,
        dataIndex: item,
        key: item,
      }));
      const data = reportOverviewState.filter((_, index) => index !== 0);
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
  }, [reportOverviewState]);

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
                      <RangePicker disabled={loading} />
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
                        disabled={loading}
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

              {reportOverviewState ? (
                <Table
                  columns={tblConfigs.columns}
                  dataSource={tblConfigs.data}
                  rowKey="id"
                  loading={loading}
                />
              ) : null}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportOverview;
