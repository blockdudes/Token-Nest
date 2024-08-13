import { useState } from "react";
import { BasketType } from "../types/types";
import { Badge, Button } from "@material-tailwind/react";
import { MdDone } from "react-icons/md";
import toast from "react-hot-toast";

const BasketSelectorCard = ({
  baskets,
  addBasket,
  setBasketSelectorOpen,
}: {
  baskets: (BasketType & { percentage: `${number}%` })[];
  addBasket: (basket: BasketType, percentage: `${number}%`) => void;
  setBasketSelectorOpen: (open: boolean) => void;
}) => {
  const [selectedBaskets, setSelectedBaskets] = useState<BasketType[]>([]);
  const basketsOptions: BasketType[] = [
    {
      name: "Basket 01",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
    {
      name: "Basket 02",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
    {
      name: "Basket 03",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
    {
      name: "Basket 04",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
    {
      name: "Basket 05",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
    {
      name: "Basket 06",
      assets: [
        {
          name: "Bitcoin",
          symbol: "BTC",
          image:
            "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Ethereum",
          symbol: "ETH",
          image:
            "https://assets.coingecko.com/coins/images/279/standard/ethereum.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "Solana",
          symbol: "SOL",
          image:
            "https://assets.coingecko.com/coins/images/4128/standard/solana.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "BNB",
          symbol: "BNB",
          image:
            "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Tether",
          symbol: "USDT",
          image:
            "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
          percentage: "10%",
          address: "0x0000000000000000000",
        },
        {
          name: "USDC",
          symbol: "USDC",
          image:
            "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Dogecoin",
          symbol: "DOGE",
          image:
            "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
        {
          name: "Toncoin",
          symbol: "TON",
          image:
            "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png",
          percentage: "15%",
          address: "0x0000000000000000000",
        },
      ],
      address: "0x0000000000000000000",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-around items-center gap-2 bg-custom-gray-4/10 text-white rounded-lg p-6">
      <div className="h-[calc(100%-85px)] w-full grid grid-cols-3 grid-rows-4 gap-4 bg-custom-gray-4/10 rounded-lg p-4">
        {basketsOptions.map((basket, index) => (
          <Badge
            key={index}
            color="green"
            content={<MdDone />}
            invisible={
              !selectedBaskets.filter((b) => b.name === basket.name).length
            }
          >
            <div
              onClick={
                selectedBaskets.filter((b) => b.name === basket.name).length > 0
                  ? () =>
                      setSelectedBaskets(
                        selectedBaskets.filter((b) => b.name !== basket.name)
                      )
                  : () => {
                      const tokensAlreadyAdded = baskets.filter(
                        (b) => b.name === basket.name
                      );
                      console.log(tokensAlreadyAdded);
                      if (tokensAlreadyAdded.length > 0) {
                        toast.error("Token already added");
                        return;
                      }
                      setSelectedBaskets([...selectedBaskets, basket]);
                    }
              }
              className="w-full h-full flex justify-start items-center gap-4 bg-custom-gray-4/10 rounded-lg p-6 cursor-pointer"
            >
              <div className="text-2xl font-semibold">{basket.name}</div>
            </div>
          </Badge>
        ))}
      </div>
      <div className="w-full flex justify-end items-center gap-2">
        <Button
          variant="outlined"
          color="red"
          onClick={() => {
            setSelectedBaskets([]);
            setBasketSelectorOpen(false);
          }}
          className="w-32 flex justify-center items-center gap-2 text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Cancel
        </Button>
        <Button
          onClick={
            selectedBaskets.length > 0
              ? () => {
                  const maxAllowedPercentage =
                    100 -
                    baskets
                      .filter((b) => b.name !== selectedBaskets[0].name)
                      .reduce(
                        (acc, curr) =>
                          acc + parseFloat(curr.percentage.slice(0, -1)),
                        0
                      );
                  const percentagePerToken = (
                    maxAllowedPercentage / selectedBaskets.length
                  ).toFixed(2);
                  selectedBaskets.forEach((basket) => {
                    addBasket(basket, `${Number(percentagePerToken)}%`);
                  });
                  setBasketSelectorOpen(false);
                  setSelectedBaskets([]);
                }
              : () => {
                  toast.error("No token selected");
                }
          }
          variant="outlined"
          color="green"
          className="w-32 flex justify-center items-center gap-2 text-white"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default BasketSelectorCard;
