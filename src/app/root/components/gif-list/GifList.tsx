import { useSelector } from "react-redux";
import { Gif } from "../../types/Gif.type"; //@/root/types/Gif.type
import { GifItem } from "../gif-item/GifItem";
import { promotionPrice } from "../../constants/common.constants"; //../root/constants/common.constant
import { selectGifs } from "../../redux/selectors/gif-selector/gif.selector";//../root/redux/selectors/gif-selector/gif.selector
export const GifList = () => {
const gifFoundList = useSelector(selectGifs);
return (
<div className="grid grid-cols-3 gap-4 justify-center">
{gifFoundList.map((gif: Gif) => (
<GifItem
key={gif.id}
title={gif.title}
gifImageUrl={gif.url}
price={promotionPrice}
/>
))}
</div>
);
};