# TheGraph Subgraph

## 重要提醒 ‼️

因为 thegraph 现在还不支持 sepolia测试网络（如下图），所以改用goerli测试网络，但是goerli gas超高且测试币非常难领，
所以作业实现方式：（1）把自己的Crowdfunding合约部署到sepolia，并开源合约源码，（2）自己写得thegraph调用其他同学已经成功部署到goerli测试网的合约，监听bid事件。

> thegraph 现在还不支持 sepolia测试网络的错误提示信息

![](https://github.com/guozhouwei/crowdfunding666/blob/main/images/001.png)

> thegraph 支持 goerli测试网络并deploy成功的提示信息

![](https://github.com/guozhouwei/crowdfunding666/blob/main/images/002.png)


## 合约

```html
- 我写的合约：
0x62ABd112bE92cb29c46aE1e895817Fe813FC4BC8
https://sepolia.etherscan.io/address/0x62ABd112bE92cb29c46aE1e895817Fe813FC4BC8#writeContract

- 调用别人的合约位置
0xE6fa0fd74ACB333E9714B245E5149b4DA2bbba11
https://goerli.etherscan.io/address/0xE6fa0fd74ACB333E9714B245E5149b4DA2bbba11#code

```

## 页面展示

![](https://github.com/guozhouwei/crowdfunding666/blob/main/images/003.png)
