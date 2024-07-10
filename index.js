import { request, gql } from 'graphql-request';

// Uniswap V3 Subgraph Endpoint
const endpoint = `https://gateway-arbitrum.network.thegraph.com/api/b0b42f340574448461f425b23837354c/subgraphs/id/75WWsr4ztGrMsx5Qjxp3pQPXb8dqFyi4emmRgNE2ixQ6`;

// GraphQL Query
const query = gql`
{
  positions(where: {owner: "0xfd235968e65b0990584585763f837a5b5330e6de"}) {
    id
    owner
    liquidity
    token0 {
      symbol
      decimals
    }
    token1 {
      symbol
      decimals
    }
    collectedFeesToken0
    collectedFeesToken1
    pool {
      id
      token0 {
        symbol
        decimals
      }
      token1 {
        symbol
        decimals
      }
      liquidity
      sqrtPrice
      totalValueLockedToken0
      totalValueLockedToken1
      feeGrowthGlobal0X128
      feeGrowthGlobal1X128
    }
  }
}
`;

// Function to perform the query and handle the response
async function fetchStakingRewards() {
  try {
    console.log(endpoint, query)
    const data = await request(endpoint, query);
    const positions = data.positions;

    positions.forEach(position => {
      const pool = position.pool;
      const token0Symbol = pool.token0.symbol;
      const token1Symbol = pool.token1.symbol;
      const token0Decimals = pool.token0.decimals;
      const token1Decimals = pool.token1.decimals;

      const liquidityTokenBalance = position.liquidity;
      const collectedFeesToken0 = position.collectedFeesToken0 / Math.pow(10, token0Decimals);
      const collectedFeesToken1 = position.collectedFeesToken1 / Math.pow(10, token1Decimals);

      console.log(`Position ID: ${position.id}`);
      console.log(`Tokens: ${token0Symbol}/${token1Symbol}`);
      console.log(`Liquidity Token Balance: ${liquidityTokenBalance}`);
      console.log(`Collected Fees (${token0Symbol}): ${collectedFeesToken0}`);
      console.log(`Collected Fees (${token1Symbol}): ${collectedFeesToken1}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching staking rewards:', error);
  }
}

// Execute the function
fetchStakingRewards();

