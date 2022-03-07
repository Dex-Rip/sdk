import { ChainId } from './constants'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const BLOCKS_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://thegraph.com/explorer/subgraph/dasconnor/avalanche-blocks'
}

export const EXCHANGE_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/exchange-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/exchange'
}

export const MASTERCHEF_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/masterchefv2-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/masterchefv2'
}

export const DEXCANDLES_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/dexcandles-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/dexcandles'
}

export const BAR_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/bar-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/bar'
}

export const LENDING_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/lending-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/lending'
}

export const ROCKET_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/rocket-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/rocket'
}

export const SRip_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/sRip-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/sRip'
}

export const MONEY_MAKER_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/money-maker-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/Dex-Rip/money-maker'
}
