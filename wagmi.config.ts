import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'
import * as chains from '@wagmi/chains'
import { Address } from 'viem';


export default defineConfig({
  out: 'src/abis/TokenRegistry.ts',
  plugins: [
    foundry({

      include: [  
        // the following patterns are included by default
        'TokenRegistry.json',  
      ],  

      deployments: {
        TokenRegistry: {
          [chains.mainnet.id]: '0x1A61839Eb5fC6eBBcAe01eD5E79062E598792Dac',
          [chains.goerli.id]: '0x78991BB1D194C1235fe285240af8489CFA552151',
          [chains.foundry.id]:  process.env.FORGE_CONTRACT_ADDRESS as Address,
          [chains.localhost.id]: process.env.FORGE_CONTRACT_ADDRESS as Address,
        },
      },
      project: './contract',
    }),
    react(),
  ],
})