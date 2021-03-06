import React from 'react';

import { Row, Col, Card, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import homeActions from './redux/actions';

const UploadLayout = ({ dispatch }) => {
  const [stockList, setStockList] = React.useState([]);
  const [stockUploading, setStockUploading] = React.useState(false);
  const [checkList, setCheckList] = React.useState([]);
  const [checkListUploading, setCheckListUploading] = React.useState(false);
  const [itemList, setItemList] = React.useState([]);
  const [itemListUploading, setItemListUploading] = React.useState(false);
  const [userList, setUserList] = React.useState([]);
  const [userListUploading, setUserListUploading] = React.useState(false);
  const [shopList, setShopList] = React.useState([]);
  const [shopListUploading, setShopListUploading] = React.useState(false);
  const [photoList, setPhotoList] = React.useState([]);
  const [photoListUploading, setPhotoListUploading] = React.useState(false);

  const handleUpload = type => {
    if (type === 'stock') {
      const formData = new FormData();
      stockList.forEach(file => {
        formData.append('files[]', file);
      });
      setStockUploading(true);
      dispatch(homeActions.uploadStocks(formData)).then(res => {
        setStockUploading(false);
      });
    }

    if (type === 'checklist') {
      const formData = new FormData();
      checkList.forEach(file => {
        formData.append('files[]', file);
      });
      setCheckListUploading(true);
      dispatch(homeActions.uploadChecklists(formData)).then(res => {
        setCheckListUploading(false);
      });
    }

    if (type === 'item') {
      const formData = new FormData();
      itemList.forEach(file => {
        formData.append('files[]', file);
      });
      setItemListUploading(true);
      dispatch(homeActions.uploadChecklistItems(formData)).then(res => {
        setItemListUploading(false);
      });
    }

    if (type === 'user') {
      const formData = new FormData();
      userList.forEach(file => {
        formData.append('files[]', file);
      });
      setUserListUploading(true);
      dispatch(homeActions.uploadUsers(formData)).then(res => {
        setUserListUploading(false);
      });
    }

    if (type === 'shop') {
      const formData = new FormData();
      userList.forEach(file => {
        formData.append('files[]', file);
      });
      setShopListUploading(true);
      dispatch(homeActions.uploadShops(formData)).then(res => {
        setShopListUploading(false);
      });
    }
  };

  const handleTemplate = type => {
    if (type === 'stock') {
      dispatch(homeActions.downloadStockTemplate());
    }

    if (type === 'checklist') {
      dispatch(homeActions.downloadCheckListTemplate());
    }

    if (type === 'item') {
      dispatch(homeActions.downloadChecklistItemsTemplate());
    }

    if (type === 'user') {
      dispatch(homeActions.downloadUserTemplate());
    }

    if (type === 'shop') {
      dispatch(homeActions.downloadShopTemplate());
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Card title="Upload" bordered={false} style={{ width: '100%' }}>
          <Row>
            <Col span={4}>
              <p>Upload users</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = userList.indexOf(file);
                  const newFileList = userList.slice();
                  newFileList.splice(index, 1);
                  setUserList(newFileList);
                }}
                beforeUpload={file => {
                  setUserList([...userList, file]);
                  return false;
                }}
                fileList={userList}
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('user')}
                disabled={userList.length === 0}
                loading={userListUploading}
              >
                {userListUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleTemplate('user')}
                loading={userListUploading}
              >
                {'Template'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <p>Upload shops</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = shopList.indexOf(file);
                  const newFileList = shopList.slice();
                  newFileList.splice(index, 1);
                  setShopList(newFileList);
                }}
                beforeUpload={file => {
                  setShopList([...shopList, file]);
                  return false;
                }}
                fileList={shopList}
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('shop')}
                disabled={shopList.length === 0}
                loading={shopListUploading}
              >
                {shopListUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleTemplate('shop')}
                loading={shopListUploading}
              >
                {'Template'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <p>Upload stock</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = stockList.indexOf(file);
                  const newFileList = stockList.slice();
                  newFileList.splice(index, 1);
                  setStockList(newFileList);
                }}
                beforeUpload={file => {
                  setStockList([...stockList, file]);
                  return false;
                }}
                fileList={stockList}
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('stock')}
                disabled={stockList.length === 0}
                loading={stockUploading}
              >
                {stockUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleTemplate('stock')}
                loading={stockUploading}
              >
                {'Template'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <p>Upload checklist</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = checkList.indexOf(file);
                  const newFileList = checkList.slice();
                  newFileList.splice(index, 1);
                  setCheckList(newFileList);
                }}
                beforeUpload={file => {
                  setCheckList([...checkList, file]);
                  return false;
                }}
                fileList={checkList}
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('checklist')}
                disabled={checkList.length === 0}
                loading={checkListUploading}
              >
                {checkListUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleTemplate('checklist')}
                loading={checkListUploading}
              >
                {'Template'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <p>Upload checklist items</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = itemList.indexOf(file);
                  const newFileList = itemList.slice();
                  newFileList.splice(index, 1);
                  setItemList(newFileList);
                }}
                beforeUpload={file => {
                  setItemList([...itemList, file]);
                  return false;
                }}
                fileList={itemList}
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('item')}
                disabled={itemList.length === 0}
                loading={itemListUploading}
              >
                {itemListUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleTemplate('item')}
                loading={itemListUploading}
              >
                {'Template'}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <p>Upload photos</p>
            </Col>
            <Col span={8}>
              <Upload
                onRemove={file => {
                  const index = photoList.indexOf(file);
                  const newFileList = photoList.slice();
                  newFileList.splice(index, 1);
                  setPhotoList(newFileList);
                }}
                beforeUpload={(file, fileList) => {
                  const newList = photoList.concat(fileList);
                  setPhotoList(newList);
                  return false;
                }}
                fileList={photoList}
                directory
                listType="picture"
              >
                <Button block>
                  <UploadOutlined /> Select file
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                onClick={() => handleUpload('photos')}
                disabled={photoList.length === 0}
                loading={photoListUploading}
              >
                {photoListUploading ? 'Uploading' : 'Start Upload'}
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};
export default connect(mapStateToProps)(UploadLayout);
