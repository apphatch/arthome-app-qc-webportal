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
import { SearchOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import homeActions from './redux/actions';

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const labelCol = {
  span: 24,
};

const Shops = () => {
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Store Type',
      dataIndex: 'shop_type',
      key: 'shop_type',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    // {
    //   title: 'NPP',
    //   dataIndex: 'npp',
    //   key: 'npp',
    // },
    {
      title: 'Store Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Store Address',
      dataIndex: 'full_address',
      key: 'full_address',
    },
    {
      title: 'Quận',
      dataIndex: 'district',
      key: 'district',
    },
    // {
    //   title: 'Mã NV',
    //   dataIndex: 'employeeId',
    //   key: 'employeeId',
    // },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type="link" onClick={() => showModal(record)}>
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
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.home);
  const loading = useSelector((state) => state.home.loading);

  const [shopId, setShopId] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [titleForm, setTitleForm] = React.useState('Add Shop');
  const [formFields, setFormFields] = React.useState([
    { name: ['name'], value: '' },
    { name: ['full_address'], value: '' },
    { name: ['importing_id'], value: '' },
  ]);

  useEffect(() => {
    dispatch(homeActions.getShops());
  }, [dispatch]);

  const showModal = (data) => {
    setVisible(true);
    form.resetFields();
    if (data) {
      setShopId(data.id);
      const newFields = [
        { name: ['name'], value: data.name },
        { name: ['full_address'], value: data.full_address },
        { name: ['importing_id'], value: data.importing_id },
      ];
      setFormFields(newFields);
      setTitleForm('Edit Shop');
    } else {
      setShopId();
      setTitleForm('Add Shop');
    }
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onAddShop = (values) => {
    dispatch(homeActions.addShop(values)).then((res) => {
      handleCancel();
      dispatch(homeActions.getShops());
    });
  };

  const onEditShop = (values) => {
    // const newValues = _.pickBy(values, (v) => v !== '');
    dispatch(homeActions.editShop(shopId, values)).then((res) => {
      handleCancel();
      dispatch(homeActions.getShops());
    });
  };

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
                      <RangePicker disabled={loading} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã nhân viên" labelCol={labelCol}>
                      <Input placeholder="Name or employee ID" disabled={loading} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Tên/Mã cửa hàng" labelCol={labelCol}>
                      <Input placeholder="Name or shop ID" disabled={loading} />
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
                        disabled={loading}
                        onClick={() => showModal()}
                      >
                        Add new
                      </Button>
                      <Button
                        style={{
                          marginLeft: 10,
                        }}
                        icon={<DownloadOutlined />}
                        disabled={loading}
                      >
                        Export to Excel
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Table
                columns={columns}
                dataSource={homeState.shops || []}
                rowKey="id"
                loading={loading}
              />
            </Col>
          </Row>
          <Modal
            title={titleForm}
            visible={visible}
            okText="Submit"
            cancelText="Cancel"
            onCancel={handleCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  if (titleForm === 'Add Shop') {
                    form.resetFields();
                    onAddShop(values);
                  } else {
                    onEditShop(values);
                  }
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              {...layout}
              form={form}
              initialValues={{ modifier: 'public' }}
              fields={formFields}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input shop name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="full_address"
                rules={[{ required: true, message: 'Please input shop address!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Importing Id"
                name="importing_id"
                rules={[{ required: true, message: 'Please input importing id!' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </Col>
    </Row>
  );
};

export default Shops;
