import { omit, assign } from 'lodash';
import { getToken } from '../../main/modules/stripe';

export const tokens = [
  "tok_17UaeFGd2qyJIviy37ObydXB",
  "tok_17UapNGd2qyJIviyb9aoqZyw",
  "tok_17UaoMGd2qyJIviyiKmpRzm6"
];

export const inDs = [
    {
      amount: "$100",
      date: 'Sun Dec 27 2015 00:00:01 GMT-0500 (EST)',
      token: tokens[0],
      anonymous: true,
      name: 'donor1',
      email: 'donor1@example.com'
    },
    {
      amount: "$200.00",
      date: 'Sun Dec 27 2015 00:00:02 GMT-0500 (EST)',
      token: tokens[1],
      anonymous: false,
      name: 'donor2',
      email: 'donor2@example.com'
    },
    {
      amount: " $300.00 ",
      date: 'Sun Dec 27 2015 00:00:03 GMT-0500 (EST)',
      token: tokens[2],
      anonymous: false,
      name: 'donor3',
      email: 'donor3@example.com'
    }
];

export const ds = [
  {
    amount: 10000,
    date: 'Sun Dec 27 2015 00:00:01 GMT-0500 (EST)',
    token: tokens[0],
    anonymous: true,
    name: 'donor1',
    email: 'donor1@example.com'
  },
  {
    amount: 20000,
    date: 'Sun Dec 27 2015 00:00:02 GMT-0500 (EST)',
    token: tokens[1],
    anonymous: false,
    name: 'donor2',
    email: 'donor2@example.com'
  },
  {
    amount: 30000,
    date: 'Sun Dec 27 2015 00:00:03 GMT-0500 (EST)',
    token: tokens[2],
    anonymous: false,
    name: 'donor3',
    email: 'donor3@example.com'
  }
  
];

export const outDs = [
  {
    amount: "$100.00",
    date: 'Sun Dec 27 2015 00:00:01 GMT-0500 (EST)',
    token: tokens[0],
    anonymous: true,
    name: 'donor1',
    email: 'donor1@example.com'
  },
  {
    amount: "$200.00",
    date: 'Sun Dec 27 2015 00:00:02 GMT-0500 (EST)',
    token: tokens[1],
    anonymous: false,
    name: 'donor2',
    email: 'donor2@example.com'
  },
  {
    amount: "$300.00",
    date: 'Sun Dec 27 2015 00:00:03 GMT-0500 (EST)',
    token: tokens[2],
    anonymous: false,
    name: 'donor3',
    email: 'donor3@example.com'
  }
];


export const shortDs = [
    {
      amount: "$100.00",
      date: 'Sun Dec 27 2015 00:00:01 GMT-0500 (EST)',
      name: 'Anonymous'
    },
    {
      amount: "$200.00",
      date: 'Sun Dec 27 2015 00:00:02 GMT-0500 (EST)',
      name: 'donor2'
    },
    {
      amount: "$300.00",
      date: 'Sun Dec 27 2015 00:00:03 GMT-0500 (EST)',
      name: 'donor3'
    }
];

export const dResponse = {
  total: "$600.00",
  donations: shortDs.reverse()
};

export const getStripeD = () =>
  getToken()
  .then(t => assign({}, inDs[0], {token: t.id}));

export const anon = assign({}, inDs[0], { anonymous: false });
export const anon_ = assign({}, ds[0], { anonymous: false });
export const missing = omit(inDs[0], 'name');
export const extra = assign({}, inDs[0], { foo: 'bar'});
export const empty = assign({}, inDs[0], { name: ''});
export const badAmount = assign({}, inDs[0], { amount: ' $ 100 '});
export const badEmail1 = assign({}, inDs[0], { email: 'foo@bar' });
export const badEmail2 = assign({}, inDs[0], { email: 'foobar.com' });
export const badEmail3 = assign({}, inDs[0], { email: 'foo@ bar.com' });

