"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	// setLocale,
	setSettings,
	setTranslations,
} from "@/store/slices/commonSlice";
// import api from "@/store/features/api/api";

export default function ClientLoader({
	settings: settingsProp,
	translations: translationsProp,
	// locale: localeProp,
}) {
	const dispatch = useDispatch();
	// console.log(localeProp);
	// const { locale } = useSelector((state) => state.common);
	// console.log(locale, "dsdsd");

	useEffect(() => {
		if (settingsProp) {
			try {
				dispatch(setSettings(settingsProp));
			} catch (error) {
				console.log(error);
			}
		}
		if (translationsProp) {
			try {
				dispatch(setTranslations(translationsProp));
			} catch (error) {
				console.log(error);
			}
		}

		// if (localeProp !== locale) {
		//   console.log("checking");
		//   try {
		//     dispatch(setLocale(localeProp));
		//     // dispatch(api.util.resetApiState());
		//     // dispatch(api.util.invalidateTags(["wishlist"]));
		//   } catch (error) {
		//     console.log(error);
		//   }
		// }
	}, [dispatch, settingsProp, translationsProp]);
	return null;
}
