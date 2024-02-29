"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import QAItem from "./elements/QAItem";
import { useGetFaqsQuery } from "@/store/api/faqsAPI";
import ItemsListLoader from "./elements/loaders/ItemsListLoader";
import NoItems from "@/app/[locale]/dashboard/_components/NoItems";

export default function QNAItems() {
	const { locale } = useParams();
	const { data, isLoading } = useGetFaqsQuery({ locale });
	const [open, setOpen] = useState(0);
	const faqs = data?.data || [];

	const toggleOpen = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};
	return (
		<div className="qna-wpr mt-4 md:mt-4">
			{isLoading ? (
    <div className="mb-6">
        <ItemsListLoader numItems={3} noImage={true} viewBoxWidth={900} />
    </div>
) : (
    faqs?.length < 1 ? (
        <NoItems text="No QnA found" />
    ) : (
        faqs?.map((item, index) => (
            <QAItem
                item={{ ...item, index }}
                key={index}
                open={open === index}
                toggleOpen={toggleOpen}
            />
        ))
    )
)}
		</div>
	);
}
