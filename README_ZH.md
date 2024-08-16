# UniSat API 客户端

[![NPM version](https://img.shields.io/npm/v/unisat-api.svg)](https://www.npmjs.com/package/unisat-api)
[![License](https://img.shields.io/npm/l/unisat-api.svg)](https://github.com/IceHugh/unisat-api/blob/main/LICENSE)

这是一个基于 [UniSat API](https://docs.unisat.io/) 封装的开源 TypeScript/JavaScript 客户端库。它提供了简单易用的接口来与 UniSat 的各种服务进行交互,包括区块链查询、交易、铭文、BRC-20 代币等功能。

## 特性

- 完整封装 UniSat API 的所有功能
- 支持 TypeScript,提供类型定义
- 简单易用的 Promise 接口
- 内置请求速率限制和错误处理
- 支持自定义配置(网络、基础 URL 等)

## 安装

使用 npm:

```bash
npm install unisat-api
```

或者使用 yarn:
```bash
yarn add unisat-api
```

## 快速开始

```typescript
import UnisatApiClient from 'unisat-api';
const client = new UnisatApiClient({
apikey: 'YOUR_API_KEY',
network: 'mainnet'
});
// 获取区块链信息
client.blocks.getBlockchainInfo().then(info => {
console.log(info);
});
// 获取地址余额
client.address.getAddressBalance('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh').then(balance => {
console.log(balance);
});
```


## API 概览

UniSat API 客户端提供以下主要模块:

- `runes`: Runes 相关操作
- `market`: 市场数据查询
- `blocks`: 区块信息查询
- `brc20swap`: BRC-20 代币交换
- `address`: 地址相关操作
- `inscription`: 铭文操作
- `inscriptions`: 铭文查询
- `transaction`: 交易相关操作

每个模块都包含多个方法,用于与 UniSat API 的相应端点进行交互。

## 详细文档

有关每个模块和方法的详细说明,请参阅我们的 [API 文档](https://github.com/IceHugh/unisat-api/blob/main/docs/API.md)。

## 配置选项

创建 `UnisatApiClient` 实例时,您可以传入以下配置选项:

- `apikey`: 您的 UniSat API 密钥 (必需)
- `network`: 要连接的网络 ('mainnet' 或 'testnet',默认为 'mainnet')
- `baseURL`: 自定义 API 基础 URL (可选)

## 错误处理

所有 API 方法都返回 Promise。在使用时,建议使用 try/catch 块或 .catch() 方法来处理可能出现的错误。

```typescript
try {
const balance = await client.address.getAddressBalance('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
console.log(balance);
} catch (error) {
console.error('获取余额时出错:', error);
}
```


## 贡献指南

我们欢迎并感谢所有形式的贡献。如果您想为项目做出贡献,请遵循以下步骤:

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

在提交 Pull Request 之前,请确保您的代码符合我们的编码规范并通过所有测试。

## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](https://github.com/IceHugh/unisat-api/blob/main/LICENSE) 文件。

## 相关链接

- [UniSat 官方网站](https://unisat.io/)
- [UniSat API 文档](https://docs.unisat.io/)
- [UniSat Developer Center](https://docs.unisat.io/dev)

## 联系我们

如果您有任何问题或建议,请通过以下方式联系我们:

- 提交 [GitHub Issue](https://github.com/IceHugh/unisat-api/issues)
- 发送邮件至 [your-email@example.com](mailto:your-email@example.com)

感谢您使用 UniSat API 客户端!