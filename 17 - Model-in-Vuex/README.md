# Defining model in VueX for SOLID design pattern #

## model/Address.js ##
```js
export class Address {
  constructor({ street = ``, town = ``, zip = `` } = {}) {
    this.street = street;
    this.town = town;
    this.zip = zip;
  }
}

export function createAddress(data) {
  return Object.freeze(new Address(data));
}
```

## model/Contact.js ##
```js
export class Contact {
  constructor({ email = ``, phone = `` } = {}) {
    this.email = email;
    this.phone = phone;
  }
}

export function createContact(data) {
  return Object.freeze(new Contact(data));
}

```

## model/Customer.js ##
```js
import { createAddress } from './Address';
import { createContact } from './Contact';
import { createName } from './Name';

export class Customer {
  constructor({ address = null, contacts = [], name = null } = {}) {
    this.address = address;
    this.contacts = contacts;
    this.name = name;
  }
}

export function createCustomer(data) {
  const address = createAddress(data.address);
  const contacts = data.contacts.map(x => createContact(x));
  const name = createName(data.name);

  return Object.freeze(new Customer({ address, contacts, name }));
}

```

## model/Name.js ##
```js
export class Name {
  constructor({ firstName = ``, lastName = `` } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export function createName(data) {
  return Object.freeze(new Name(data));
}

```

## model/Request.js ##
```js
export class Request {
  constructor(data = {}) {
    this.data = data;
  }
}

export function createRequest(data) {
  return Object.freeze(new Request(data));
}

```

## model/ShoppingAddress.js ##
```js
import { createAddress } from './Address';
import { createContact } from './Contact';

export class ShippingAddress {
  constructor({ address = null, contact = null } = {}) {
    this.address = address;
    this.contact = contact;
  }
}

export function createShippingAddress(data) {
  const address = createAddress(data.address);
  const contact = createContact(data.contact);

  return Object.freeze(new ShippingAddress({ address, contact }));
}

```