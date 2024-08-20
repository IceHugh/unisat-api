# UniSat API Client 🚀

[![中文文档](https://img.shields.io/badge/lang-中文-blue.svg)](https://github.com/IceHugh/unisat-api/blob/main/README_ZH.md)
[![NPM version](https://img.shields.io/npm/v/unisat-api.svg)](https://www.npmjs.com/package/unisat-api)
[![License](https://img.shields.io/npm/l/unisat-api.svg)](https://github.com/IceHugh/unisat-api/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/unisat-api.svg)](https://www.npmjs.com/package/unisat-api)
[![Last Commit](https://img.shields.io/github/last-commit/IceHugh/unisat-api.svg)](https://github.com/IceHugh/unisat-api/commits/main)
[![Contributors](https://img.shields.io/github/contributors/IceHugh/unisat-api.svg)](https://github.com/IceHugh/unisat-api/graphs/contributors)

🌟 **UniSat API Client** is an open-source TypeScript/JavaScript client library based on the [UniSat API](https://docs.unisat.io/). It provides a simple and easy-to-use interface to interact with various services of UniSat, including blockchain queries, transactions, inscriptions, BRC-20 tokens, and more.

## ✨ Features

- 💼 Complete encapsulation of all UniSat API functions
- 📦 Supports TypeScript with type definitions
- 🌐 Easy-to-use Promise-based interface
- ⚙️ Built-in request rate limiting and error handling
- 🔧 Supports custom configurations (network, base URL, etc.)

## 📦 Installation

Using npm:

```bash
npm install unisat-api
```

Or using yarn:

```bash
yarn add unisat-api
```

## 🚀 Quick Start

```typescript
import UnisatApiClient from 'unisat-api';
const client = new UnisatApiClient({
  apikey: 'YOUR_API_KEY',
  network: 'mainnet'
});

// 🔍 Get blockchain information
client.blocks.getBlockchainInfo().then(info => {
  console.log(info);
});

// 💰 Get address balance
client.address.getAddressBalance('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh').then(balance => {
  console.log(balance);
});
```

## 🛠️ API Overview

The UniSat API client provides the following main modules:

- 🪙 `runes`: Runes-related operations
- 📈 `market`: Market data queries
- 🧱 `blocks`: Blockchain information queries
- 🔄 `brc20swap`: BRC-20 token swaps
- 🏦 `address`: Address-related operations
- 🖋️ `inscription`: Inscription operations
- 📜 `inscriptions`: Inscription queries
- 💸 `transaction`: Transaction-related operations

Each module contains multiple methods for interacting with the corresponding UniSat API endpoints.

## 📖 Documentation

For detailed explanations of each module and method, please refer to our [API Documentation](https://github.com/IceHugh/unisat-api/blob/main/docs/API.md).

## ⚙️ Configuration Options

When creating an instance of `UnisatApiClient`, you can pass the following configuration options:

- `apikey`: Your UniSat API key (required)
- `network`: The network to connect to ('mainnet' or 'testnet', default is 'mainnet')
- `baseURL`: Custom API base URL (optional)

## ⚠️ Error Handling

All API methods return a Promise. It is recommended to use a try/catch block or the `.catch()` method to handle any potential errors.

```typescript
try {
  const balance = await client.address.getAddressBalance('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
  console.log(balance);
} catch (error) {
  console.error('Error fetching balance:', error);
}
```

## 🙌 Contribution Guidelines

We welcome and appreciate all forms of contributions. If you'd like to contribute to the project, please follow these steps:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💻 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

Before submitting a Pull Request, please ensure your code adheres to our coding standards and passes all tests.

## 📄 License

This project is licensed under the MIT License. For more details, please see the [LICENSE](https://github.com/IceHugh/unisat-api/blob/main/LICENSE) file.

## 🔗 Related Links

- 🌍 [UniSat Official Website](https://unisat.io/)
- 📚 [UniSat API Documentation](https://docs.unisat.io/)
- 🛠️ [UniSat Developer Center](https://docs.unisat.io/dev)

## 📬 Contact Us

If you have any questions or suggestions, please contact us through:

- 💬 Submitting a [GitHub Issue](https://github.com/IceHugh/unisat-api/issues)
- ✉️ Sending an email to [your-email@example.com](mailto:your-email@example.com)

Thank you for using the UniSat API Client! 🚀
