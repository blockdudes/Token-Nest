import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BasketType } from "../types/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BasketSelectorCard from "../components/BasketSelectorCard";
import CreateBasketOfBasketsCard from "../components/CreateBasketOfBasketsCard";

const CreateBasket = () => {
  const navigate = useNavigate();
  const [basketOfBasketsName, setBasketOfBasketsName] = useState<string>("");
  const [baskets, setBaskets] = useState<
    (BasketType & { percentage: `${number}%` })[]
  >([]);
  const [basketSelectorOpen, setBasketSelectorOpen] = useState<boolean>(false);

  const handleAddBasket = (basket: BasketType, percentage: `${number}%`) => {
    setBaskets((prev) => [...prev, { ...basket, percentage }]);
  };

  const handleRemoveBasket = (basket: BasketType) => {
    setBaskets((prev) => prev.filter((b) => b.name !== basket.name));
  };

  const setBasketPercentage = (
    basket: BasketType,
    percentage: `${number}%`
  ) => {
    setBaskets((prev) => {
      const index = prev.findIndex((b) => b.name === basket.name);
      const newTokens = [...prev];
      newTokens[index].percentage = percentage;
      return newTokens;
    });
  };

  const handleCreateBasket = () => {
    if (basketOfBasketsName === "") {
      toast.error("Basket name cannot be empty");
      return;
    } else if (baskets.length === 0) {
      toast.error("Basket must have at least one token");
      return;
    }
    const totalPercentage = baskets
      .reduce(
        (acc, curr) =>
          acc + parseFloat(parseFloat(curr.percentage.slice(0, -1)).toFixed(2)),
        0
      )
      .toFixed(2);
    if (totalPercentage !== "100.00") {
      toast.error("Percentages do not add up to 100%");
      toast.error("Current percentage: " + totalPercentage);
      return;
    }

    console.log(basketOfBasketsName, baskets);
    toast.success("Basket created");
    navigate("/marketplace", {
      replace: true,
    });
  };

  return (
    <div className="h-full w-full px-20 py-14">
      <div className="h-full w-full flex flex-col justify-between items-center gap-8 bg-custom-gray-2/20 backdrop-blur-3xl rounded-[20px] p-8">
        <div className="h-[calc(100%-75px)] w-full ">
          {basketSelectorOpen ? (
            <BasketSelectorCard
              baskets={baskets}
              addBasket={handleAddBasket}
              setBasketSelectorOpen={setBasketSelectorOpen}
            />
          ) : (
            <CreateBasketOfBasketsCard
              basketName={basketOfBasketsName}
              setBasketName={setBasketOfBasketsName}
              baskets={baskets}
              setBasketPercentage={setBasketPercentage}
              setBasketSelectorOpen={setBasketSelectorOpen}
              removeBasket={handleRemoveBasket}
            />
          )}
        </div>
        <Button
          className="flex items-center gap-2 bg-custom-gray-4/10 text-custom-green"
          onClick={handleCreateBasket}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Create Basket of Baskets <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default CreateBasket;
