import { Button, Input } from "@material-tailwind/react";
import { FaSearch, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { PiCaretUpDownDuotone } from "react-icons/pi";
import CopyButton from "../components/CopyButton";
import { BasketOfBasketsType } from "../types/types";

const BasketOfBaskets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openedBasketIndex, setOpenedBasketIndex] = useState<number | null>(
    null
  );
  const [amountInEth, setAmountInEth] = useState<number | null>(null);

  const basketOfBaskets: (BasketOfBasketsType & {
    createdAt: string;
    value: string;
  })[] = [
    {
      name: "Trade Basket 01",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 02",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 03",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 04",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 05",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 06",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 07",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 08",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 09",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
    {
      name: "Trade Basket 10",
      assets: [
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
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
          percentage: "10%",
        },
      ],
      createdAt: "Feb 07, 18:43",
      address: "0x0000000000000000000",
      value: "4400.44",
    },
  ];

  const filteredBasketOfBaskets = basketOfBaskets.filter((basket) =>
    basket.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenAccordion = (index: number) => {
    setOpenedBasketIndex((prev) => (prev === index ? null : index));
    setAmountInEth(null);
  };

  const handleInvestInBasket = (
    basket: BasketOfBasketsType & {
      createdAt: string;
      value: string;
    }
  ) => {
    setAmountInEth(null);
    console.log("investing", amountInEth, " ETH in basket", basket);
  };

  return (
    <div className="h-full w-full px-20 py-14">
      <div className="h-full w-full bg-custom-gray-2/20 backdrop-blur-3xl rounded-[20px] p-6">
        <div className="h-10 w-full flex justify-between items-center mb-4">
          <Button
            variant="text"
            className="flex justify-center items-center gap-2 text-lg font-medium text-white py-3"
            size="sm"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Latest
            <PiCaretUpDownDuotone />
          </Button>

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
            <a href="/basket-of-baskets/create-basket-of-baskets">
              <Button
                className="flex items-center gap-2 bg-custom-gray-4/10 text-custom-green"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Create Basket of Basket <FaPlus />
              </Button>
            </a>
          </div>
        </div>
        <div className="h-[calc(100%-60px)] space-y-4 overflow-y-auto">
          {filteredBasketOfBaskets.length === 0 ? (
            <div className="h-full w-full flex justify-center items-center text-white text-2xl font-semibold">
              No baskets found
            </div>
          ) : (
            filteredBasketOfBaskets.map((basket, index) => (
              <div
                key={index}
                className="bg-custom-gray-4/10 rounded-lg p-4 cursor-pointer"
                onClick={() => handleOpenAccordion(index)}
              >
                <div className="h-full w-full px-4 my-0 flex justify-between items-center">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-start items-center gap-2">
                      <div className="text-white text-xl font-semibold">
                        {basket.name}
                      </div>
                      <div className="text-gray-300 text-sm font-regular">
                        {basket.createdAt}
                      </div>
                    </div>
                    <div className="w-[650px] grid grid-cols-4 justify-center items-center gap-4 mt-2">
                      {basket.assets.slice(0, 4).map((asset, idx) => (
                        <div
                          key={idx}
                          className="w-full flex justify-center items-center gap-2 text-white !text-base"
                        >
                          <div className="!text-semibold">{asset.name}</div>
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
                    <div className="flex gap-2">
                      <div className="flex flex-col gap-2">
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
                        <div className="flex justify-center items-center gap-2 text-base">
                          <span className="text-gray-300">Total Assets:</span>
                          <span className="flex justify-center items-center gap-2 text-white font-medium">
                            {basket.value} US$
                          </span>
                        </div>
                      </div>
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

export default BasketOfBaskets;
