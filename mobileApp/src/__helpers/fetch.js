import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../_api/api';
import { useStorage } from '../_hook/useStorage';

export const fetch = (route) => {
	const [token, setToken] = useStorage('token', '');
	const [data, setData] = useState([]);
	const [pending, setPending] = useState(false);

	const handleFetchData = () => {
		setData([]);
		setPending(true);
		axios
			.get(baseUrl + route, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			})
			.then(res => {
				setPending(false);
				if (res.data.status == 200) {
					setData(res.data.data);
				} else {
					setData([]);
				}
			})
			.catch(err => console.warn(err));
	};
	useEffect(() => {
		if (token) {
			handleFetchData();
		}
	}, [token]);
	return [data, pending];
}