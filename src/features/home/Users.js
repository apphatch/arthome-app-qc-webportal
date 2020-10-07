import React, { useEffect } from 'react';
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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const labelCol = {
  span: 24,
};

const Users = () => {
  const [form] = Form.useForm();
  const [formCreate] = Form.useForm();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.home);
  console.log('Users -> users', users);

  const [visible, setVisible] = React.useState(false);
  const [titleForm, setTitleForm] = React.useState('Add User');
  const [
    ,
    // userId
    setUserId,
  ] = React.useState();
  const [formFields, setFormFields] = React.useState([
    { name: ['name'], value: '' },
    { name: ['username'], value: '' },
    { name: ['password'], value: '' },
    { name: ['importing_id'], value: '' },
  ]);

  useEffect(() => {
    dispatch(getListUsers());
  }, [dispatch]);

  const showModal = (data) => {
    setVisible(true);
    form.resetFields();
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
    console.log('Users -> values', values);
  };

  const onEditUser = (values) => {
    console.log('Users -> values', values);
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
                        onClick={() => showModal(false)}
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
                form.resetFields();
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

export default Users;
