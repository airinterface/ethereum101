import { http, createConfig } from 'wagmi'
import { sepolia, mainnet} from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'


const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true, 
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

export default config;
