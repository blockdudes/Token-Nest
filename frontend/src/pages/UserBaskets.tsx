import { Button, Input } from "@material-tailwind/react";
import { BasketType } from "../types/types";
import { useState } from "react";
import CopyButton from "../components/CopyButton";

const UserBaskets = () => {
  const [openedBasketIndex, setOpenedBasketIndex] = useState<number | null>(
    null
  );
  const [amountInEth, setAmountInEth] = useState<number | null>(null);
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

  const handleInvestInBasket = (
    basket: BasketType & { createdAt: string; balance: string }
  ) => {
    console.log(basket);
  };

  const handleWithdrawFromBasket = (
    basket: BasketType & { createdAt: string; balance: string }
  ) => {
    console.log(basket);
  }; 

  return (
    <div className="h-full w-full flex flex-col gap-4 px-10 py-8">
      <div className="h-full w-full px-20 py-14">
        <div className="h-full w-full bg-custom-gray-2/20 backdrop-blur-3xl rounded-[20px] p-6">
          <div className="w-full flex justify-start items-center p-4">
            <div className="text-white text-3xl font-semibold">
              Baskets Distribution
            </div>
          </div>
          <div className="h-[calc(100%-60px)] space-y-4 overflow-y-auto">
            {tradeBaskets.length === 0 ? (
              <div className="h-full w-full flex justify-center items-center text-white text-2xl font-semibold">
                No baskets found
              </div>
            ) : (
              tradeBaskets.map((basket, index) => (
                <div
                  key={index}
                  className="bg-custom-gray-4/10 rounded-lg p-4 cursor-pointer"
                  onClick={() =>
                    setOpenedBasketIndex((prev) =>
                      prev === index ? null : index
                    )
                  }
                >
                  <div className="h-full w-full px-4 my-0 flex justify-between items-center">
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="text-white text-xl font-semibold">
                        {basket.name}
                      </div>
                      <div className="w-[650px] grid grid-cols-4 justify-center items-center gap-4 mt-2">
                        {basket.assets.slice(0, 4).map((asset, idx) => (
                          <div
                            key={idx}
                            className="w-full flex justify-center items-center gap-2 text-white !text-base"
                          >
                            <div className="!text-semibold">{asset.name}</div>

                            <img
                              src={asset.image}
                              alt={asset.name}
                              width={25}
                              height={25}
                            />
                            <div className="!text-medium">
                              {asset.percentage
                                .replace("%", "")
                                .split(".")[0]
                                .padStart(2, "0")}
                              .
                              {(
                                asset.percentage
                                  .replace("%", "")
                                  .split(".")[1] || "0"
                              ).padEnd(2, "0")}
                              %
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-full w-[280px] px-4 flex flex-col items-end gap-2">
                      <div className="flex justify-center items-center gap-2 text-base">
                        <span className="text-gray-300">Address:</span>
                        <span className="flex justify-center items-center gap-2 text-white font-medium">
                          {basket.address.length > 18
                            ? basket.address.slice(0, 7) +
                              "..." +
                              basket.address.slice(-7)
                            : basket.address}
                          <CopyButton text={basket.address} />
                        </span>
                      </div>
                      <div className="text-3xl text-white">
                        ${basket.balance}
                      </div>
                    </div>
                  </div>
                  {openedBasketIndex === index && (
                    <div className="h-full w-full px-4 my-0 flex justify-between items-end">
                      <div className="h-full flex flex-col gap-2">
                        <div className="h-full w-[650px] grid grid-cols-4 justify-center items-center gap-4 mt-2">
                          {basket.assets.slice(4).map((asset, idx) => (
                            <div
                              key={idx}
                              className="w-full flex justify-center items-center gap-2 text-white !text-base"
                            >
                              <div className="!text-semibold">{asset.name}</div>

                              <img
                                src={asset.image}
                                alt={asset.name}
                                width={25}
                                height={25}
                              />
                              <div className="!text-medium">
                                {asset.percentage
                                  .replace("%", "")
                                  .split(".")[0]
                                  .padStart(2, "0")}
                                .
                                {(
                                  asset.percentage
                                    .replace("%", "")
                                    .split(".")[1] || "0"
                                ).padEnd(2, "0")}
                                %
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[350px] grid grid-cols-[1fr_1fr] justify-center items-center gap-2 mb-2 ml-2"
                      >
                        <Input
                          type="number"
                          variant="outlined"
                          color="white"
                          className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow-lg"
                          label="Amount in ETH"
                          value={amountInEth ?? ""}
                          onChange={(e) =>
                            setAmountInEth(parseFloat(e.target.value) || null)
                          }
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                          crossOrigin={undefined}
                        />
                        <Button
                          className="!bg-custom-gray-3/40 !text-custom-green"
                          onClick={() => handleInvestInBasket(basket)}
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Deposit
                        </Button>
                        <Button
                          className="col-span-2 !bg-custom-gray-3/40 !text-custom-green"
                          onClick={() => handleWithdrawFromBasket(basket)}
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBaskets;
