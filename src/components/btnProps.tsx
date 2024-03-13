import Image from "next/image";

export default function Btn({img, text, tc, bg}) {
    return (
        <button className="btn w-[252px] h-[64px] gap-3  text-[18px] rounded-[16px]" style={{background: bg, color: tc}}>
            <div className="flex items-center gap-3 w-[80%]">
                    <Image src={img} alt='location' />
                    {text}
            </div>
        </button>
    )
}