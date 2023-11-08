"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AnswerIcon, QuestionIcon } from "@/components/elements/svg";
import { useParams, useSearchParams } from "next/navigation";
import {
	useAddToProductQnaMutation,
	useGetProductQnaListQuery,
} from "@/store/api/productsQnaAPI";
import { getBdFormattedDate } from "@/utils/format-date";
import Paginator from "@/components/elements/Paginator";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RoundedSearch from "@/components/elements/RoundedSearch";
import ItemsListLoader from "@/components/elements/loaders/ItemsListLoader";

const QuestionAnswer = () => {
	const [isSearch, setIsSearch] = useState(false);
	const { product_id } = useParams();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { data, isLoading } = useGetProductQnaListQuery(
		product_id + "?" + params.toString()
	);
	const [addQuestion] = useAddToProductQnaMutation();
	const questions = data?.data || [];
	const meta = data?.meta || {};

	const onSubmit = (data) => {
		const newQuestion = {
			product_id,
			questions: data.question,
		};
		console.log(newQuestion);
		addQuestion(newQuestion)
			.unwrap()
			.then((response) => {
				// Handle the successful response if necessary
				// console.log(response);
				toast.success("Question added, You'll get a reply soon");
			})
			.catch((error) => {
				// Handle the error if necessary
				toast.error("Failed to add your question");
				console.log(error);
			});
	};

	return (
		<>
			<div className="question-answer mb-8">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold font-title text-slate-900">
						এই প্রডাক্ট সম্পর্কে প্রশ্ন ও উত্তর ({meta?.total || 0})
					</h2>
					<button
						className="w-[48px] h-[48px] bg-white rounded-full border-2 border-[#E2E8F0] flex justify-center items-center"
						onClick={() => setIsSearch(true)}
					>
						<FiSearch size={24} />
					</button>
				</div>
				<div
					className={`w-full question-search my-12 flex items-center relative ${
						isSearch ? "block" : "hidden"
					}`}
				>
					<RoundedSearch placeholder={"এই প্রডাক্ট সম্পর্কে সার্চ করুন"} />
					<Image
						onClick={() => setIsSearch(false)}
						src={`/assets/images/icons/close-icon.png`}
						alt="close icon"
						width={0}
						height={0}
						sizes="32px"
						className="w-[32px] h-[32px] ml-6"
					/>
				</div>
				<form className="my-8" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex justify-between gap-4">
						<textarea
							className="h-[3rem] w-[25.75rem] border-2 border-[#E2E8F0] focus:border-primary focus:outline-none rounded-lg py-3 px-4"
							type="text"
							placeholder="প্রডাক্ট সম্পর্কে আপনার প্রশ্ন লিখুন "
							{...register("question", {
								required: "Question is required.",
							})}
						/>

						<div className="product-actions flex justify-center items-center gap-2">
							<button type="submit" className="primary-btn w-[12.25rem]">
								প্রশ্ন জিজ্ঞাস করুন
							</button>
						</div>
					</div>
					{errors.question && (
						<p className="errorMsg">{errors.question.message}</p>
					)}
				</form>
				{isLoading ? (
					<ItemsListLoader noImage={true} numItems={2} />
				) : (
					questions.map((question) => (
						<div key={question.id} className="mb-2 bg-[#F8FAFC] rounded-lg p-6">
							<div className="flex justify-start">
								<div className="icon-container">
									<QuestionIcon />
								</div>
								<div className="icon-container pl-5">
									<p className="font-bold">{question.questions}</p>
									<p className="text-slate-500">
										{question?.customer || "Not Available"} |{" "}
										{getBdFormattedDate(question.created_at)}
									</p>
								</div>
							</div>
							{question?.answer ? (
								<div className="flex justify-start mt-3">
									<div className="icon-container">
										<AnswerIcon />
									</div>
									<div className="icon-container pl-5">
										<p className="font-bold">{question.answer}</p>
										<p className="text-slate-500">
											Sototastall | {getBdFormattedDate(question.updated_at)}
										</p>
									</div>
								</div>
							) : null}
						</div>
					))
				)}
			</div>
			<div className="flex justify-end mb-10">
				<Paginator meta={meta} />
			</div>
		</>
	);
};

export default QuestionAnswer;
