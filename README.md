# Uniswap V3 Subgraph & Frontend

This repository contains:
- **Subgraph**: An [The Graph](https://thegraph.com/) subgraph for Uniswap V3 on Arbitrum.
- **Frontend**: A React app to visualize Uniswap V3 LP positions using data from the subgraph.

---

## Project Structure

```
Uniswap-v3-graphQL/
├── subgraph/   # The Graph subgraph code
├── frontend/   # React frontend app
```

---

## Subgraph

### Overview

The subgraph indexes Uniswap V3 pool events (Mint, Burn, Collect) and exposes LP positions, pools, and tokens.

### Setup

1. **Install dependencies:**
   ```bash
   cd subgraph
   npm install
   ```

2. **Codegen & Build:**
   ```bash
   npm run codegen
   npm run build
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```
   > Update the deploy command in `package.json` if you fork or change the subgraph name.

4. **Querying:**
   - Use the hosted service endpoint (see `subgraph.yaml` or your deploy output).

---

## Frontend

### Overview

A simple React app that fetches and displays LP positions from the subgraph.

### Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the app:**
   ```bash
   npm start
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Configuration:**
   - The GraphQL endpoint is set in `src/App.tsx` (`endpoint` variable). Change it if you deploy your own subgraph.

---

## Development Notes

- **Subgraph**: Written in AssemblyScript for The Graph.
- **Frontend**: Uses React, TypeScript, Tailwind CSS, and `graphql-request`.

---

## Useful Links

- [The Graph Documentation](https://thegraph.com/docs/)
- [Uniswap V3 Docs](https://docs.uniswap.org/)
- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## License

MIT