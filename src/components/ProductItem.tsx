import { formatCurrentcy } from "@/utils";

type productItemProps = {
  title: string;
  price: number;
  desc: string;
  image: string;
};

export default function ProductItem({
  title,
  price,
  desc,
  image,
}: productItemProps) {
  return (
    <>
      <div className="h-80 flex items-center justify-center">
        <img className="h-full" src={image} alt="Sunset in the mountains" />
      </div>
      <div className="flex flex-col gap-y-2 p-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
        <span className="text-red-600 text-lg font-bold">
          {formatCurrentcy({ value: price, currency: "USD" })}
        </span>
      </div>
    </>
  );
}
