import React, { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import "./index.css";

const endpoint = "https://api.thegraph.com/subgraphs/name/git-varun/uniswap-v3-subgraph-poc";

const query = gql`
  {
    positions(first: 5) {
      id
      owner
      liquidity
      collectedFeesToken0
      collectedFeesToken1
      pool {
        id
        token0 { symbol decimals }
        token1 { symbol decimals }
        liquidity
        sqrtPrice
      }
    }
  }
`;

type Position = {
  id: string;
  owner: string;
  liquidity: string;
  collectedFeesToken0: string | number;
  collectedFeesToken1: string | number;
  pool: {
    token0: { symbol: string };
    token1: { symbol: string };
    liquidity: string;
    sqrtPrice: string;
  };
};

function App() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    request(endpoint, query).then((data: any) => {
      // Type assertion: assume data.positions is Position[]
      setPositions((data as { positions: Position[] }).positions);
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Uniswap V3 LP Positions</h1>
      <div className="grid gap-4">
        {positions.map((p, i) => (
          <div key={i} className="p-4 rounded-2xl bg-gray-800 shadow">
            <p><b>Position ID:</b> {p.id}</p>
            <p><b>Owner:</b> {p.owner}</p>
            <p><b>Pair:</b> {p.pool.token0.symbol}/{p.pool.token1.symbol}</p>
            <p><b>Liquidity:</b> {p.liquidity}</p>
            <p><b>Fees:</b> {Number(p.collectedFeesToken0).toFixed(4)} {p.pool.token0.symbol} / {Number(p.collectedFeesToken1).toFixed(4)} {p.pool.token1.symbol}</p>
            <p><b>Pool Liquidity:</b> {p.pool.liquidity}</p>
            <p><b>Sqrt Price:</b> {p.pool.sqrtPrice}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
