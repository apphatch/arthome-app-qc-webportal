import React, { useEffect } from 'react';
import _ from 'lodash';
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
  Modal,
} from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect, useSelector } from 'react-redux';
import homeActions from './redux/actions';
import authActions from '../auth/redux/actions';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const labelCol = {
  span: 24,
};

const Users = ({ dispatch, home }) => {
  const [form] = Form.useForm();
  const [formCreate] = Form.useForm();
  const loading = useSelector((state) => state.home.loading);

  const [visible, setVisible] = React.useState(false);
  const [titleForm, setTitleForm] = React.useState('Add User');
  const [userId, setUserId] = React.useState();
  const [formFields, setFormFields] = React.useState([
    { name: ['name'], value: '' },
    { name: ['username'], value: '' },
    { name: ['password'], value: '' },
    { name: ['importing_id'], value: '' },
  ]);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Importing ID',
      dataIndex: 'importing_id',
      key: 'importing_id',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button type="link" onClick={() => {}}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    dispatch(homeActions.getListUsers());
  }, [dispatch]);

  const showModal = (data) => {
    setVisible(true);
    formCreate.resetFields();
    if (data) {
      setUserId(data.id);
      const newFields = [
        { name: ['name'], value: data.name },
        { name: ['username'], value: data.username },
        { name: ['password'], value: '' },
        { name: ['importing_id'], value: data.importing_id },
      ];
      setFormFields(newFields);
      setTitleForm('Edit User');
    } else {
      setUserId();
      setTitleForm('Add User');
    }
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onAddUser = (values) => {
    dispatch(authActions.register(values)).then((res) => {
      handleCancel();
      dispatch(homeActions.getListUsers());
    });
  };

  const onEditUser = (values) => {
    const newValues = _.pickBy(values, (v) => v !== '');
    dispatch(homeActions.editUser(userId, newValues)).then((res) => {
      handleCancel();
      dispatch(homeActions.getListUsers());
    });
  };

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
                      <RangePicker disabled={loading} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Mã nhân viên" labelCol={labelCol}>
                      <Input placeholder="Name or employee ID" disabled={loading} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={24} justify="end">
                  <Col>
                    <Form.Item>
                      <Button icon={<SearchOutlined />} disabled={loading}>
                        Search
                      </Button>
                      <Button
                        type="primary"
                        style={{
                          marginLeft: 10,
                        }}
                        icon={<PlusOutlined />}
                        onClick={() => showModal()}
                        disabled={loading}
                      >
                        Add new
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table
                columns={columns}
                dataSource={home.users || []}
                rowKey="id"
                loading={loading}
              />
            </Col>
          </Row>
        </Card>
      </Col>

      <Modal
        title={titleForm}
        visible={visible}
        okText="Submit"
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={() => {
          formCreate
            .validateFields()
            .then((values) => {
              if (titleForm === 'Add User') {
                formCreate.resetFields();
                onAddUser(values);
              } else {
                onEditUser(values);
              }
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          {...layout}
          form={formCreate}
          initialValues={{ modifier: 'public' }}
          fields={formFields}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your user name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={
              titleForm === 'Add User' && [
                { required: true, message: 'Please input your password!' },
              ]
            }
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Importing Id"
            name="importing_id"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};
export default connect(mapStateToProps)(Users);
