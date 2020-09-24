import React, { useEffect } from 'react';
import { Row, Col, Card, Table, Button, Form, Input, Space, DatePicker, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers } from './redux/actions';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const columns = [
  {
    title: 'No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Full name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   key: 'address',
  // },
  // {
  //   title: 'District',
  //   dataIndex: 'district',
  //   key: 'district',
  // },
  // {
  //   title: 'Phone Number',
  //   dataIndex: 'phoneNumber',
  //   key: 'phoneNumber',
  // },
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

const Users = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.home);
  console.log('Users -> users', users);

  useEffect(() => {
    dispatch(getListUsers());
  }, [dispatch]);

  return (
    <Row>
      <Col span={24}>
        <Card title="Users List" bordered={false} style={{ width: '100%' }}>
          <Row>
            <Col span={24}>
              <Form form={form} initialValues={{}} onValuesChange={() => {}}>
                <Row gutter={24}>
                  <Col>
                    <Paragraph
                      strong
                      style={{
                        marginBottom: 10,
                      }}
                    >
                      Filters
                    </Paragraph>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={4}>
                    <Form.Item label="Ngày bắt đầu/kết thúc" labelCol={labelCol}>
                      <RangePicker />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Mã nhân viên" labelCol={labelCol}>
                      <Input placeholder="Name or employee ID" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={24} justify="end">
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
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table columns={columns} dataSource={users || []} rowKey="id" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Users;
