import { proxyConfig } from "$config/index.js";

import { SocksProxyAgent } from "socks-proxy-agent";

const socksAgent = new SocksProxyAgent(proxyConfig.socks5);

export default socksAgent;
