import api from '../../../common/axiosConfig';
import {
  request,
  // request,
  success,
  // failure
} from '../../../common/reduxActions';
import {
  GET_LIST_USERS_SUCCESS,
  IMPORT_STOCKS_SUCCESS,
  IMPORT_CHECKLISTS_SUCCESS,
  IMPORT_CHECKLIST_ITEMS_SUCCESS,
  // EDIT_USER_SUCCESS,
  IMPORT_USERS_SUCCESS,
  IMPORT_SHOPS_SUCCESS,
  GET_LIST_CHECKIN_CHECKOUT_SUCCESS,
  GET_SHOPS_SUCCESS,
  GET_REPORT_OVERVIEW_SUCCESS,
  GET_REPORT_DETAIL_SUCCESS,
  GET_REPORT_DETAIL_BEGIN,
  GET_REPORT_OVERVIEW_BEGIN,
  GET_LIST_USERS_BEGIN,
  GET_SHOPS_BEGIN,
  GET_LIST_USERS_FAILURE,
  GET_SHOPS_FAILURE,
  GET_REPORT_OVERVIEW_FAILURE,
  GET_REPORT_DETAIL_FAILURE,
} from './constants';
import authActions from '../../auth/redux/actions';
import downloadXlsFromBase64 from '../../../common/download';

export const getListUsers = () => {
  return (dispatch) => {
    dispatch(request(GET_LIST_USERS_BEGIN));
    return api()
      .get('users')
      .then((res) => {
        dispatch(success(GET_LIST_USERS_SUCCESS, res.data));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          } else {
            dispatch(request(GET_LIST_USERS_FAILURE));
          }
        }
      });
  };
};

export const getShops = () => {
  return (dispatch) => {
    dispatch(request(GET_SHOPS_BEGIN));
    return api()
      .get(`shops`)
      .then((res) => {
        dispatch(success(GET_SHOPS_SUCCESS, res.data));
        dispatch(authActions.updateAuthorization(res.headers));
      })
      .catch((error) => {
        console.log('getShops -> error', error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          } else {
            dispatch(request(GET_SHOPS_FAILURE));
          }
        }
      });
  };
};

export const addShop = (data) => {
  return (dispatch) => {
    return api()
      .post(`shops`, data)
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        return res;
      })
      .catch((error) => {
        console.log('addShop -> error', error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

export const editShop = (shopId, data) => {
  return (dispatch) => {
    return api()
      .put(`shops/${shopId}`, data)
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        return res;
      })
      .catch((error) => {
        console.log('editShop -> error', error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

export const getReportOverview = (date_from, date_to) => {
  return (dispatch) => {
    dispatch(request(GET_REPORT_OVERVIEW_BEGIN));
    return api()
      .get(`reports/qc_summary?date_from=${date_from}&date_to=${date_to}`)
      .then((res) => {
        dispatch(success(GET_REPORT_OVERVIEW_SUCCESS, res.data));
        dispatch(authActions.updateAuthorization(res.headers));
      })
      .catch((error) => {
        console.log('getShops -> error', error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          } else {
            dispatch(request(GET_REPORT_OVERVIEW_FAILURE));
          }
        }
      });
  };
};

export const getReportDetail = (date_from, date_to) => {
  return (dispatch) => {
    dispatch(request(GET_REPORT_DETAIL_BEGIN));
    return api()
      .get(`reports/qc_detail?date_from=${date_from}&date_to=${date_to}`)
      .then((res) => {
        dispatch(success(GET_REPORT_DETAIL_SUCCESS, res.data));
        dispatch(authActions.updateAuthorization(res.headers));
      })
      .catch((error) => {
        console.log('getShops -> error', error);
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          } else {
            dispatch(request(GET_REPORT_DETAIL_FAILURE));
          }
        }
      });
  };
};

const uploadStocks = (data) => {
  return (dispatch) => {
    return api()
      .post('io/stock_import', data)
      .then((res) => {
        dispatch(success(IMPORT_STOCKS_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const uploadChecklists = (data) => {
  return (dispatch) => {
    return api()
      .post('io/checklist_import', data)
      .then((res) => {
        dispatch(success(IMPORT_CHECKLISTS_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const uploadChecklistItems = (data) => {
  return (dispatch) => {
    return api()
      .post('io/checklist_item_import', data)
      .then((res) => {
        dispatch(success(IMPORT_CHECKLIST_ITEMS_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const uploadFull = (data) => {
  return (dispatch) => {
    return api('multipart/form-data')
      .post('shops/import', data)
      .then((res) => {
        dispatch(success(IMPORT_SHOPS_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const editUser = (userId, data) => {
  return (dispatch) => {
    return api()
      .put('users/' + userId, data)
      .then((res) => {
        // dispatch(success(EDIT_USER_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
        return res;
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const lockUser = (userId) => {
  return (dispatch) => {
    return api()
      .post(`users/${userId}/lock`, {})
      .then((res) => {
        // dispatch(success(EDIT_USER_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const unlockUser = (userId) => {
  return (dispatch) => {
    return api()
      .post(`users/${userId}/unlock`, {})
      .then((res) => {
        // dispatch(success(EDIT_USER_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const uploadUsers = (data) => {
  return (dispatch) => {
    return api()
      .post('io/user_import', data)
      .then((res) => {
        dispatch(success(IMPORT_USERS_SUCCESS, res.status));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const getCheckInCheckOut = () => {
  return (dispatch) => {
    return api()
      .get('checkin_checkouts')
      .then((res) => {
        res.data = res.data.map((data) => {
          data.key = data.id;
          return data;
        });
        dispatch(success(GET_LIST_CHECKIN_CHECKOUT_SUCCESS, res.data));
        dispatch(authActions.updateAuthorization(res.headers));
        console.log(res);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          dispatch(authActions.logout());
        }
      });
  };
};

const downloadUserTemplate = () => {
  return (dispatch) => {
    return api()
      .get('io/user_import/template')
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'user_template', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

const downloadStockTemplate = () => {
  return (dispatch) => {
    return api()
      .get('io/stock_import/template')
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'stock_template', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

const downloadCheckListTemplate = () => {
  return (dispatch) => {
    return api()
      .get('io/checklist_import/template')
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'checklist_template', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

const downloadChecklistItemsTemplate = () => {
  return (dispatch) => {
    return api()
      .get('io/checklist_item_import/template')
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'checklist_item_template', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

const downloadShopTemplate = () => {
  return (dispatch) => {
    return api()
      .get('io/shop_import/template')
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'shop_template', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

export const exportReportDetail = (date_from, date_to) => {
  return (dispatch) => {
    return api()
      .get(`io/qc_export?date_from=${date_from}&date_to=${date_to}`)
      .then((res) => {
        dispatch(authActions.updateAuthorization(res.headers));
        downloadXlsFromBase64(res.data, 'export', 'xls');
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;
          if (status === 401 || status === 500) {
            dispatch(authActions.logout());
          }
        }
      });
  };
};

const homeActions = {
  getShops,
  addShop,
  editShop,
  getListUsers,
  uploadStocks,
  uploadChecklists,
  uploadChecklistItems,
  uploadFull,
  editUser,
  lockUser,
  unlockUser,
  uploadUsers,
  getCheckInCheckOut,
  downloadUserTemplate,
  downloadStockTemplate,
  downloadCheckListTemplate,
  downloadChecklistItemsTemplate,
  downloadShopTemplate,
  exportReportDetail,
};

export default homeActions;
