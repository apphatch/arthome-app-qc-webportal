import faker from 'faker';

export const shops = () => {
  return Array.from({ length: 20 }, (_, key) => {
    return {
      id: faker.random.uuid(),
      no: key + 1,
      storeType: 'MT',
      city: faker.address.city(),
      npp: faker.company.companyName(),
      storeName: faker.company.companyName(),
      storeAddress: faker.address.streetAddress(),
      district: faker.address.state(),
      employeeId: 'QC01',
    };
  });
};

export const errors = () => {
  return Array.from({ length: 20 }, (_, key) => {
    return {
      id: faker.random.uuid(),
      no: key + 1,
      errorName: faker.random.words(),
    };
  });
};

export const users = () => {
  return Array.from({ length: 20 }, (_, key) => {
    return {
      id: faker.random.uuid(),
      no: key + 1,
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      username: `${faker.internet.userName()}`,
      address: faker.address.secondaryAddress(),
      district: faker.address.state(),
      phoneNumber: faker.phone.phoneNumber(),
    };
  });
};

const status = ['red', 'yellow', 'green'];

export const reportDetail = () => {
  return Array.from({ length: 20 }, (_, key) => {
    const statusChance = Math.random();

    return {
      id: faker.random.uuid(),
      no: key + 1,
      employeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      shopName: `${faker.company.companyName()}`,
      shopAddress: faker.address.secondaryAddress(),
      sku: faker.commerce.productMaterial(),
      status: statusChance > 0.66 ? status[0] : statusChance > 0.33 ? status[1] : status[2],
      errorName: 'No Error',
      image: faker.image.avatar(),
    };
  });
};

export const reportOverview = () => {
  return Array.from({ length: 20 }, (_, key) => {
    return {
      id: faker.random.uuid(),
      no: key + 1,
      date: faker.date.recent(),
      employeeName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      shopName: `${faker.company.companyName()}`,
      shopAddress: faker.address.secondaryAddress(),
      hpc: faker.random.number(),
      ic: faker.random.number(),
      hpcReal: faker.random.number(),
      icReal: faker.random.number(),
      green: faker.random.number(),
      yellow: faker.random.number(),
      red: faker.random.number(),
    };
  });
};
