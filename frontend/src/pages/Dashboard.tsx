import TotalAssetsCard from "../components/TotalAssetsCard";
import BasketsDistributionCard from "../components/BasketsDistributionCard";
import TokenAssetsCard from "../components/TokenAssetsCard";
import { BasketType } from "../types/types";

const Dashboard = () => {
  const tradeBaskets: (BasketType & { createdAt: string; balance: string })[] =
    [
      {
        name: "Basket 01",
        assets: [
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "20.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Solana",
            symbol: "SOL",
            image:
              "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "DAI",
            symbol: "DAI",
            image:
              "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "20.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Solana",
            symbol: "SOL",
            image:
              "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "DAI",
            symbol: "DAI",
            image:
              "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "15.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "20.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Solana",
            symbol: "SOL",
            image:
              "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "DAI",
            symbol: "DAI",
            image:
              "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png",
            percentage: "5.00%",
            address: "0x0000000000000000000",
          },
        ],
        address: "0x0000000000000000000",
        createdAt: "Feb 07, 18:43",
        balance: "124583.23",
      },
      {
        name: "Basket 02",
        assets: [
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
        ],
        address: "0x0000000000000000000",
        createdAt: "Feb 07, 18:43",
        balance: "124583.23",
      },
      {
        name: "Basket 03",
        assets: [
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
        ],
        address: "0x0000000000000000000",
        createdAt: "Feb 07, 18:43",
        balance: "124583.23",
      },
      {
        name: "Basket 04",
        assets: [
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
        ],
        address: "0x0000000000000000000",
        createdAt: "Feb 07, 18:43",
        balance: "124583.23",
      },
      {
        name: "Basket 05",
        assets: [
          {
            name: "Bitcoin",
            symbol: "BTC",
            image:
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "BNB",
            symbol: "BNB",
            image:
              "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Tether",
            symbol: "USDT",
            image:
              "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
          {
            name: "Ethereum",
            symbol: "ETH",
            image:
              "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
            percentage: "25.00%",
            address: "0x0000000000000000000",
          },
        ],
        address: "0x0000000000000000000",
        createdAt: "Feb 07, 18:43",
        balance: "124583.23",
      },
    ];

  const totalAssets = tradeBaskets.reduce(
    (acc, curr) => acc + parseFloat(curr.balance),
    0
  );

  const getAssetBalances = () => {
    var assetBalances: {
      [key: string]: {
        name: string;
        symbol: string;
        image: string;
        valueInUsd: number;
        balance: number;
        address: string;
      };
    } = {};

    tradeBaskets.forEach((basket) => {
      basket.assets.forEach((asset) => {
        const { symbol, name, image, address } = asset;
        if (!assetBalances[symbol]) {
          assetBalances[symbol] = {
            name,
            symbol,
            image,
            balance: 1,
            valueInUsd: 1,
            address,
          };
        }
        // assetBalances[symbol].balance += parseFloat(asset.balance);
        assetBalances[symbol].balance += 1;
      });
    });

    return Object.values(assetBalances).map((asset) => ({
      name: asset.name,
      symbol: asset.symbol,
      image: asset.image,
      balance: asset.balance,
      valueInUsd: asset.valueInUsd,
      address: asset.address,
      percentageFromTotalOwned:
        ((asset.balance * asset.valueInUsd) / totalAssets) * 100,
    }));
  };

  const tokenAssets = getAssetBalances();

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-7 py-6 px-20">
      <div className="row-span-2 col-span-1 p-5">
        <TotalAssetsCard totalAssets={totalAssets} />
      </div>
      <div className="row-span-12 col-span-1 p-5">
        <BasketsDistributionCard tradeBaskets={tradeBaskets} />
      </div>
      <div className="row-span-5 col-span-1 p-5">
        <TokenAssetsCard tokenAssets={tokenAssets.slice(0, 6)} />
      </div>
    </div>
  );
};

export default Dashboard;
