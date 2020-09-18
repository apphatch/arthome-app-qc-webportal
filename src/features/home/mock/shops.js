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
