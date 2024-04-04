import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { title, image, price, description, options, category } = product;
  console.log(options);

  return (
    <section className="px-7">
      <div className="p-3">{category}</div>
      <article className="flex flex-row gap-10">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="w-[30%] pt-4">
          <p className="text-4xl mb-3">{title}</p>
          <p className="text-4xl border-b-[3px] border-gray-300 w-full pb-3 mb-4">
            ₩{price}
          </p>
          <p className="text-xl">{description}</p>
          <form className="mt-7">
            <label className="mr-2 text-brand" for="lang">
              옵션:
            </label>
            <select
              className="p-2 border border-brand mb-5"
              name="size"
              id="lang"
            >
              <option value="javascript">JavaScript</option>
            </select>
          </form>
          <Button text="장바구니에 추가" />
        </div>
      </article>
    </section>
  );
}
