import { Button, Input } from "@material-tailwind/react";
import { FaSearch, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TbArrowBigDownFilled, TbArrowBigUpFilled } from "react-icons/tb";
import { useState } from "react";
import { BasketType } from "../types/types";
import CopyButton from "../components/CopyButton";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openedBasketIndex, setOpenedBasketIndex] = useState<number | null>(
    null
  );
  const [amountInEth, setAmountInEth] = useState<number | null>(null);

  const baskets: (BasketType & { upvotes: number; downvotes: number })[] = [
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
      upvotes: 780,
      downvotes: 80,
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
      upvotes: 780,
      downvotes: 80,
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
      upvotes: 780,
      downvotes: 80,
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
      upvotes: 780,
      downvotes: 80,
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
      upvotes: 780,
      downvotes: 80,
    },
    {
      name: "Basket 06",
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
      upvotes: 780,
      downvotes: 80,
    },
    {
      name: "Basket 07",
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
      upvotes: 780,
      downvotes: 80,
    },
    {
      name: "Basket 08",
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
      upvotes: 780,
      downvotes: 80,
    },
    {
      name: "Basket 09",
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
      upvotes: 780,
      downvotes: 80,
    },
    {
      name: "Basket 10",
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
      upvotes: 780,
      downvotes: 80,
    },
  ];

  const filteredBaskets = baskets.filter((basket) =>
    basket.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInvestInBasket = (
    basket: BasketType & { upvotes: number; downvotes: number }
  ) => {
    setAmountInEth(null);
    console.log("investing", amountInEth, " ETH in basket", basket);
  };

  return (
    <div className="h-full w-full px-20 py-14">
      <div className="h-full w-full bg-custom-gray-2/20 backdrop-blur-3xl rounded-[20px] p-6">
        <div className="h-10 w-full flex justify-between items-center mb-4">
          <div className="h-full grid grid-cols-[10fr_1fr_7fr]">
            <Button
              variant="text"
              className="text-white py-3"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Most Upvote
            </Button>
            <div className="flex justify-center items-center">
              <div className="h-5/6 w-[1px] bg-white" />
            </div>
            <Button
              variant="text"
              className="text-white py-3"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Latest
            </Button>
          </div>
          <div className="h-full flex items-center gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              <Input
                type="text"
                color="white"
                placeholder="Search"
                label="Search"
                size="md"
                className="pl-10 rounded-full !border-[1px] !border-white placeholder:opacity-100 hover:shadow-xl"
                labelProps={{
                  className: "hidden",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </div>
            <a href="/marketplace/create-basket">
              <Button
                className="flex items-center gap-2 bg-custom-gray-4/10 text-custom-green"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Create Basket <FaPlus />
              </Button>
            </a>
          </div>
        </div>
        <div className="h-[calc(100%-60px)] space-y-4 overflow-y-auto">
          {filteredBaskets.length === 0 ? (
            <div className="h-full w-full flex justify-center items-center text-white text-2xl font-semibold">
              No baskets found
            </div>
          ) : (
            filteredBaskets.map((basket, index) => (
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
                              asset.percentage.replace("%", "").split(".")[1] ||
                              "0"
                            ).padEnd(2, "0")}
                            %
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-full w-[280px] px-4">
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
                    <div className="ml-4 grid grid-cols-5 justify-center items-center">
                      <Button
                        variant="text"
                        size="lg"
                        color="white"
                        className="col-span-2 flex justify-center items-center gap-2 text-lg px-5 mx-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <div className="h-[20px] w-[20px] flex justify-center items-center">
                          <TbArrowBigUpFilled className="h-[20px] w-[20px]" />
                        </div>
                        <span>{basket.upvotes}</span>
                      </Button>
                      <Button
                        variant="text"
                        size="lg"
                        color="white"
                        className="col-span-2 flex justify-center items-center gap-2 text-lg px-5 mx-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <div className="h-[20px] w-[20px] flex justify-center items-center">
                          <TbArrowBigDownFilled className="h-[20px] w-[20px]" />
                        </div>
                        <span>{basket.downvotes}</span>
                      </Button>
                      <div className="flex justify-center items-center">
                        {openedBasketIndex === index ? (
                          <FaChevronUp
                            className="h-[18px] w-[18px]"
                            color="white"
                          />
                        ) : (
                          <FaChevronDown
                            className="h-[18px] w-[18px]"
                            color="white"
                          />
                        )}
                      </div>
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
                        Invest In
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
  );
};

export default Marketplace;
