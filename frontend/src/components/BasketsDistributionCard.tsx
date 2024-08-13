import { Card } from "@material-tailwind/react";
import CopyButton from "./CopyButton";
import { FaChevronRight } from "react-icons/fa";
import { BasketType } from "../types/types";
import { useNavigate } from "react-router-dom";
const BasketsDistributionCard = ({
  tradeBaskets,
  expanded = false,
}: {
  tradeBaskets: (BasketType & { createdAt: string; balance: string })[];
  expanded?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <Card
      className="h-full w-full bg-custom-gray-3/10 backdrop-blur-3xl text-white p-5"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-medium">Baskets Distribution</div>
        {!expanded && (
          <div
            className="flex items-center gap-1 text-sm font-normal select-none cursor-pointer"
            onClick={() => navigate("/user-baskets")}
          >
            More <FaChevronRight />
          </div>
        )}
      </div>
      <div className="m-4">
        {tradeBaskets.map((tradeBasket, index) => (
          <div key={index} className="mb-4 border-b-2 pb-2">
            <div className="flex justify-start items-center gap-2">
              <div className="text-xl font-semibold">Trade Basket</div>
              <div className="text-sm font-light">{tradeBasket.createdAt}</div>
            </div>
            <div className="grid grid-cols-7 gap-4 mt-1">
              <div className="col-span-4 flex flex-wrap gap-x-4 gap-y-1">
                {tradeBasket.assets.slice(0, 4).map((token, idx) => (
                  <div
                    key={idx}
                    className="flex justify-center items-center gap-2 text-base"
                  >
                    <div>{token.name}</div>
                    <img
                      src={token.image}
                      alt={token.name}
                      className="w-4 h-4"
                    />
                    <div className="text-sm">{token.percentage}</div>
                  </div>
                ))}
              </div>
              <div className="col-span-3 flex flex-col items-end">
                <div className="flex justify-end items-center gap-2 text-sm font-normal">
                  {tradeBasket.address.length > 12
                    ? tradeBasket.address.slice(0, 4) +
                      "..." +
                      tradeBasket.address.slice(-4)
                    : tradeBasket.address}
                  <CopyButton text={tradeBasket.address} />
                </div>
                <div className="text-xl">${tradeBasket.balance}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BasketsDistributionCard;
