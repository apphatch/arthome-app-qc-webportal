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
